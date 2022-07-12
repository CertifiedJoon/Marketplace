import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

import { Membership } from '../../interface/communityInterface'

interface MembershipState {
  memberships: Array<Membership>
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: undefined | string
}

const initialState: MembershipState = {
  memberships: [],
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

export const getMemberships = createAsyncThunk<
  Array<Membership>,
  undefined,
  {
    state: RootState
    rejectValue: KnownError
  }
>('community/memberships', async (args, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let data: Array<Membership> | null = null
  try {
    const response = await axios.get('/api/community/memberships/', config)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as Array<Membership>
})

const membershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {
    membershipout: (state: MembershipState) => {
      state.memberships = []
      state.status = 'idle'
      state.error = ''
    },
    resetMembershipStatus: (state: MembershipState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMemberships.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getMemberships.fulfilled, (state, action) => {
        state.memberships = action.payload
        state.status = 'succeeded'
      })
      .addCase(getMemberships.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.messages[0].message
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { membershipout, resetMembershipStatus } = membershipSlice.actions

export const selectMemberships = (state: RootState) =>
  state.membership.memberships

export const selectMembershipStatus = (state: RootState) =>
  state.membership.status

export const selectMembershipError = (state: RootState) =>
  state.membership.error

export default membershipSlice.reducer
