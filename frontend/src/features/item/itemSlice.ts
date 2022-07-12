import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

import { Item, ItemPlaceholder } from '../../interface/itemInterface'

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

interface KnownError {
  error: {
    status_code: number
    message: string
    details: {
      detail: string
    }
  }
}

export const getItemById = createAsyncThunk<
  Item,
  string,
  {
    rejectValue: KnownError
  }
>('item/getItemById', async (id: string, thunkApi) => {
  let data: Item | null = null
  try {
    const response = await axios.get(`/api/items/${id}/`)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as Item
})

const ItemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    resetItemStatus: (state: ItemState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
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
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { resetItemStatus } = ItemSlice.actions
export const selectThumbnail = (state: RootState) =>
  state.item.item.images
    .filter((image) => image.thumbnail)
    .map((item) => item.image)
export const selectImage = (state: RootState) =>
  state.item.item.images.map((item) => item.image)
export const selectItem = (state: RootState) => state.item.item
export const selectItemStatus = (state: RootState) => state.item.status
export const selectItemError = (state: RootState) => state.item.error
export default ItemSlice.reducer
