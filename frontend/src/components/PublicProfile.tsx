import React from 'react'
import { FaHandSparkles, FaMedal } from 'react-icons/fa'
import { UserProfile } from '../interface/userProfileInterface'
import ProfileBadge from './ProfileBadge'

type Props = {
  profile: UserProfile
  type: string
}

function PublicProfile({ profile, type }: Props) {
  const followEvent = () => {
    console.log('Event followed')
  }

  const followItem = () => {
    console.log('Item followed')
  }

  return (
    <div className="w-full">
      <div className="flex stats shadow  mt-2">
        {type === 'event' ? (
          <div className="stat place-items-center">
            <div className="stat-title">Events Hosted</div>
            <div className="stat-value">{profile.events_hosted}</div>
            <div className="stat-desc">Past year</div>
          </div>
        ) : (
          <div className="stat place-items-center">
            <div className="stat-title">Clean Purchase</div>
            <div className="stat-value">{profile.items_bought}</div>
            <div className="stat-desc">100% of Transactions</div>
          </div>
        )}
        {type === 'event' ? (
          <div className="stat place-items-center">
            <div className="stat-title">People Hosted</div>
            <div className="stat-value text-secondary">
              {profile.people_hosted}
            </div>
            <div className="stat-desc">86 rating</div>
          </div>
        ) : (
          <div className="stat place-items-center">
            <div className="stat-title">Clean Sale</div>
            <div className="stat-value text-secondary">
              {profile.items_sold}
            </div>
            <div className="stat-desc">100% of Transactions</div>
          </div>
        )}
      </div>
      <div className="my-3 rounded rounded-2xl bg-base-100 shadow min-h-content">
        <div className="w-full h-full rounded-2xl p-3 bg-base-200">
          <p className="mb-1 text-sm text-black font-bold">
            {profile.nickname}
          </p>
          <p className="mb-1 text-sm text-black">{profile.introduction}</p>
          <p className="mb-1 text-xs text-gray-500">Joined: DD/MM/YYYY</p>
          <div className="flex justify-center mt-4">
            {profile.badges.map((badge, i) => (
              <ProfileBadge key={i} name={badge.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 flex rounded rounded-2xl shadow min-h-content">
        <button className="grow btn btn-ghost btn-xs m-1" onClick={followItem}>
          Follow for Items
        </button>
        <button className="grow btn btn-ghost btn-xs m-1" onClick={followEvent}>
          Follow for Events
        </button>
      </div>
    </div>
  )
}

export default PublicProfile
