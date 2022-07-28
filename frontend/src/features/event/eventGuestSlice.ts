import { RootState } from '../../app/store'
import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { KnownError } from '../../interface/exceptionInterface'

interface EventGuestState {
  signupDetail: SignupDetail
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

interface SignupDetail {
  details: string
}

const initialState: EventGuestState = {
  signupDetail: {
    details: '',
  },
  status: 'idle',
  error: '',
}

export const eventSignup = createAsyncThunk<
  SignupDetail,
  {
    details: string
    _id: string
  },
  {
    state: RootState
    rejectValue: KnownError
  }
>('eventGuest/signup', async (details, thunkApi) => {
  let config
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  if (token !== '') {
    config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  } else {
    config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
  let data: SignupDetail | null = null
  try {
    const response = await axios.post(
      `/api/events/signup/${details._id}/`,
      {
        details: JSON.stringify(details.details),
      },
      config
    )
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as SignupDetail
})

const eventGuestSlice = createSlice({
  name: 'eventGuest',
  initialState,
  reducers: {
    resetEventGuestStatus: (state: EventGuestState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(eventSignup.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(eventSignup.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.signupDetail = action.payload
      })
      .addCase(eventSignup.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { resetEventGuestStatus } = eventGuestSlice.actions
export const selectEventGuest = (state: RootState) => state.eventGuest
export const selectEventGuestStatus = (state: RootState) =>
  state.eventGuest.status
export const selectEventGuestError = (state: RootState) =>
  state.eventGuest.error

export default eventGuestSlice.reducer
