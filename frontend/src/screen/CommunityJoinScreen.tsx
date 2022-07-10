import React, { useEffect, useState } from 'react'
import CommunityCard from '../components/CommunityCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import { CommunityBrief } from '../interface/communityInterface'
import { useAppSelector } from '../app/hook'
import { selectMemberships } from '../features/community/membershipSlice'

function CommunityJoinScreen() {
  const [communities, setCommunities] = useState<Array<CommunityBrief>>([])
  const joined = useAppSelector(selectMemberships).map(
    (membership) => membership.community._id
  )

  useEffect(() => {
    const fetchCommunities = async () => {
      const { data } = await axios.get('/api/community/')
      const filteredData = data.filter(
        (com: CommunityBrief) => !joined.includes(com._id)
      )
      setCommunities(filteredData)
    }
    fetchCommunities()
  }, [setCommunities])

  return (
    <div>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {communities.map((community, i) => (
            <CommunityCard key={i} community={community} />
          ))}
        </div>
      </div>
      <Footer active="mypage" />
    </div>
  )
}

export default CommunityJoinScreen
