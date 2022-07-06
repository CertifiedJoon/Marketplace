import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  FaArrowLeft,
  FaHandSparkles,
  FaInfoCircle,
  FaMedal,
  FaPencilAlt,
} from 'react-icons/fa'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  selectUserProfile,
  updateUserProfile,
} from '../features/user/userProfileSlice'
import { selectUser } from '../features/user/userSlice'
import ProfileBadge from '../components/ProfileBadge'
import { ProfileUpdate } from '../interface/userProfileInterface'

export const profileUpdateSchema = yup
  .object({
    name: yup
      .string()
      .required('Name is a required field.')
      .min(10, 'Nmae must be at least 3 characters long.')
      .max(30, 'Name must be at least 30 characters long.'),
    email: yup
      .string()
      .email('Incorrent email format.')
      .required('Email is a required field.'),
    profile_image: yup.string().ensure(),
    nickname: yup
      .string()
      .min(2, 'Nickname must be at least two characters.')
      .max(10, 'Nickname can be at most 10 characters.')
      .required('nickname is required'),
    introduction: yup
      .string()
      .min(50, 'Introduction must be at least 50 characters.')
      .max(300, 'Introduction can be at most 300 characters.')
      .required('Introduction helps your community better recognize you.'),
  })
  .required()

function ProfileScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [editStatus, setEditStatus] = useState(false)
  const user = useAppSelector(selectUser)
  const profile = useAppSelector(selectUserProfile)
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdate>({
    resolver: yupResolver(profileUpdateSchema),
  })

  const {
    register: registerLaptop,
    handleSubmit: handleSubmit2,
    formState: { errors: error2 },
  } = useForm<ProfileUpdate>({
    resolver: yupResolver(profileUpdateSchema),
  })

  const onSubmit = (data: ProfileUpdate) => {
    dispatch(updateUserProfile(data))
    setEditStatus(false)
  }

  const onSubmitLaptop = (data: ProfileUpdate) => {
    dispatch(updateUserProfile(data))
    setEditStatus(false)
  }

  useEffect(() => {
    if (!user) {
      navigate(redirect)
    }
  }, [user, redirect, navigate])

  const handleClick = () => {
    if (editStatus === false) {
      setEditStatus(true)
    }
  }

  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:hidden sticky top-0 bg-white z-50 relative">
          <div className="absolute left-6 top-3">
            <button onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute right-6 py-2">
            {editStatus ? (
              <input
                type="submit"
                className="text-sm font-bold"
                value="SAVE"
              ></input>
            ) : (
              <button
                className="btn btn-ghost rounded-sm btn-xs"
                onClick={handleClick}
              >
                {' '}
                EDIT
              </button>
            )}
          </div>
          <h3 className="font-bold border-b text-center py-2 mx-20">Profile</h3>
        </div>
        <div className="md:hidden mx-3">
          <div className="grid grid-cols-3 justify-tiems-stretch mx-auto py-5 border-b border-gray-300">
            <div className="col-span-1 justify-self-end">
              <div className="avatar px-2">
                <div className="w-full max-w-40 rounded-full">
                  <img src={profile.profile_image} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-cols items-center">
              <div className="grid grid-rows ml-3">
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.name}
                  className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-xl w-full disabled:text-black disabled:input-ghost disabled:border-none"
                  disabled={!editStatus}
                  {...register('name')}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  defaultValue={user?.email}
                  className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                  disabled={!editStatus}
                  {...register('email')}
                />
                <Link to="/edit-password">
                  <h3 className="btn btn-ghost btn-outline btn-xs rounded-sm w-2/3 ">
                    Edit Password
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 py-5">
            <label className="text-lg text-gray-500">One word nickname:</label>
            <input
              type="text"
              placeholder="Nickname"
              defaultValue={profile.nickname}
              className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent text-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
              disabled={!editStatus}
              {...register('nickname')}
            />
            <label className="text-lg text-gray-500">
              Introduce yourself to your community:
            </label>
            <textarea
              className="p-0 rounded-none textarea textarea-ghost text-accent placeholder-accent w-full text-lg h-60 rounded-sm disabled:text-black disabled:textarea-ghost disabled:border-none"
              defaultValue={profile.introduction}
              disabled={!editStatus}
              {...register('introduction')}
            ></textarea>
          </div>
          <div className="py-5">
            <div>
              <label className="text-md text-gray-500">Badge Earned</label>
              <div className="flex mt-2">
                {profile.badges.map((badge, i) => (
                  <ProfileBadge key={i} name={badge.name} />
                ))}
              </div>
              <label className="text-md text-gray-500">Badge Progress</label>
              <div>
                <div
                  className="tooltip tooltip-secondary"
                  data-tip="Sold and Bought 10 items"
                >
                  <div className="badge badge-secondary badge-outline">
                    <FaMedal />
                    &nbsp;PowerHost
                  </div>
                </div>
                <p className="inline ml-3">7 / 10 Events Hosted</p>
                <progress
                  className="progress progress-secondary h-4 w-full"
                  value="70"
                  max="100"
                ></progress>
              </div>
              <div>
                <div
                  className="tooltip tooltip-accent"
                  data-tip="Sold and Bought 10 items"
                >
                  <div className="badge badge-accent badge-outline">
                    <FaMedal />
                    &nbsp;Celebrity
                  </div>
                </div>
                <p className="inline ml-3">20 / 100 Peaple Hosted</p>
                <progress
                  className="progress progress-accent h-4 w-full"
                  value="20"
                  max="100"
                ></progress>
              </div>
              <div>
                <div
                  className="tooltip tooltip-primary"
                  data-tip="Sold and Bought 10 items"
                >
                  <div className="badge badge-primary badge-outline">
                    <FaMedal />
                    &nbsp;PowerUser
                  </div>
                </div>
                <p className="inline ml-3">10 / 10 Items Sold</p>
                <progress
                  className="progress progress-primary h-4 w-full"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <div>
                <div
                  className="tooltip tooltip-info"
                  data-tip="Sold and Bought 10 items"
                >
                  <div className="badge badge-info badge-outline">
                    <FaMedal />
                    &nbsp;Clean
                  </div>
                </div>
                <p className="inline ml-3">102 / 102 Clean Transactions</p>
                <progress
                  className="progress progress-info h-4 w-full"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 md:mx-3 hidden md:block">
        <form onSubmit={handleSubmit2(onSubmitLaptop)}>
          <div className="grid grid-cols-3 min-h-content my-5">
            <div className="col-span-1 mr-6 border-r border-gray-300">
              <div className="sticky top-1/2 z-50">
                <div className="flex flex-col justify-center">
                  <div>
                    <div className="text-center mt-5">
                      <h1 className="font-bold">Your Profile</h1>
                    </div>
                    <div className="text-center">
                      {editStatus ? (
                        <input
                          type="submit"
                          className="text-sm font-bold"
                          value="SAVE"
                        ></input>
                      ) : (
                        <button
                          className="btn btn-ghost rounded-sm btn-xs"
                          onClick={handleClick}
                        >
                          <FaPencilAlt
                            style={{
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                            }}
                          />
                          &nbsp; EDIT
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 min-h-screen mx-10">
              <div className="grid grid-cols-3 justify-tiems-stretch mx-auto pb-5 border-b border-gray-300">
                <div className="col-span-1 justify-self-end">
                  <div className="avatar">
                    <div className="w-2/3 rounded-full">
                      <img src={profile.profile_image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-rows-2 h-full">
                    <div className="self-end">
                      <input
                        type="text"
                        placeholder="Name"
                        defaultValue={user?.name}
                        className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-2xl w-full disabled:text-black disabled:input-ghost disabled:border-none"
                        disabled={!editStatus}
                        {...registerLaptop('name')}
                      />
                    </div>
                    <div className="grid grid-cols-2">
                      <input
                        type="text"
                        placeholder="Name"
                        defaultValue={user?.email}
                        className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                        disabled={!editStatus}
                        {...registerLaptop('email')}
                      />
                      <div className="justify-self-end">
                        <Link to="/edit-password">
                          <h3 className="btn btn-ghost btn-xs rounded-sm justify-self-end w-2/3">
                            Edit Password
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 py-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-2">
                    <label className="text-lg text-gray-500">
                      One word nickname:
                    </label>
                    <input
                      type="text"
                      placeholder="One word nickname"
                      defaultValue={profile.nickname}
                      className="p-0 rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent text-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                      disabled={!editStatus}
                      {...registerLaptop('nickname')}
                    />
                  </div>
                  <div className="col-span-3"></div>
                </div>

                <label className="text-lg text-gray-500">
                  Introduce yourself to your community:
                  {/* <div
                  className="tooltip tooltip-info z-30 inline-block ml-5 mt-1"
                  data-tip="Your Introduction must be different for each community"
                >
                  <FaInfoCircle className="text-lg text-info" />
                </div> */}
                </label>
                <textarea
                  className="p-0 textarea textarea-ghost text-accent placeholder-accent w-full text-lg h-60 min-h-content rounded-sm disabled:text-black disabled:textarea-ghost disabled:border-none"
                  defaultValue={profile.introduction}
                  placeholder="Describe your listing."
                  disabled={!editStatus}
                  {...registerLaptop('introduction')}
                ></textarea>
              </div>
              <div className="py-5">
                <div>
                  <label className="text-md text-gray-500">Badge Earned</label>
                  <div className="flex mt-2">
                    {profile.badges.map((badge, i) => (
                      <ProfileBadge key={i} name={badge.name} />
                    ))}
                  </div>
                  <label className="text-md text-gray-500">
                    Badge Progress
                  </label>
                  <div>
                    <progress
                      className="progress progress-secondary h-4 w-56"
                      value="70"
                      max="100"
                    ></progress>
                    <p className="inline ml-3">7 / 10 Events Hosted</p>
                    <div
                      className="tooltip tooltip-secondary"
                      data-tip="Sold and Bought 10 items"
                    >
                      <div className="badge badge-secondary badge-outline ml-3">
                        <FaMedal />
                        &nbsp;PowerHost
                      </div>
                    </div>
                  </div>
                  <div>
                    <progress
                      className="progress progress-accent h-4 w-56"
                      value="20"
                      max="100"
                    ></progress>
                    <p className="inline ml-3">20 / 100 Peaple Hosted</p>
                    <div
                      className="tooltip tooltip-accent"
                      data-tip="Sold and Bought 10 items"
                    >
                      <div className="badge badge-accent badge-outline ml-3">
                        <FaMedal />
                        &nbsp;Celebrity
                      </div>
                    </div>
                  </div>
                  <div>
                    <progress
                      className="progress progress-primary h-4 w-56"
                      value="100"
                      max="100"
                    ></progress>
                    <p className="inline ml-3">10 / 10 Items Sold</p>
                    <div
                      className="tooltip tooltip-primary"
                      data-tip="Sold and Bought 10 items"
                    >
                      <div className="badge badge-primary badge-outline ml-3">
                        <FaMedal />
                        &nbsp;PowerUser
                      </div>
                    </div>
                  </div>
                  <div>
                    <progress
                      className="progress progress-info h-4 w-56"
                      value="100"
                      max="100"
                    ></progress>
                    <p className="inline ml-3">102 / 102 Clean Transactions</p>
                    <div
                      className="tooltip tooltip-info"
                      data-tip="Sold and Bought 10 items"
                    >
                      <div className="badge badge-info badge-outline ml-3">
                        <FaMedal />
                        &nbsp;Clean
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer active="mypage" />
    </>
  )
}

export default ProfileScreen
