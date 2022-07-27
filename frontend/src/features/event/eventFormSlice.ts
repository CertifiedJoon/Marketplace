import { RootState } from '../../app/store'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  EventForm,
  EventFormPlaceholder,
  NewForm,
} from '../../interface/eventInterface'
import { KnownError } from '../../interface/exceptionInterface'

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

const createForm = createAsyncThunk<
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

const eventFormSlice = createSlice({
  name: 'eventForm',
  initialState,
  reducers: {
    resetEventFormStatus: (state: EventFormState) => {
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: (builder) => {},
})
