import { Badge } from './badgeInterface'
import { CommunityId } from './communityInterface'

export interface UserProfile {
  user: number
  badge: Array<Badge>
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
  user: 1,
  badge: [],
  communities: [],
  profile_image: '',
  events_hosted: 0,
  people_hosted: 0,
  items_sold: 0,
  items_bought: 0,
  clean_transaction: 0,
  nickname: '',
  introduction: '',
}
