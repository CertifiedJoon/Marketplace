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

export const getMemberships = createAsyncThunk<
  Array<Membership>,
  undefined,
  {
    state: RootState
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

  const { data } = await axios.get('/api/community/memberships/', config)
  return data as Array<Membership>
})

const MembershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {},
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
        state.error = action.error.message
      })
  },
})

export const selectMemberships = (state: RootState) =>
  state.membership.memberships

export const selectMembershipStatus = (state: RootState) =>
  state.membership.status

export default MembershipSlice.reducer
