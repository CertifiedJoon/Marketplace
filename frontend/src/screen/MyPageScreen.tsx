import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { persistor } from '../app/store'
import { useAppSelector, useAppDispatch } from '../app/hook'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { selectUser, logout } from '../features/user/userSlice'
import {
  selectUserProfile,
  profileout,
} from '../features/user/userProfileSlice'
import ProfileBadge from '../components/ProfileBadge'
import { membershipout } from '../features/community/membershipSlice'

function MyPageScreen() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)
  const profile = useAppSelector(selectUserProfile)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [navigate, user])

  const handleLogout = () => {
    dispatch(logout())
    dispatch(profileout())
    dispatch(membershipout())
    persistor.purge()
    navigate('/')
  }
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="md:mx-auto md:w-1/3 mx-6">
        <div className="grid grid-rows-6 divide-y divide-gray-300 justify-items-stretch">
          <div className="row-span-1 py-6">
            <div className="grid grid-cols-3 justify-tiems-stretch">
              <div className="col-span-1 flex items-end">
                <div className="avatar">
                  <div className="w-2/3 my-auto rounded-full">
                    <img src={profile.profile_image} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-2 h-full">
                  <div className="self-end">
                    <h3 className="text-xl lg:text-2xl">{user?.name}</h3>
                  </div>
                  <div className="self-end lg:self-center">
                    {profile.badges.map((badge, i) => (
                      <ProfileBadge key={i} name={badge.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-4">
            <div className="grid grid-rows-10 h-2/3 mx-3 divide-y divide-gray-300">
              <div className="pt-3 row-spwn-4">
                <label className="text-sm text-gray-500">Your Record</label>
                <div className="flex stats shadow mt-2">
                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Purchases</div>
                    <div className="stat-value">{profile.items_bought}</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>
                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Sales</div>
                    <div className="stat-value text-secondary">
                      {profile.items_sold}
                    </div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>
                </div>
              </div>
              <div className="row-span-6 my-3">
                <ul className="menu bg-base-100 rounded-box w-full my-3">
                  <li>
                    <Link to="/profile">
                      <div>Profile</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/messages">
                      <div>Messages</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist/userId">
                      <div>Wishlist</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/purchase-history">
                      <div>Purchase History</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sale-history">
                      <div>Sale History</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-events">
                      <div>My Events</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/community/my-communities">
                      <div>Communities</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-method">
                      <div>Payment Method</div>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                  {/* <li>
                    <Link to="/settings">
                      <div>Settings</div>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer active="mypage" />
    </>
  )
}

export default MyPageScreen
