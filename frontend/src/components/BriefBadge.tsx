import React from 'react'
import { Badge } from '../interface/badgeInterface'
import ProfileBadge from './ProfileBadge'

type Props = {
  badges: Array<Badge>
  type: string
}
function BriefBadge({ badges, type }: Props) {
  if (badges.length > 0) {
    if (type === 'event') {
      const eventBadges = badges.filter(
        (badge) => badge.name === ('Celebrity' || 'PowerHost')
      )
      if (eventBadges.length === 2)
        return <ProfileBadge name="Celebrity" brief={true} />
      else if (eventBadges.length === 1)
        return <ProfileBadge name={eventBadges[0].name} brief={true} />
    } else {
      const itemBadges = badges.filter(
        (badge) => badge.name === ('Clean' || 'PowerUser')
      )
      if (itemBadges.length === 2)
        return <ProfileBadge name="Clean" brief={true} />
      else if (itemBadges.length === 1)
        return <ProfileBadge name={itemBadges[0].name} brief={true} />
    }
  }
  return <></>
}

export default BriefBadge
