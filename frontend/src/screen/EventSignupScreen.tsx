import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomInput from '../components/CustomInput'
import { getForm, selectEventForm } from '../features/event/eventFormSlice'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Input } from '../interface/eventInterface'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import { selectUserToken } from '../features/user/userSlice'

export interface IFormInput {
  [key: string]: any
}

function EventSignupScreen() {
  const { form, status, error } = useAppSelector(selectEventForm)
  let token = useAppSelector(selectUserToken)
  const dispatch = useAppDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const [inputs, setInputs] = useState<Array<Input>>([])

  useEffect(() => {
    if (params.eventId) dispatch(getForm(params.eventId))
  }, [params, dispatch, getForm])

  useEffect(() => {
    if (status === 'succeeded') {
      setInputs(JSON.parse(form.inputs))
    } else if (status === 'failed') {
      toast.error(error)
    }
  }, [status, error])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    let config
    if (token !== '') {
      config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    } else {
      config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    }
    await axios
      .post(
        `/api/events/signup/${params.eventId}/`,
        {
          details: JSON.stringify(data),
        },
        config
      )
      .then((res) => {
        if (window.confirm('Signed Up! Check your events page?')) navigate('/')
      })
      .catch((err) => toast.error(err))
  }

  return status === 'succeeded' ? (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div>
          <div
            className="hero max-h-96 rounded-2xl"
            style={{
              backgroundImage: `url('https://180dc.org/wp-content/uploads/2015/03/HKU.jpg')`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-secondary font-bold">
                  {form.heading}
                </h1>
                <p className="mb-5 text-secondary">{form.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5 px-2 rounded-2xl min-h-content">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {inputs.map((inputDetail, i) => (
                    <div key={i}>
                      <CustomInput
                        inputDetail={inputDetail}
                        errors={errors}
                        register={register}
                      />
                    </div>
                  ))}
                  <input
                    type="submit"
                    className="btn-block btn-primary rounded-2xl text-lg py-2 my-3 w-full max-w-md"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <Footer active="explore" />
    </>
  ) : (
    <div className="flex min-h-screen w-full justify-center items-center">
      <FaSpinner className="animate-spin text-4xl" />
    </div>
  )
}
export default EventSignupScreen
