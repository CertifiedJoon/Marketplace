import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '../components/CustomInput'

export interface IFormInput {
  [key: string]: any
}

function EventSignupScreen() {
  const inputList = [
    {
      inputType: 'Text',
      label: 'Name',
      checkboxOptions: [],
      radioOptions: [],
      selectOptions: [],
    },
    {
      inputType: 'Toggle',
      label: 'Vegan',
      checkboxOptions: [],
      radioOptions: [],
      selectOptions: [],
    },
    {
      inputType: 'Radio',
      label: 'Gender',
      checkboxOptions: [],
      radioOptions: ['Female', 'male'],
      selectOptions: [],
    },
    {
      inputType: 'Checkbox',
      label: 'Allergies',
      checkboxOptions: ['Nuts', 'Fish', 'Dust', 'Red Meat'],
      radioOptions: [],
      selectOptions: [],
    },
    {
      inputType: 'Select',
      label: 'Dish',
      checkboxOptions: [],
      radioOptions: [],
      selectOptions: ['Beef', 'Chicken', 'Lamb'],
    },
  ]

  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
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
                  HKU Quidditch Practice
                </h1>
                <p className="mb-5 text-secondary">
                  Event Description : Provident cupiditate voluptatem et in.
                  Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                  deleniti eaque aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5 px-2 rounded-2xl min-h-content">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {inputList.map((inputDetail, i) => (
                    <div key={i}>
                      <CustomInput
                        key={i}
                        inputDetail={inputDetail}
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
      <Footer />
    </>
  )
}
export default EventSignupScreen
