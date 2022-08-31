import { RootState } from "../../app/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  UserInfo,
  Credentials,
  SignupDetail,
} from "../../interface/userInterface";

interface UserLoginState {
  user: UserInfo | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: UserLoginState = {
  user: null,
  status: "idle",
  error: undefined,
};

interface KnownError {
  error: {
    status_code: number;
    message: string;
    details: {
      detail: string;
    };
  };
}

export const login = createAsyncThunk<
  UserInfo,
  Credentials,
  {
    rejectValue: KnownError;
  }
>("userLogin/login", async (credentials: Credentials, thunkApi) => {
  const { email, password } = credentials;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  let data: UserInfo | null = null;
  try {
    const response = await axios.post(
      "/api/users/login/",
      {
        username: email,
        password: password,
      },
      config
    );
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError);
    }
  }
  return data as UserInfo;
});

export const signup = createAsyncThunk<
  UserInfo,
  SignupDetail,
  {
    rejectValue: KnownError;
  }
>("userLogin/signup", async (detail: SignupDetail, thunkApi) => {
  const { name, email, password } = detail;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  let data: UserInfo | null = null;
  try {
    const response = await axios.post(
      "/api/users/register/",
      {
        name,
        email,
        password,
      },
      config
    );
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      return thunkApi.rejectWithValue(error.response?.data as KnownError);
  }
  return data as UserInfo;
});

export const changePassword = createAsyncThunk<
  undefined,
  { currentPassword: string; newPassword: string },
  {
    state: RootState;
    rejectValue: {
      error: {
        status_code: number;
        message: string;
        details: Array<string>;
      };
    };
  }
>("user/changePassword", async (args, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : "";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(
      "/api/users/change-password/",
      args,
      config
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return thunkApi.rejectWithValue(
          error.response.data as {
            error: {
              status_code: number;
              message: string;
              details: Array<string>;
            };
          }
        );
      }
    }
  }
});

const userSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    logout: (state: UserLoginState) => {
      state.user = null;
      state.status = "idle";
      state.error = "";
    },
    resetUserStatus: (state: UserLoginState) => {
      state.status = "idle";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details.detail;
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(signup.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details.detail;
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(changePassword.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.error.details[0];
        }
      });
  },
});

export const { logout, resetUserStatus } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserToken = (state: RootState) => {
  if (state.user.user) return state.user.user.token;
  else return "";
};
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;
export default userSlice.reducer;
