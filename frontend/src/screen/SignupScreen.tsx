import React, { useEffect } from 'react'
import { FaApple } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import googleIcon from '../static/images/google.png'
import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  selectUser,
  selectUserStatus,
  selectUserError,
  signup,
  resetUserStatus,
} from '../features/user/userSlice'
import { toast } from 'react-toastify'

interface IFormInput {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const signupSchema = yup.object({
  name: yup
    .string()
    .required('Name is a required field.')
    .min(10, 'Name must be at least 3 characters long.')
    .max(30, 'Name must be at least 30 characters long.'),
  email: yup
    .string()
    .email('Incorrent email format.')
    .required('Email is a required field.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .max(30, 'Password must be at most 30 characters long.')
    .matches(
      /^[ A-Za-z0-9_@./#&+-]*$/,
      'Password must only include alphanumerics and special letters.'
    )
    .required('Password is a required field.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

function SignupScreen() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const user = useAppSelector(selectUser)
  const userStatus = useAppSelector(selectUserStatus)
  const userError = useAppSelector(selectUserError)
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signupSchema),
  })

  useEffect(() => {
    if (user) {
      navigate(redirect)
    }
  }, [user, redirect, navigate])

  useEffect(() => {
    if (userStatus === 'failed') {
      toast.error(userError)
      dispatch(resetUserStatus())
    } else if (userStatus === 'succeeded') {
      dispatch(resetUserStatus())
      navigate('/')
    }
  }, [userStatus, dispatch, navigate])

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(
      signup({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    )
  }

  return (
    <>
      <div className="lg:mx-auto lg:w-1/2 xl:w-1/3">
        <div className="grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto min-h-content">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="row-span-2 text-center my-auto min-h-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-accent input-md rounded-t-xl rounded-b-none w-2/3 focus:outline-none"
                  {...register('name', { required: true })}
                />
                <p className="text-error text-xs">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
                  {...register('email', { required: true })}
                />
                <p className="text-error text-xs">{errors.email?.message}</p>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
                  {...register('password', { required: true })}
                />
                <p className="text-error text-xs">{errors.password?.message}</p>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
                  {...register('confirmPassword', { required: true })}
                />
                <p className="text-error text-xs">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <div className="text-center mt-1">
                <button
                  type="submit"
                  className="btn w-2/3 btn-block btn-sm btn-accent"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="text-center my-auto min-h-content">
            <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
              <div className="grid grid-cols-5 justify-items-stretch items-center">
                <div className="col-span-1 justify-self-start">
                  <img src={googleIcon} alt="" className="w-6" />
                </div>
                <div className="col-span-4 justify-self-end">
                  <p className="text-sm">Sign Up with Google</p>
                </div>
              </div>
            </button>
            <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
              <div className="grid grid-cols-5 justify-items-stretch items-center text-white">
                <div className="col-span-1 text-xl justify-self-start">
                  <FaApple />
                </div>
                <div className="col-span-4 justify-self-end">
                  <p className="text-sm">Sign Up with Apple ID</p>
                </div>
              </div>
            </button>
          </div>
          <div className="text-center my-auto text-gray-500 underline min-h-content">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupScreen
