import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import googleIcon from '../static/images/google.png'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  password: string
  confirmPassword: string
}

function SignupScreen() {
  /* 
  Frontend Worklist 
    1. Store sign up data to a user state (redux)
    2. Link Wrap [Done]
  */
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <>
      <div className="lg:mx-auto lg:w-1/3 ">
        <div className="max-h-screen grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="row-span-2 text-center my-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-accent input-md rounded-t-xl rounded-b-none w-2/3 focus:outline-none"
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
                  {...register('email', { required: true })}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
                  {...register('password', { required: true })}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
                  {...register('confirmPassword', { required: true })}
                />
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
          <div className="text-center my-auto">
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
          <div className="text-center my-auto text-gray-500 underline">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupScreen
