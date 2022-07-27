import { string } from 'yup'

export interface EventForm {
  heading: string
  description: string
  thumbnail: string
  inputs: string
}

export interface Input {
  inputType: string
  label: string
  info: string
  lengthRange: Array<number>
  range: Array<number>
  pattern: string
  checkboxOptions: Array<string>
  radioOptions: Array<string>
  selectOptions: Array<string>
}

export interface NewForm {
  _id: string
  heading: string
  description: string
  inputs: Array<Input>
  thumbnail: FileList
}

export const EventFormPlaceholder: EventForm = {
  heading: 'Event Heading',
  description: 'Event Description',
  thumbnail: '/default.png',
  inputs: '',
}
