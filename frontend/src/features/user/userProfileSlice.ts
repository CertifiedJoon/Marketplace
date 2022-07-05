import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import {
  UserProfile,
  UserProfilePlaceholder,
} from '../../interface/userProfileInterface'

interface UserProfileState {
  userProfile: UserProfile | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string
}

const initialState: UserProfileState = {
  userProfile: UserProfilePlaceholder,
  status: 'idle',
  error: '',
}

export const getUserProfile = createAsyncThunk<
  UserProfile,
  undefined,
  {
    state: RootState
  }
>('userProfile/getUserProfile', async (args, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const { data } = await axios.get('/api/users/profile/', config)
  return data as UserProfile
})

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    profileout: (state: UserProfileState) => {
      state.userProfile = UserProfilePlaceholder
      state.status = 'idle'
    },
  },
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

export const { profileout } = userProfileSlice.actions

export const selectUserProfileStatus = (state: RootState) =>
  state.userProfile.status
export const selectUserProfile = (state: RootState) => {
  if (state.userProfile.userProfile) return state.userProfile.userProfile
  else return UserProfilePlaceholder
}
export const selectUserImage = (state: RootState) => {
  if (state.userProfile.userProfile)
    return state.userProfile.userProfile.profile_image
  else return UserProfilePlaceholder.profile_image
}
export const selectUserCommunities = (state: RootState) => {
  if (state.userProfile.userProfile)
    return state.userProfile.userProfile.communities
  else return UserProfilePlaceholder.communities
}
export default userProfileSlice.reducer
