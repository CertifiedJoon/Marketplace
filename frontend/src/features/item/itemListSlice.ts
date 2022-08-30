import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { Item, ItemBrief } from "../../interface/itemInterface";
import axios from "axios";
import { string } from "yup";
import { KnownError } from "../../interface/exceptionInterface";

interface itemListState {
  itemList: Array<ItemBrief>;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState = {
  itemList: [],
  status: "idle",
  error: "",
} as itemListState;

export const getItemsFiltered = createAsyncThunk<
  Array<ItemBrief>,
  { community: string; type: string },
  {
    rejectValue: KnownError;
  }
>("itemList/getItemsFiltered", async (args, thunkApi) => {
  let data: Array<ItemBrief> = [];
  try {
    const response = await axios.get(
      `/api/items/?community=${args.community}&type=${args.type}`
    );
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError);
    }
  }
  return data as Array<ItemBrief>;
});

export const getMoreItemsFiltered = createAsyncThunk<
  Array<ItemBrief>,
  { community: string; type: string },
  {
    state: RootState;
    rejectValue: KnownError;
  }
>("itemList/getItemsFiltered", async (args, thunkApi) => {
  let data: Array<ItemBrief> = [];
  try {
    const response = await axios.get(
      `/api/items/?community=${args.community}&type=${args.type}&last=${
        thunkApi.getState().items.itemList[-1]._id
      }`
    );
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data as KnownError);
      }
    }
  }
  return data;
});

export const getMyItems = createAsyncThunk<
  Array<ItemBrief>,
  { community: string; type: string },
  {
    state: RootState;
    rejectValue: KnownError;
  }
>(
  "itemList/getMyItems",
  async (args: { community: string; type: string }, thunkApi) => {
    let token = thunkApi.getState().user.user?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let data: Array<ItemBrief> = [];
    try {
      const response = await axios.get(
        `/api/items/my-items/?community=${args.community}&type=${args.type}`,
        config
      );
      data = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return thunkApi.rejectWithValue(error.response.data as KnownError);
        }
      }
    }
    return data;
  }
);

const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyItems.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getMyItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemList = action.payload;
      })
      .addCase(getMyItems.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getItemsFiltered.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getItemsFiltered.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemList = action.payload;
      })
      .addCase(getItemsFiltered.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getMoreItemsFiltered.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getMoreItemsFiltered.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemList.concat(action.payload);
      })
      .addCase(getMoreItemsFiltered.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const selectItems = (state: RootState) => state.items.itemList;
export const selectItemsStatus = (state: RootState) => state.items.status;
export default itemListSlice.reducer;
