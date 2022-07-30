import { RootState } from '../../app/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { KnownError } from '../../interface/exceptionInterface'
import axios from 'axios'
import { Guests, ManagedEvent } from '../../interface/eventInterface'

interface EventManageState {
  guestDetails: Array<Guests>
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState: EventManageState = {
  guestDetails: [],
  status: 'idle',
  error: '',
}

export const getGuestDetails = createAsyncThunk<
  Array<Guests>,
  string,
  {
    state: RootState
    rejectValue: KnownError
  }
>('eventManage/getGuestDetails', async (_id, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let data: Array<Guests> | null = null
  try {
    const response = await axios.get(`/api/events/get-guests/${_id}/`, config)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data as KnownError)
      }
    }
  }
  return data as Array<Guests>
})

const eventManageSlice = createSlice({
  name: 'eventManageSlice',
  initialState,
  reducers: {
    resetEventManageStatus: (state: EventManageState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGuestDetails.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getGuestDetails.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.guestDetails = action.payload
      })
      .addCase(getGuestDetails.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) state.error = action.payload.error.details.detail
        else state.error = action.error.message
      })
  },
})

export const { resetEventManageStatus } = eventManageSlice.actions
export const selectEventManage = (state: RootState) => state.eventManage
export default eventManageSlice.reducer
