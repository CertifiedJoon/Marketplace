import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }
  const { data } = await axios.get('/api/items/', config)
  return data
})

export const getItemsByType = createAsyncThunk(
  'itemList/getItemsByType',
  async (type: string) => {
    const { data } = await axios.get(`/api/items/?type=${type}`)
    return data
  }
)

export const getItemsFiltered = createAsyncThunk(
  'itemList/getItemsFiltered',
  async (args: { community: string; type: string }) => {
    const { data } = await axios.get(
      `/api/items/?community=${args.community}&type=${args.type}`
    )
    return data
  }
)

export const getMyItems = createAsyncThunk(
  'itemList/getMyItems',
  async (args: { community: string; type: string }) => {
    const { data } = await axios.get(
      `/api/items/?community=${args.community}&type=${args.type}`
    )
    return data
  }
)

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
      .addCase(getItemsByType.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getItemsByType.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itemList = action.payload
      })
      .addCase(getItemsByType.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getItemsFiltered.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getItemsFiltered.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itemList = action.payload
      })
      .addCase(getItemsFiltered.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectItems = (state: RootState) => state.items.itemList
export const selectItemsStatus = (state: RootState) => state.items.status
export default itemListSlice.reducer
