import { Badge } from './badgeInterface'
import { CommunityId } from './communityInterface'

export interface UserProfile {
  user: number
  badges: Array<Badge>
  communities: Array<CommunityId>
  profile_image: string
  events_hosted: number
  people_hosted: number
  items_sold: number
  items_bought: number
  clean_transaction: number
  nickname: string
  introduction: string
}

export const UserProfilePlaceholder = {
  user: 0,
  badges: [],
  communities: [],
  profile_image: '../static/images/profile_placeholder.png',
  events_hosted: 0,
  people_hosted: 0,
  items_sold: 0,
  items_bought: 0,
  clean_transaction: 0,
  nickname: '',
  introduction: '',
}

export interface ProfileUpdate {
  name: string
  email: string
  profile_image: string
  nickname: string
  introduction: string
}
