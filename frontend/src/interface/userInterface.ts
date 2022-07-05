import { Badge } from './badgeInterface'

export interface UserBrief {
  profile_image: string
  badges: Array<Badge>
}

export interface UserInfo {
  _id: number
  is_admin: string
  username: string
  email: string
  name: string
  token: string
}

export interface Credentials {
  email: string
  password: string
}

export interface SignupDetail {
  name: string
  email: string
  password: string
}
