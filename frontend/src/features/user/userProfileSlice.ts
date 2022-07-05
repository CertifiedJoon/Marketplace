import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'

import { useAppSelector } from '../../app/hook'
import { selectUserToken } from '../../features/user/userSlice'
import {
  UserProfile,
  UserProfilePlaceholder,
} from '../../interface/userProfileInterface'

interface UserProfileState {
  userProfile: UserProfile | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string
}

const initialState = {
  userProfile: null,
  status: 'idle',
  error: '',
}

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async () => {
    const token = useAppSelector(selectUserToken)

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.get('/api/users/profile/', config)
    return data
  }
)

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload
        state.status = 'succeeded'
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error.message) state.error = action.error.message
      })
  },
})

export const selectUserProfileStatus = (state: RootState) =>
  state.userProfile.status
export const selectUserProfile = (state: RootState) =>
  state.userProfile.userProfile
export default userProfileSlice.reducer
