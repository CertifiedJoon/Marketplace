import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

import { Item, ItemPlaceholder } from '../../interface/itemInterface'

export const getItemById = createAsyncThunk(
  'item/getItemById',
  async (id: string) => {
    const { data } = await axios.get(`/api/items/${id}/`)
    return data
  }
)

interface ItemState {
  item: Item
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState = {
  item: ItemPlaceholder,
  status: 'idle',
  error: '',
} as ItemState

const ItemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemById.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getItemById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(getItemById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectThumbnail = (state: RootState) =>
  state.item.item.images
    .filter((image) => image.thumbnail)
    .map((item) => item.image)

export const selectImage = (state: RootState) =>
  state.item.item.images.map((item) => item.image)

export const selectItem = (state: RootState) => state.item.item
export const selectItemStatus = (state: RootState) => state.item.status
export default ItemSlice.reducer
