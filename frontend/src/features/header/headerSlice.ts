import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface HeaderState {
  saleMode: boolean
  communityKey: string
}

const initialState: HeaderState = {
  saleMode: false,
  communityKey: 'all',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSaleMode: (state: HeaderState, action: PayloadAction<boolean>) => {
      state.saleMode = action.payload
    },
    setCommunityKey: (state: HeaderState, action: PayloadAction<string>) => {
      state.communityKey = action.payload
    },
  },
})

export const { setSaleMode, setCommunityKey } = headerSlice.actions

export const selectSaleMode = (state: RootState) => state.header.saleMode

export const selectCommunityKey = (state: RootState) =>
  state.header.communityKey

export default headerSlice.reducer
