import { UserBrief } from './userInterface'

export interface CommunityId {
  id: string
}

export interface CommunityBrief {
  _id: string
  key: string
  name: string
  thumbnail_image: string
}

export interface Community {
  _id: string
  members: Array<UserBrief>
  key: string
  name: string
  description: string
  createdAt: string
  thumbnail_image: string
}

export const CommunityPlaceholder: Community = {
  _id: '0',
  members: [],
  key: 'COM',
  name: 'Community Name',
  description: 'Community Description',
  createdAt: '',
  thumbnail_image: '/community/placeholder.jpg',
}

export interface Membership {
  _id: string
  community: CommunityBrief
  date_joined: string
  introduction: string
  user: number
}
