export interface CommunityId {
  id: string
}

export interface CommunityBrief {
  _id: string
  key: string
  name: string
  thumbnail_image: string
}

export interface Membership {
  _id: string
  community: CommunityBrief
  date_joined: string
  introduction: string
  user: number
}
