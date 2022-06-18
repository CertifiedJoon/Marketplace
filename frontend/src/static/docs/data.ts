export interface ColourOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

export interface FlavourOption {
  readonly value: string
  readonly label: string
  readonly rating: string
}

export const flavourOptions: readonly FlavourOption[] = [
  { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
]

export interface UniOption {
  readonly value: string
  readonly label: string
  readonly memCnt: number
}

export const uniOptions: readonly UniOption[] = [
  { value: 'HKU', label: 'The University of Hong Kong', memCnt: 1000 },
  { value: 'CUHK', label: 'The Chinese University of Hong Kong', memCnt: 500 },
  {
    value: 'HKUST',
    label: 'Hong Kong University of Science of Technology',
    memCnt: 200,
  },
  {
    value: 'PolyU',
    label: 'The Hong Kong Polytechnic University',
    memCnt: 200,
  },
  { value: 'CityU', label: 'City University of Hong Kong', memCnt: 200 },
  { value: 'HKBU', label: 'Hong Kong Baptist University', memCnt: 10 },
]

export interface StateOption {
  readonly value: string
  readonly label: string
  readonly memCnt: number
}

export const stateOptions: readonly StateOption[] = [
  { value: 'AL', label: 'Alabama', memCnt: 10 },
  { value: 'AK', label: 'Alaska', memCnt: 10 },
  { value: 'AS', label: 'American Samoa', memCnt: 10 },
  { value: 'AZ', label: 'Arizona', memCnt: 10 },
  { value: 'AR', label: 'Arkansas', memCnt: 10 },
  { value: 'CA', label: 'California', memCnt: 10 },
  { value: 'CO', label: 'Colorado', memCnt: 10 },
  { value: 'CT', label: 'Connecticut', memCnt: 10 },
  { value: 'DE', label: 'Delaware', memCnt: 10 },
  { value: 'DC', label: 'District Of Columbia', memCnt: 10 },
]

export interface GroupedOption {
  readonly label: string
  readonly options: readonly UniOption[] | readonly StateOption[]
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Universities',
    options: uniOptions,
  },
  {
    label: 'State',
    options: stateOptions,
  },
]
