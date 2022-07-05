import { RootState } from '../../app/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {
  UserInfo,
  Credentials,
  SignupDetail,
} from '../../interface/userInterface'

interface UserLoginState {
  user: UserInfo | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState: UserLoginState = {
  user: null,
  status: 'idle',
  error: '',
}

export const login = createAsyncThunk(
  'userLogin/login',
  async (credentials: Credentials) => {
    const { email, password } = credentials
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login/',
      {
        username: email,
        password: password,
      },
      config
    )

    return data
  }
)

export const signup = createAsyncThunk(
  'userLogin/signup',
  async (detail: SignupDetail) => {
    const { name, email, password } = detail
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/register/',
      {
        name,
        email,
        password,
      },
      config
    )

    return data
  }
)

const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    logout: (state: UserLoginState) => {
      state.user = null
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(signup.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectUserToken = (state: RootState) => {
  if (state.user.user) return state.user.user.token
  else return ''
}
export const selectUserStatus = (state: RootState) => state.user.status
export const selectUserError = (state: RootState) => state.user.error
export default userSlice.reducer
