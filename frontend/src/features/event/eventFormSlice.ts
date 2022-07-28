import { RootState } from '../../app/store'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  EventForm,
  EventFormPlaceholder,
  NewForm,
} from '../../interface/eventInterface'
import { KnownError } from '../../interface/exceptionInterface'
import { FaAcquisitionsIncorporated } from 'react-icons/fa'
import { sortAndDeduplicateDiagnostics } from 'typescript'
import { Form } from 'react-bootstrap'

interface EventFormState {
  form: EventForm
  status: 'idle' | 'pending' | 'succeeded' | 'failed' | 'updated'
  error: string | undefined
}

const initialState = {
  form: EventFormPlaceholder,
  status: 'idle',
  error: '',
} as EventFormState

export const getForm = createAsyncThunk<
  EventForm,
  string,
  {
    rejectValue: KnownError
  }
>('eventForm/getForm', async (id, thunkApi) => {
  let data: EventForm | null = null
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.post(`/api/events/get-form/${id}/`, config)
    data = response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response)
        return thunkApi.rejectWithValue(error.response.data as KnownError)
    }
  }
  return data as EventForm
})

export const createForm = createAsyncThunk<
  EventForm,
  NewForm,
  {
    state: RootState
    rejectValue: KnownError
  }
>('eventForm/createForm', async (newForm, thunkApi) => {
  const formData = new FormData()
  formData.set('heading', newForm.heading)
  formData.set('description', newForm.description)
  formData.set('thumbnail', newForm.thumbnail[0])
  formData.set('inputs', JSON.stringify(newForm.inputs))
  let data: EventForm | null = null
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.post(
      `/api/events/create-form/${newForm._id}/`,
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
  return data as EventForm
})

export const editForm = createAsyncThunk<
  EventForm,
  NewForm,
  {
    state: RootState
    rejectValue: KnownError
  }
>('eventForm/editForm', async (newForm, thunkApi) => {
  const formData = new FormData()
  formData.set('heading', newForm.heading)
  formData.set('description', newForm.description)
  if (newForm.thumbnail) formData.set('thumbnail', newForm.thumbnail[0])
  formData.set('inputs', JSON.stringify(newForm.inputs))
  let data: EventForm | null = null
  let token = thunkApi.getState().user.user
    ? thunkApi.getState().user.user?.token
    : ''
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const response = await axios.put(
      `/api/events/update-form/${newForm._id}/`,
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
  return data as EventForm
})

const eventFormSlice = createSlice({
  name: 'eventForm',
  initialState,
  reducers: {
    resetEventFormStatus: (state: EventFormState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createForm.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.form = action.payload
      })
      .addCase(createForm.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
      .addCase(getForm.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getForm.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.form = action.payload
      })
      .addCase(getForm.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
      .addCase(editForm.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(editForm.fulfilled, (state, action) => {
        state.status = 'updated'
        state.form = action.payload
      })
      .addCase(editForm.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.error.details.detail
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { resetEventFormStatus } = eventFormSlice.actions
export const selectEventForm = (state: RootState) => state.eventForm
export const selectEventFormStatus = (state: RootState) =>
  state.eventForm.status
export const selectEventFormError = (state: RootState) => state.eventForm.error
export default eventFormSlice.reducer
