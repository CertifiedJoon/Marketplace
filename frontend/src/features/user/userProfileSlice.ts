import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import {
  UserProfile,
  UserProfilePlaceholder,
  ProfileUpdate,
} from '../../interface/userProfileInterface'
import { UserProfileImage } from '../../interface/userInterface'

interface UserProfileState {
  userProfile: UserProfile | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState: UserProfileState = {
  userProfile: UserProfilePlaceholder,
  status: 'idle',
  error: '',
}

interface KnownError {
  detail: string
  code: string
  messages: Array<{
    token_class: string
    token_type: string
    message: string
  }>
}

export const getUserProfile = createAsyncThunk<
  UserProfile,
  undefined,
  {
    state: RootState
    rejectValue: KnownError
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
  let data: UserProfile | null = null
  try {
    const response = await axios.get('/api/users/profile/', config)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error))
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data as KnownError)
      }
  }
  return data as UserProfile
})

export const uploadProfileImage = createAsyncThunk<
  UserProfileImage,
  File,
  {
    state: RootState
    rejectValue: KnownError
  }
>('userProfile/uploadProfileImage', async (image, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }
  const profile_image = {
    profile_image: image,
  }
  let data: UserProfileImage | null = null
  try {
    const response = await axios.put(
      '/api/users/upload-profile-image/',
      profile_image,
      config
    )
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as UserProfileImage
})

export const updateUserProfile = createAsyncThunk<
  UserProfile,
  ProfileUpdate,
  {
    state: RootState
    rejectValue: KnownError
  }
>('userProfile/updateUserProfile', async (patch, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let data: UserProfile | null = null
  try {
    const response = await axios.put(
      '/api/users/profile/update/',
      patch,
      config
    )
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as UserProfile
})

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    profileout: (state: UserProfileState) => {
      state.userProfile = UserProfilePlaceholder
      state.status = 'idle'
      state.error = ''
    },
    resetUserProfileStatus: (state: UserProfileState) => {
      state.status = 'idle'
      state.error = ''
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
        if (action.payload) {
          state.error = action.payload.messages[0].message
        } else {
          state.error = action.error.message
        }
      })
      .addCase(updateUserProfile.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload
        state.status = 'succeeded'
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.messages[0].message
        } else {
          state.error = action.error.message
        }
      })
      .addCase(uploadProfileImage.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        const prevState = state.userProfile as UserProfile
        state.userProfile = {
          ...prevState,
          profile_image: action.payload.profile_image,
        }
        state.status = 'succeeded'
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.messages[0].message
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { profileout, resetUserProfileStatus } = userProfileSlice.actions

export const selectUserProfileStatus = (state: RootState) =>
  state.userProfile.status

export const selectUserProfileError = (state: RootState) =>
  state.userProfile.error

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
