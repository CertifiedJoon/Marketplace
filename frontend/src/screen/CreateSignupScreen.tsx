import React, { useState } from 'react'
import {
  FaInfoCircle,
  FaPlusCircle,
  FaSave,
  FaTimesCircle,
  FaUpload,
} from 'react-icons/fa'
import { useForm, SubmitHandler } from 'react-hook-form'

import CustomInput from '../components/CustomInput'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface IFormInput {
  [key: string]: any
}
interface Input {
  inputType: string
  label: string
  checkboxOptions: Array<string>
  radioOptions: Array<string>
  selectOptions: Array<string>
}

function CreateSignupScreen() {
  const [createMode, setCreateMode] = useState(false)
  const [inputType, setInputType] = useState('Text')
  const [quantity, setQuantity] = useState(0)
  const [label, setLabel] = useState('')
  const [inputList, setInputList] = useState<Array<Input>>([])
  const [checkboxOptions, setCheckboxOptions] = useState<Array<string>>([])
  const [radioOptions, setRadioOptions] = useState<Array<string>>(['', ''])
  const [selectOptions, setSelectOptions] = useState<Array<string>>([])

  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const handleCheck = (checked: boolean) => {
    if (checked === false) {
      const newInput = {
        inputType,
        label,
        checkboxOptions,
        radioOptions,
        selectOptions,
      }
      setInputList(inputList.concat([newInput]))
      setCreateMode(false)
      setInputType('Text')
      setQuantity(0)
      setLabel('')
      setCheckboxOptions([])
      setRadioOptions(['', ''])
      setSelectOptions([])
    } else if (checked === true) {
      setCreateMode(true)
    }
  }

  const handleCheckboxOptionChange = (value: string, index: number) => {
    const newOptionList = checkboxOptions.map((e, i) => {
      if (i === index) return value
      else return e
    })
    setCheckboxOptions(newOptionList)
    console.log(newOptionList)
  }

  const handleRadioOptionChange = (value: string, index: number) => {
    const newOptionList = radioOptions.map((e, i) => {
      if (i === index) return value
      else return e
    })
    setRadioOptions(newOptionList)
  }

  const handleSelectOptionChange = (value: string, index: number) => {
    const newOptionList = selectOptions.map((e, i) => {
      if (i === index) return value
      else return e
    })
    setSelectOptions(newOptionList)
  }

  const handleRemove = (index: number) => {
    setInputList((currentImg) => currentImg.filter((img, i) => i !== index))
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
          <div className="min-h-screen">
            <div className="relative hidden md:block">
              <h1 className="font-bold text-center">
                Create Event Sign-up Form
              </h1>
              <button
                type="submit"
                className="btn-ghost rounded absolute top-2 right-0"
              >
                <div className="flex h-8 items-center px-2">
                  <FaUpload />
                  <span className="font-bold">&nbsp; Create</span>
                </div>
              </button>
            </div>
            <div className="alert alert-info shadow-lg">
              <div>
                <FaInfoCircle />
                <span>
                  &nbsp; Create your form by filling out the details instead of
                  yellow texts and adding form inputs.
                </span>
              </div>
            </div>
            <div
              className="hero max-h-96 my-5 relative"
              style={{
                backgroundImage: `url('https://180dc.org/wp-content/uploads/2015/03/HKU.jpg')`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <textarea
                    className="textarea textarea-ghost text-center text-secondary placeholder-accent text-5xl font-bold w-full"
                    placeholder="Event Heading"
                    {...register('eventHeading', { required: true })}
                  ></textarea>
                  <textarea
                    className="textarea textarea-ghost text-center placeholder-accent item-input-base w-full h-40"
                    placeholder="Describe your Event"
                    {...register('eventDescription', { required: true })}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <label className="text-gray-500 pl-2">
                Choose Background photo
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                {...register('backgroundImage', { required: true })}
              />
            </div>
            <div className="my-5">
              <div className="my-5 rounded-2xl bg-green-100 min-h-content">
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    {inputList.map((input, i) => (
                      <div key={i}>
                        <div className="grid grid-cols-10">
                          <div className="col-span-9">
                            <CustomInput
                              inputDetail={input}
                              register={register}
                            />
                          </div>
                          <div className="col-span-1 text-secondary flex items-center">
                            <button
                              className="btn btn-circle btn-xs btn-secondary"
                              onClick={() => handleRemove(i)}
                            >
                              <FaTimesCircle />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="collapse my-5">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(e.target.checked)}
                />
                <div className="flex justify-start sm:justify-center collapse-title btn btn-outline border-gray-300 p-2 rounded-b-none text-lg">
                  {createMode ? (
                    <>
                      <FaSave />
                      &nbsp; Save Input
                    </>
                  ) : (
                    <>
                      <FaPlusCircle /> &nbsp; Add Input
                    </>
                  )}
                </div>
                <div className="collapse-content min-h-content border border-gray-300 border-t-0 rounded-b-2xl bg-primary-300">
                  <div className="absolute top-2 right-2">
                    <select
                      className="select w-full min-w-xs"
                      value={inputType}
                      onChange={(e) => setInputType(e.target.value)}
                    >
                      <option>Text</option>
                      <option>Email</option>
                      <option>PassCode</option>
                      <option>TextArea</option>
                      <option>Checkbox</option>
                      <option>Toggle</option>
                      <option>Radio</option>
                      <option>Select</option>
                    </select>
                  </div>
                  <div className="flex justify-center my-5">
                    <input
                      type="text"
                      placeholder={`Enter ${inputType} Title`}
                      className="input w-full max-w-xs"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                    />
                  </div>
                  {inputType === 'Checkbox' && (
                    <div>
                      <div className="flex justify-center">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => {
                            setQuantity(Number(e.target.value))
                            const extendby =
                              Number(e.target.value) - checkboxOptions.length
                            setCheckboxOptions(
                              checkboxOptions.concat(
                                Array.from({ length: extendby }, () => '')
                              )
                            )
                          }}
                          name="quantity"
                          min="0"
                          max="20"
                          step="1"
                        />
                      </div>
                      <div className="flex justify-center">
                        <ul className="w-full max-w-xs">
                          {[...Array(quantity)].map((e, i) => {
                            return (
                              <li key={i}>
                                <input
                                  type="text"
                                  placeholder={`Enter Checkbox Title ${i + 1}`}
                                  className="input w-full input-md my-1"
                                  value={checkboxOptions[i]}
                                  onChange={(e) =>
                                    handleCheckboxOptionChange(
                                      e.target.value,
                                      i
                                    )
                                  }
                                />
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                  {inputType === 'Radio' && (
                    <div className="flex justify-center">
                      <div className="w-full max-w-xs">
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="text"
                              placeholder="Enter Option Title"
                              value={radioOptions[0]}
                              onChange={(e) => {
                                handleRadioOptionChange(e.target.value, 0)
                              }}
                              className="input w-2/3 input-xs"
                            />
                            <input
                              type="radio"
                              name="radio-6"
                              className="radio checked:bg-red-500"
                            />
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="text"
                              placeholder="Enter Option Title"
                              value={radioOptions[1]}
                              onChange={(e) => {
                                handleRadioOptionChange(e.target.value, 1)
                              }}
                              className="input w-2/3 input-xs"
                            />
                            <input
                              type="radio"
                              name="radio-6"
                              className="radio checked:bg-blue-500"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {inputType === 'Select' && (
                    <div>
                      <div className="flex justify-center">
                        <label htmlFor="quantity">Number of Options:</label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => {
                            setQuantity(Number(e.target.value))
                            const extendby =
                              Number(e.target.value) - selectOptions.length
                            setSelectOptions(
                              selectOptions.concat(
                                Array.from({ length: extendby }, () => '')
                              )
                            )
                          }}
                          name="quantity"
                          min="0"
                          max="20"
                          step="1"
                        />
                      </div>
                      <div className="flex justify-center">
                        <ul className="w-full max-w-xs">
                          {[...Array(quantity)].map((e, i) => {
                            return (
                              <li key={i}>
                                <input
                                  type="text"
                                  placeholder={`Enter Option Title ${i + 1}`}
                                  value={selectOptions[i]}
                                  onChange={(e) =>
                                    handleSelectOptionChange(e.target.value, i)
                                  }
                                  className="input w-full input-md my-1"
                                />
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden bg-white sticky bottom-0 z-50 border-t py-3 bg-white flex justify-center">
          <button
            className="btn btn-primary btn-block w-3/4 px-3"
            type="submit"
          >
            <FaUpload
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
              }}
            />
            &nbsp;Create
          </button>
        </div>
      </form>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  )
}

export default CreateSignupScreen
