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
