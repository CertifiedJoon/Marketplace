import React, { useEffect, useState } from 'react'
import {
  FaHandSparkles,
  FaHeart,
  FaMedal,
  FaShare,
  FaInfoCircle,
  FaUpload,
} from 'react-icons/fa'
import { useForm, useFieldArray } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppSelector, useAppDispatch } from '../app/hook'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoGallery from '../components/PhotoGallery'
import {
  selectItem,
  selectItemStatus,
  selectItemError,
  selectThumbnail,
  resetItemStatus,
  getItemById,
} from '../features/item/itemSlice'
import { selectUserImage } from '../features/user/userProfileSlice'
import ProfileBadge from '../components/ProfileBadge'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectCommunity } from '../features/header/headerSlice'
import { current } from '@reduxjs/toolkit'

type FormInput = {
  heading: string
  sub_heading: string
  // communities: Array<string>
  // type: string
  reason: string
  description: string
  price: number
  negotiability: boolean
  details: Array<{ label: string; value: string }>
}

const imagesSchema = yup.object().shape({
  images: yup
    .mixed()
    .required('Images are required.')
    .test('fileSize', 'The file must be smaller than 1MB', (value) => {
      let total = 0
      for (let i = 0; i < value.length; i += 1) {
        total += value[i].size
      }
      return total <= 10000000
    })
    .test('type', 'File must be either .jpeg or .png', (value) => {
      for (let i = 0; i < value.length; i += 1) {
        if (value[i].type !== ('image/jpeg' || 'image/png')) return false
      }
      return true
    }),
})

export const InputSchema = yup
  .object({
    heading: yup
      .string()
      .required('Heading is a required field.')
      .min(3, 'Heading must be at least 3 characters long.')
      .max(50, 'Name must be at most 30 characters long.'),
    sub_heading: yup
      .string()
      .required('Subheading is a required field.')
      .min(3, 'Subheading must be at least 3 characters long.')
      .max(50, 'Subheading must be at most 30 characters long.'),
    // communities: yup
    //   .array()
    //   .of(yup.string())
    //   .min(1, 'You must select at least one community')
    //   .required('You must select at least one community'),
    // type: yup
    //   .string()
    //   .matches(
    //     /(all|event|stationery|note|book|tutoring|clothing|shoes|accessary|sports|fitness|quidditch|umbrella|bath-cosmetics|ikia|travel|electronics|ridebutnotcar|pet')/,
    //     'Select valid item type.'
    //   )
    //   .required('You must select item type.'),
    reason: yup
      .string()
      .required('Reason is a required field.')
      .min(3, 'Reason must be at least 3 characters long.')
      .max(50, 'Reason must be at most 30 characters long.'),
    price: yup
      .number()
      .min(0, 'Enter a valid price.')
      .max(100000000, 'Enter a valid price.')
      .required(),
    negotiability: yup.boolean().required('Select Negotiablity'),
    description: yup
      .string()
      .max(500, 'Description cannot exceed 500 characters.')
      .required('Description is required.'),
    details: yup.mixed(),
  })
  .required()

function ItemEditScreen() {
  const dispatch = useAppDispatch()
  const params = useParams()
  const item = useAppSelector(selectItem)
  const itemThumbnail = useAppSelector(selectThumbnail)
  const itemStatus = useAppSelector(selectItemStatus)
  const itemError = useAppSelector(selectItemError)
  const community = useAppSelector(selectCommunity)
  const profile = useAppSelector(selectUserImage)
  const {
    control: controlLaptop,
    register: registerLaptop,
    handleSubmit: handleSubmitLaptop,
    formState: { errors: errorsLaptop },
    reset: resetLaptop,
  } = useForm<FormInput>({
    resolver: yupResolver(InputSchema),
  })
  const { fields: fieldsLaptop, append: appendLaptop } = useFieldArray({
    control: controlLaptop,
    name: 'details',
  })

  const onSubmitLaptop = (data: FormInput) => {
    console.log(data)
  }

  useEffect(() => {
    if (params.itemId) dispatch(getItemById(params.itemId))
  }, [params, dispatch])

  useEffect(() => {
    if (itemStatus === 'failed') {
      toast.error(itemError)
      dispatch(resetItemStatus())
    } else if (itemStatus === 'succeeded') {
      resetLaptop({
        heading: item.heading,
        sub_heading: item.sub_heading,
        // communities: Array<string>
        // type: string
        reason: item.reason,
        description: item.description,
        price: item.price,
        negotiability: item.negotiability,
        details: item.details,
      })
      dispatch(resetItemStatus())
    }
    // eslint-disable-next-line
  }, [itemStatus, resetLaptop, dispatch, appendLaptop])

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files)
      try {
        await imagesSchema.validate({ images: event.target.files })
      } catch (err) {
        if (err instanceof yup.ValidationError) toast.error(err.message)
        return
      }
      console.log(event.target.files)
      // dispatch(uploadProfileImage(event.target.files[0]))
    }
  }

  return (
    <>
      <Header sell />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        <div className="hidden lg:block">
          <div className="alert alert-info shadow-lg">
            <div>
              <FaInfoCircle />
              <span>
                <span className="underline">
                  This page is exactly what the buyers will see!
                </span>{' '}
                Edit your item by filling out the details instead of yellow
                texts and buttons.
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmitLaptop(onSubmitLaptop)}>
            <div className="grid grid-cols-5 my-4">
              <div className="col-span-4">
                <input
                  type="text"
                  placeholder="Fill In Item Heading"
                  defaultValue={item.heading}
                  className="input input-ghost text-accent input-md placeholder-accent item-input-2xl w-full"
                  {...registerLaptop('heading')}
                />
                <p className="text-error text-xs">
                  {errorsLaptop.heading?.message}
                </p>
              </div>
              <div className="col-span-1 grid justify-item-stretch">
                <div className="justify-self-end">
                  <button
                    type="submit"
                    className="btn rounded btn-primary rounded-full text-xs px-3"
                  >
                    <FaUpload
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                      }}
                    />
                    &nbsp;Save
                  </button>
                </div>
              </div>
            </div>
            <div className="vh50 relative">
              <div className="grid grid-cols-5 gap-2 h-full">
                <div
                  className="col-span-3 bg-cover bg-no-repeat bg-center rounded-l-xl relative"
                  style={{
                    backgroundImage: `url(
                    ${itemThumbnail[0]}
                  )`,
                  }}
                >
                  <button className="btn glass absolute top-1 left-1">
                    <input
                      type="file"
                      className="text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white-50 file:text-accent"
                      multiple
                      onChange={handleUpload}
                    />
                  </button>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-rows-2 gap-2 h-full">
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center relative"
                      style={{
                        backgroundImage: `url(
                          ${itemThumbnail[1]}
                  )`,
                      }}
                    ></div>
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center relative"
                      style={{
                        backgroundImage: `url(
                          ${itemThumbnail[2]}
                  )`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-rows-2 gap-2 h-full">
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center rounded-tr-xl relative"
                      style={{
                        backgroundImage: `url(
                          ${itemThumbnail[3]}
                  )`,
                      }}
                    ></div>
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl relative"
                      style={{
                        backgroundImage: `url(
                          ${itemThumbnail[4]}
                  )`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-transparent absolute bottom-0 left-auto z-40">
                  <label
                    htmlFor="my-modal-5"
                    className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
                  >
                    Show all photos
                  </label>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <PhotoGallery />
                    <div className="modal-action bg-inherit">
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-sm btn-active btn-ghost"
                      >
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 my-5  border-b border-gray-300">
              <div className="col-span-2 pr-5">
                <div className="grid grid-rows-7 divide-y divide-gray-300">
                  <div className="row-span-1">
                    {/* One liner Description & reason for sale & profile pic */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <div>
                          <input
                            type="text"
                            placeholder="Fill In Item SubHeading"
                            defaultValue={item.sub_heading}
                            className="input input-ghost text-accent input-md placeholder-accent item-input-xl w-full"
                            {...registerLaptop('sub_heading')}
                          />
                          <p className="text-error text-xs">
                            {errorsLaptop.sub_heading?.message}
                          </p>
                        </div>
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Fill In Your Reason For Sale"
                            defaultValue={item.reason}
                            className="input input-ghost text-accent input-sm placeholder-accent placeholder-opacity-50 item-input-lg w-full max-w-xs mb-1 ml-3"
                            {...registerLaptop('reason')}
                          />
                          <p className="text-error text-xs">
                            {errorsLaptop.reason?.message}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <img
                          src={profile}
                          alt="profile"
                          className="w-1/3 mask mask-squircle ml-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row-span-2 py-5">
                    {fieldsLaptop.map((field, index) => (
                      <div key={field.id}>
                        <input
                          type="text"
                          defaultValue={field.label}
                          className="input rounded-xl text-accent input-xs"
                          {...registerLaptop(`details.${index}.label` as const)}
                        />
                        <input
                          type="text"
                          defaultValue={field.value}
                          className="ml-3 input input-ghost text-accent input-xs placeholder-accent item-input-base w-full mb-1 "
                          {...registerLaptop(`details.${index}.value` as const)}
                        />
                      </div>
                    ))}
                    <p className="text-error text-xs">
                      {errorsLaptop.details?.message}
                    </p>
                    <label className="text-sm text-gray-500">Description</label>
                    <textarea
                      className="textarea textarea-ghost placeholder-accent item-input-base w-full h-40 text-accent"
                      placeholder="Describe your listing."
                      {...registerLaptop('description')}
                    ></textarea>
                    <p className="text-error text-xs">
                      {errorsLaptop.description?.message}
                    </p>
                  </div>
                  <div className="row-span-2 py-5">
                    <label className="text-lg text-gray-500 mb-5">
                      Seller Description &nbsp;
                      {item.user.badges.map((badge, i) => (
                        <ProfileBadge key={i} name={badge.name} />
                      ))}
                    </label>
                    <div className="stats shadow">
                      {item.type === 'event' ? (
                        <div className="stat place-items-center">
                          <div className="stat-title">Events Hosted</div>
                          <div className="stat-value">
                            {item.user.events_hosted}
                          </div>
                          <div className="stat-desc">Past year</div>
                        </div>
                      ) : (
                        <div className="stat place-items-center">
                          <div className="stat-title">Clean Purchase</div>
                          <div className="stat-value">
                            {item.user.items_bought}
                          </div>
                          <div className="stat-desc">100% of Transactions</div>
                        </div>
                      )}
                      {item.type === 'event' ? (
                        <div className="stat place-items-center">
                          <div className="stat-title">People Hosted</div>
                          <div className="stat-value text-secondary">
                            {item.user.people_hosted}
                          </div>
                          <div className="stat-desc">86 rating</div>
                        </div>
                      ) : (
                        <div className="stat place-items-center">
                          <div className="stat-title">Clean Sale</div>
                          <div className="stat-value text-secondary">
                            {item.user.items_sold}
                          </div>
                          <div className="stat-desc">100% of Transactions</div>
                        </div>
                      )}

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <div className="avatar online">
                            <div className="w-16 rounded-full">
                              <img src={profile} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="stat-value">86</div>
                        <div className="stat-title">Transaction</div>
                        <div className="stat-desc text-secondary">
                          100% Clean Transaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="sticky top-20 z-40">
                  <div
                    className="card w-full
                 bg-white border shadow-xl ml-auto"
                  >
                    <div className="card-body">
                      <div className="grid grid-cols-1">
                        <div className="col-span-1">
                          <h2 className="card-title">
                            <span className="text-gray-500">
                              {item.type === 'event'
                                ? 'Join for'
                                : 'Listed for'}
                            </span>
                            <input
                              type="number"
                              step={1}
                              placeholder="Price"
                              defaultValue={item.price}
                              className="input input-ghost text-accent input-xs placeholder-lg placeholder-accent font-bold item-input-base w-5/12"
                              {...registerLaptop('price')}
                            />
                            <p className="text-error text-xs">
                              {errorsLaptop.price?.message}
                            </p>
                          </h2>
                        </div>
                        <div className="col-span-1 w-full">
                          <label className="swap pl-full">
                            <input
                              type="checkbox"
                              defaultChecked={item.negotiability}
                              {...registerLaptop('negotiability')}
                            />
                            <p className="text-error text-xs">
                              {errorsLaptop.negotiability?.message}
                            </p>
                            {item.type === 'event' ? (
                              <div className="swap-on badge badge-accent ">
                                Open House
                              </div>
                            ) : (
                              <div className="swap-on badge badge-accent ">
                                Negotiable
                              </div>
                            )}
                            {item.type === 'event' ? (
                              <div className="swap-off badge badge-accent ">
                                Private Hosting
                              </div>
                            ) : (
                              <div className="swap-off badge badge-accent ">
                                Unnegotiable
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="card-actions justify-stretch">
                        <button className="btn btn-primary w-full">
                          {item.type === 'event' ? 'Join' : 'Chat & Buy'}
                        </button>
                      </div>
                      <div className="grid grid-cols-5 border-b border-gray-300">
                        <div className="col-span-3">
                          <p className="underline">
                            {item.type === 'event' ? 'Ticket' : 'Item'}
                          </p>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <div className="mb-1">
                            {item.price === 0 ? (
                              <div className="badge badge-info badge-outline">
                                Free
                              </div>
                            ) : (
                              `$${item.price}`
                            )}
                          </div>
                        </div>
                        <div className="col-span-3">
                          <p className="underline">Marketplace Fee</p>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <div className="mb-1">
                            {item.price === 0 ? (
                              <div className="badge badge-info badge-outline">
                                No Fee
                              </div>
                            ) : (
                              `$${(item.price * 0.05).toFixed(2)}`
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5">
                        <div className="col-span-3">
                          <strong className="underline">Total</strong>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <strong className="mb-1">
                            {item.price === 0 ? (
                              <div className="badge badge-info badge-outline">
                                <strong>Free</strong>
                              </div>
                            ) : (
                              `$${(item.price * 1.05).toFixed(2)}`
                            )}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className="hero min-h-full rounded-2xl"
            style={{
              backgroundImage: `url(
            ${community.thumbnail_image}
          )`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{community.key}</h1>
                <p className="mb-5">{community.name}</p>
                <Link to={`/community/${community._id}`}>
                  <button className="btn btn-primary">Explore Community</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="alert alert-info shadow-lg mb-2">
            <div className="grid grid-cols-8">
              <div className="col-span-1">
                <FaInfoCircle />
              </div>
              <div className="col-span-7">
                <span>
                  <span className="underline">
                    This page is exactly what the buyers will see!
                  </span>{' '}
                  Edit your item by filling out the details instead of yellow
                  texts and buttons.
                </span>
              </div>
            </div>
          </div>
          <div className="vh40 relative">
            {/* <LazySwiper containImg={true} /> */}
            <button className="btn glass btn-sm w-1/2 z-40 absolute top-1 left-1">
              <input
                type="file"
                className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent-focus"
              />
            </button>
            <div className="bg-transparent absolute bottom-0 left-auto z-40">
              <label
                htmlFor="my-modal-1"
                className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
              >
                Show all photos
              </label>
            </div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <PhotoGallery />
                <div className="modal-action bg-inherit">
                  <label
                    htmlFor="my-modal-1"
                    className="btn btn-sm btn-active btn-ghost"
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3 py-3">
            <input
              type="text"
              placeholder="Item Heading"
              className="input input-ghost font-bold input-md placeholder-accent item-input-2xl placeholder:font-bold w-full"
            />
            <div className="divide-y divide-gray-300">
              <input
                type="text"
                placeholder="Item Sub-heading"
                className="input input-ghost input-sm text-gray-500 placeholder-accent placeholder-opacity-50 item-input-base w-full max-w-xs mb-1 ml-3"
              />

              <div className="grid grid-cols-4">
                <div className="col-span-1 justify-self-start max-h-20 py-3 pr-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="mask mask-squircle"
                  />
                </div>
                <div className="col-span-3 justify-self-end w-full py-3">
                  <input
                    type="text"
                    placeholder="Reason For Sale"
                    className="input input-ghost input-sm text-right text-gray-500 placeholder-accent placeholder-opacity-50 item-input-base w-full mb-1 ml-3"
                  />
                </div>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">Bought On</label>
                <input
                  type="text"
                  placeholder="Fill in approx. Timing of Purchase."
                  className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                />
                <label className="text-sm text-gray-500">Brand</label>
                <input
                  type="text"
                  placeholder="Fill in Product Branding"
                  className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                />
                <label className="text-sm text-gray-500">Condition</label>
                <input
                  type="text"
                  placeholder="Condition in One sentence. Be Creative!"
                  className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                />
                <label className="text-sm text-gray-500">
                  Frequency of Use
                </label>
                <input
                  type="text"
                  placeholder="eg) Once a week for a year."
                  className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                />
                <label className="text-sm text-gray-500">Description</label>
                <textarea
                  className="textarea textarea-ghost placeholder-accent item-input-base w-full h-40"
                  placeholder="Describe your listing."
                ></textarea>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">
                  Joon's Record &nbsp;
                  <div
                    className="tooltip tooltip-info"
                    data-tip="100% Clean Transactions"
                  >
                    <div className="badge badge-info badge-outline mr-1">
                      <FaHandSparkles />
                      &nbsp;Clean
                    </div>
                  </div>
                  <div
                    className="tooltip tooltip-success"
                    data-tip="Sold and Bought 10 items"
                  >
                    <div className="badge badge-success badge-outline mr-1">
                      <FaMedal />
                      &nbsp;PowerUser
                    </div>
                  </div>
                </label>
                <div className="flex stats shadow mt-2">
                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Purchase</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-title">Clean Sale</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc">100% of Transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden sticky bottom-0 z-50 border-t py-3 bg-white">
        <div className="grid grid-cols-3 px-3">
          <div className="col-span-2">
            <p>
              <span className="text-gray-500">Listed At</span>
              <input
                type="text"
                placeholder="Price"
                className="input input-ghost input-xs placeholder-accent item-input-base w-5/12"
              />
            </p>
            <div className="mt-1">
              <label className="swap">
                <input type="checkbox" />
                <div className="swap-off badge badge-accent badge-md">
                  Negotiable
                </div>
                <div className="swap-on badge badge-error badge-md">
                  Unnegotiable
                </div>
              </label>
              <button className="btn btn-xs rounded btn-ghost text-sm">
                <FaHeart
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: 'hsl(var(--sf))',
                  }}
                />
              </button>
              &nbsp;
              <button className="btn btn-xs rounded btn-ghost text-sm">
                <FaShare
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                  }}
                />
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <button className="btn btn-primary btn-md w-full">
              <FaUpload
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                }}
              />
              &nbsp;Edit
            </button>
          </div>
        </div>
      </div>
      <Footer active="explore" />
    </>
  )
}

export default ItemEditScreen
