import React from 'react'
import { useAppSelector } from '../app/hook'
import CommunityCard from '../components/CommunityCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { selectMemberships } from '../features/community/membershipSlice'

function MyCommunityScreen() {
  const memberships = useAppSelector(selectMemberships)
  return (
    <div>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {memberships.map((membership, i) => (
            <CommunityCard
              key={i}
              community={membership.community}
              join={false}
            />
          ))}
        </div>
      </div>
      <Footer active="mypage" />
    </div>
  )
}

export default MyCommunityScreen
