import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ItemBrief } from '../../interface/itemInterface'
import axios from 'axios'
import { string } from 'yup'

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

export const getItemsFiltered = createAsyncThunk(
  'itemList/getItemsFiltered',
  async (args: { community: string; type: string }) => {
    const { data } = await axios.get(
      `/api/items/?community=${args.community}&type=${args.type}`
    )
    return data
  }
)

export const getMyItems = createAsyncThunk<
  Array<ItemBrief>,
  { community: string; type: string },
  {
    state: RootState
  }
>(
  'itemList/getMyItems',
  async (args: { community: string; type: string }, thunkApi) => {
    let token = thunkApi.getState().user.user?.token
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.get(
      `/api/items/my-items/?community=${args.community}&type=${args.type}`,
      config
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
      .addCase(getMyItems.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getMyItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itemList = action.payload
      })
      .addCase(getMyItems.rejected, (state, action) => {
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
