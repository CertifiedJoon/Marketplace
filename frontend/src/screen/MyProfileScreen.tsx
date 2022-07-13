import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft, FaMedal, FaPencilAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  resetUserProfileStatus,
  selectUserProfile,
  selectUserProfileError,
  selectUserProfileStatus,
  updateUserProfile,
  uploadProfileImage,
} from '../features/user/userProfileSlice'
import { selectUser } from '../features/user/userSlice'
import ProfileBadge from '../components/ProfileBadge'
import { ProfileUpdate } from '../interface/userProfileInterface'
import { toast } from 'react-toastify'

const imageSchema = yup.object().shape({
  image: yup
    .mixed()
    .required('You must provide a profile picture.')
    .test('fileSize', 'The file must be smaller than 1MB', (value) => {
      return value && value.size <= 1000000
    })
    .test('type', 'File must be either .jpeg or .png', (value) => {
      return value && value.type === ('image/jpeg' || 'image/png')
    }),
})

export const profileUpdateSchema = yup
  .object({
    name: yup
      .string()
      .required('Name is a required field.')
      .min(3, 'Name must be at least 3 characters long.')
      .max(30, 'Name must be at most 30 characters long.'),
    email: yup
      .string()
      .email('Incorrent email format.')
      .required('Email is a required field.'),
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
  const profileStatus = useAppSelector(selectUserProfileStatus)
  const profileError = useAppSelector(selectUserProfileError)
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileUpdate>({
    resolver: yupResolver(profileUpdateSchema),
  })

  const onSubmit = (data: ProfileUpdate) => {
    dispatch(updateUserProfile(data))
    setEditStatus(false)
  }

  useEffect(() => {
    if (!user) {
      navigate(redirect)
    } else {
      reset({
        name: user.name,
        email: user.email,
        nickname: profile.nickname,
        introduction: profile.introduction,
      })
    }
  }, [user, redirect, navigate, reset])

  useEffect(() => {
    if (profileStatus === 'failed') {
      toast.error(profileError)
      dispatch(resetUserProfileStatus)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileStatus, dispatch])

  const handleClick = () => {
    if (editStatus === false) {
      setEditStatus(true)
    }
  }

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        await imageSchema.validate({ image: event.target.files[0] })
      } catch (err) {
        if (err instanceof yup.ValidationError) toast.error(err.message)
        return
      }
      dispatch(uploadProfileImage(event.target.files[0]))
    }
  }

  return (
    <>
      {/* Tablet or bigger */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden md:block">
          <Header />
        </div>
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

        <div className="xl:container xl:mx-auto mx-3">
          <div className="grid grid-cols-3 min-h-content lg:my-5">
            <div className="hidden md:block md:col-span-1 md:mr-6 md:border-r md:border-gray-300">
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
            <div className="col-span-3 min-h-screen md:col-span-2 md:mx-10">
              <div className="grid grid-cols-3 justify-tiems-stretch mx-auto pb-5 border-b border-gray-300">
                <div className="col-span-1 flex items-end">
                  <div className="avatar">
                    <div className="w-24 mask mask-circle">
                      <img
                        src={profile.profile_image}
                        alt=""
                        className="object-fill mask mask-circle"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-rows-2 h-full">
                    <div className="flex items-end">
                      <input
                        type="text"
                        placeholder="Name"
                        defaultValue={user?.name}
                        className="p-0 w-full rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-2xl w-full disabled:text-black disabled:input-ghost disabled:border-none"
                        disabled={!editStatus}
                        {...register('name')}
                      />
                      <p className="text-error text-xs">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="row-span-1">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          defaultValue={user?.email}
                          className="p-0 w-full rounded-none input input-ghost text-accent input-sm mb-2 placeholder-accent item-input-lg w-full disabled:text-black disabled:input-ghost disabled:border-none"
                          disabled={!editStatus}
                          {...register('email')}
                        />
                        <p className="text-error text-xs">
                          {errors.email?.message}
                        </p>
                      </div>
                      <div>
                        <Link to="/edit-password">
                          <h3 className="btn btn-ghost btn-xs rounded-sm px-0">
                            Edit Password
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {editStatus && (
                  <input
                    type="file"
                    className="my-1 col-span-3 text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white-50 file:text-accent"
                    onChange={handleUpload}
                  />
                )}
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
                      {...register('nickname')}
                    />
                    <p className="text-error text-xs">
                      {errors.nickname?.message}
                    </p>
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
                  {...register('introduction')}
                ></textarea>
                <p className="text-error text-xs">
                  {errors.introduction?.message}
                </p>
              </div>
              <div className="py-5">
                <div>
                  <label className="text-md text-gray-500">Badge Earned</label>
                  <div className="flex flex-wrap mt-2">
                    {profile.badges.map((badge, i) => (
                      <ProfileBadge key={i} name={badge.name} />
                    ))}
                  </div>
                  <label className="text-md text-gray-500">
                    Badge Progress
                  </label>
                  <div className="flex flex-wrap">
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
                    </div>
                    <div className="ml-3">
                      <progress
                        className="progress progress-secondary h-4 w-56"
                        value="70"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
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
                    </div>
                    <div>
                      <progress
                        className="progress progress-accent h-4 w-56 ml-3"
                        value="20"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
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
                    </div>
                    <div>
                      <progress
                        className="progress progress-primary h-4 w-56 ml-3"
                        value="100"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
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
                      <p className="inline ml-3">
                        102 / 102 Clean Transactions
                      </p>
                    </div>
                    <div>
                      <progress
                        className="progress progress-info h-4 w-56 ml-3"
                        value="100"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer active="mypage" />
    </>
  )
}

export default ProfileScreen
