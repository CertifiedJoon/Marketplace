import React from 'react'
import { Link } from 'react-router-dom'

interface Community {
  key: string
  name: string
  thumbnail: string
}

type Props = {
  community: Community
}

function CommunityCard({ community }: Props) {
  const handleJoin = () => {
    console.log('Join Community')
  }
  return (
    <>
      <div
        className="hero h-full rounded-2xl"
        style={{
          backgroundImage: `url(
        '${community.thumbnail}'
        )`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content h-80">
          <div className="max-w-md">
            <p className="mb-1 text-5xl font-bold">{community.key}</p>
            <p className="mb-5 text-xl">{community.name}</p>
            <Link to="/community/communityId">
              <button className="btn glass btn-sm text-primary mx-2">
                Explore
              </button>
            </Link>
            <button
              className="btn glass btn-sm text-secondary mx-2"
              onClick={handleJoin}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityCard
