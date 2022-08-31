import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

import { Membership } from "../../interface/communityInterface";
import { KnownError } from "../../interface/exceptionInterface";

interface MembershipState {
  memberships: Array<Membership>;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState: MembershipState = {
  memberships: [],
  status: "idle",
  error: "",
};

export const joinCommunity = createAsyncThunk<
  Membership,
  string,
  {
    state: RootState;
    rejectValue: KnownError;
  }
>("community/join-community", async (community_id, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : "";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let data: Membership | null = null;
  try {
    const response = await axios.post(
      `/api/community/join/${community_id}/`,
      {},
      config
    );
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError);
    }
  }
  return data as Membership;
});

export const getMemberships = createAsyncThunk<
  Array<Membership>,
  undefined,
  {
    state: RootState;
    rejectValue: KnownError;
  }
>("community/memberships", async (args, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : "";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let data: Array<Membership> | null = null;
  try {
    const response = await axios.get("/api/community/memberships/", config);
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError);
    }
  }
  return data as Array<Membership>;
});

const membershipSlice = createSlice({
  name: "membership",
  initialState,
  reducers: {
    membershipout: (state: MembershipState) => {
      state.memberships = [];
      state.status = "idle";
      state.error = "";
    },
    resetMembershipStatus: (state: MembershipState) => {
      state.status = "idle";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMemberships.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getMemberships.fulfilled, (state, action) => {
        state.memberships = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMemberships.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(joinCommunity.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(joinCommunity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.memberships.push(action.payload);
      })
      .addCase(joinCommunity.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        }
      });
  },
});

export const { membershipout, resetMembershipStatus } = membershipSlice.actions;

export const selectMemberships = (state: RootState) =>
  state.membership.memberships;

export const selectMembershipStatus = (state: RootState) =>
  state.membership.status;

export const selectMembershipError = (state: RootState) =>
  state.membership.error;

export default membershipSlice.reducer;
