import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ItemBrief } from '../../interface/itemInterface'
import axios from 'axios'

interface itemListState {
  itemList: Array<ItemBrief>
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState = {
  itemList: [],
  status: 'idle',
  error: '',
} as itemListState

export const getItems = createAsyncThunk('itemList/getItems', async () => {
  const { data } = await axios.get('/api/items/')
  console.log(data)
  return data
})

const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itemList = action.payload
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectItems = (state: RootState) => state.items.itemList
export const selectItemsStatus = (state: RootState) => state.items.status
export default itemListSlice.reducer
