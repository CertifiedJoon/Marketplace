import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { CommunityBrief } from '../../interface/communityInterface'

interface HeaderState {
  saleMode: boolean
  community: CommunityBrief
}

const initialState: HeaderState = {
  saleMode: false,
  community: {
    _id: '0',
    key: 'ALL',
    name: 'Explore All Communities',
    thumbnail_image: '/community/placeholder.jpg',
  },
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSaleMode: (state: HeaderState, action: PayloadAction<boolean>) => {
      state.saleMode = action.payload
    },
    setCommunity: (
      state: HeaderState,
      action: PayloadAction<CommunityBrief>
    ) => {
      state.community = action.payload
    },
  },
})

export const { setSaleMode, setCommunity } = headerSlice.actions

export const selectSaleMode = (state: RootState) => state.header.saleMode

export const selectCommunityKey = (state: RootState) =>
  state.header.community.key

export const selectCommunityId = (state: RootState) =>
  state.header.community._id

export const selectCommunity = (state: RootState) => state.header.community

export default headerSlice.reducer
