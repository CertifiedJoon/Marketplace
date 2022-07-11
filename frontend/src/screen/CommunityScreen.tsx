import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Footer from '../components/Footer'
import Header from '../components/Header'
import EventSwiper from '../components/EventSwiper'
import {
  Community,
  CommunityPlaceholder,
} from '../interface/communityInterface'
import ProfileBadge from '../components/ProfileBadge'
import { LiveEvent, LiveEventPlaceholder } from '../interface/itemInterface'

function CommunityScreen() {
  //eslint-disable-next-line
  const params = useParams()
  const [community, setCommunity] = useState<Community>(CommunityPlaceholder)
  const [liveEvents, setLiveEvents] = useState<Array<LiveEvent>>([
    LiveEventPlaceholder,
  ])

  useEffect(() => {
    const fetchCommunity = async () => {
      const { data } = await axios.get(`/api/community/${params.communityId}/`)
      setCommunity(data)
    }
    const fetchLiveEvents = async () => {
      const { data } = await axios.get(
        `/api/items/live-events/${params.communityId}/`
      )
      if (data) setLiveEvents(data)
    }
    fetchLiveEvents()
    fetchCommunity()
  }, [params])

  const followEvent = () => {
    console.log('Event followed')
  }

  const followItem = () => {
    console.log('Item followed')
  }

  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div
          className="hero min-h-full rounded"
          style={{
            backgroundImage: `url(
              ${community.thumbnail_image}
              )`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{community.name}</h1>
              <p className="mb-5">{community.description}</p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-bold inline-block">Events</h1>
          <div className="badge badge-outline badge-lga ml-3">
            {liveEvents.length} Currently Hosting
          </div>
          <div>
            <EventSwiper events={liveEvents} />
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-bold inline-block">Members</h1>
          <div className="badge badge-outline badge-lga ml-3">
            {community.members.length} Total
          </div>
          <div className="block">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Name</th>
                    <th>Badge</th>
                    <th>Followers</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {community.members.map((member, i) => (
                    <tr key={i}>
                      <th>
                        <p className="text-primary">402</p>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={member.profile_image} alt="profile" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              Computer Engineering
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-wrap justify-start">
                          {member.badges.map((badge, i) => (
                            <ProfileBadge key={i} name={badge.name} />
                          ))}
                        </div>
                      </td>
                      <td>200</td>
                      <th>
                        <button
                          className="block btn btn-ghost btn-xs m-1"
                          onClick={followItem}
                        >
                          Follow for Items
                        </button>
                        <button
                          className="block btn btn-ghost btn-xs m-1"
                          onClick={followEvent}
                        >
                          Follow for Events
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer active="mypage" />
    </>
  )
}

export default CommunityScreen
