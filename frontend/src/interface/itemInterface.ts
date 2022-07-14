import { UserBrief } from './userInterface'
import { UserProfile, UserProfilePlaceholder } from './userProfileInterface'
export interface ItemDetail {
  _id: string
  item: string
  label: string
  value: string
}

export interface ItemImage {
  _id: string
  image: string
  thumbnail: boolean
}

export interface Item {
  _id: string
  user: UserProfile
  type: string
  communities: Array<string>
  heading: string
  sub_heading: string
  reason: string
  price: number
  negotiability: boolean
  description: string
  images: Array<ItemImage>
  details: Array<ItemDetail>
}

export interface ItemUpdate {
  _id: string
  type: string
  communities: Array<string>
  heading: string
  sub_heading: string
  reason: string
  price: number
  negotiability: boolean
  description: string
  details: Array<{ label: string; value: string }>
}

export interface ItemBrief {
  _id: string
  user: UserBrief
  type: string
  communities: Array<string>
  heading: string
  sub_heading: string
  price: number
  images: Array<ItemImage>
}

export interface LiveEvent {
  _id: string
  heading: string
  images: Array<ItemImage>
}

export const LiveEventPlaceholder: LiveEvent = {
  _id: '0',
  heading: 'No Live Event Currently',
  images: [{ _id: '0', image: '/community/placeholder.jpg', thumbnail: true }],
}

export const ItemPlaceholder: Item = {
  _id: '1',
  user: UserProfilePlaceholder,
  type: '',
  communities: [],
  heading: '',
  sub_heading: '',
  reason: '',
  price: 0,
  negotiability: true,
  description: '',
  images: [],
  details: [],
}

export const types: Array<string> = [
  'event',
  'stationery',
  'note',
  'book',
  'tutoring',
  'clothing',
  'shoes',
  'accessary',
  'sports',
  'fitness',
  'quidditch',
  'umbrella',
  'bath-cosmetics',
  'ikia',
  'travel',
  'electronics',
  'ridebutnotcar',
  'pet',
]
