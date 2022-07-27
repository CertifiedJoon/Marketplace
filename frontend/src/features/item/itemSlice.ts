import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

import {
  Item,
  ItemImage,
  ItemPlaceholder,
  ItemUpdate,
  NewItem,
} from '../../interface/itemInterface'

interface ItemState {
  item: Item
  status: 'idle' | 'pending' | 'succeeded' | 'failed' | 'updated' | 'deleted'
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

export const uploadImages = createAsyncThunk<
  Array<ItemImage>,
  { images: FileList; item_id: string },
  {
    state: RootState
    rejectValue: KnownError
  }
>('item/uploadImages', async (update, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }
  const formData = new FormData()
  for (let i = 0; i < update.images.length; i++) {
    formData.append('images', update.images[i])
  }
  let data: Array<ItemImage> | null = null
  try {
    const response = await axios.put(
      `/api/items/upload-images/${update.item_id}/`,
      formData,
      config
    )
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as Array<ItemImage>
})

export const updateItem = createAsyncThunk<
  Item,
  ItemUpdate,
  {
    state: RootState
    rejectValue: KnownError
  }
>('item/updateItem', async (update, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  let data: Item | null = null
  try {
    const response = await axios.put(
      `/api/items/update/${update._id}/`,
      update,
      config
    )
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as Item
})

export const uploadItem = createAsyncThunk<
  Item,
  NewItem,
  {
    state: RootState
    rejectValue: KnownError
  }
>('item/createItem', async (item, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }
  const formData = new FormData()
  formData.set('json', JSON.stringify(item))
  for (let i = 0; i < item.images.length; i++) {
    formData.append('images', item.images[i])
  }
  let data: Item | null = null
  try {
    const response = await axios.post('/api/items/create/', formData, config)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data as KnownError)
      }
    }
  }
  return data as Item
})

export const deleteItem = createAsyncThunk<
  undefined,
  string,
  {
    state: RootState
  }
>('item/deleteItem', async (id, thunkApi) => {
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    await axios.delete(`/api/items/delete/${id}/`, config)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data as KnownError)
      }
    }
  }
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
      .addCase(uploadImages.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.item.images = action.payload
        state.status = 'idle'
      })
      .addCase(uploadImages.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
      .addCase(updateItem.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = 'updated'
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
      .addCase(uploadItem.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(uploadItem.fulfilled, (state, action) => {
        state.item = action.payload
        state.status = 'succeeded'
      })
      .addCase(uploadItem.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
      .addCase(deleteItem.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.item = ItemPlaceholder
        state.status = 'deleted'
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = 'Deletion failed.'
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
