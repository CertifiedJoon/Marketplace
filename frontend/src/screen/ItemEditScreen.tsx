import React, { useEffect, useState } from 'react'
import {
  FaHeart,
  FaShare,
  FaInfoCircle,
  FaUpload,
  FaRegTrashAlt,
  FaPencilAlt,
  FaUserCheck,
} from 'react-icons/fa'
import { useForm, useFieldArray } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { useAppSelector, useAppDispatch } from '../app/hook'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ItemUpdate, types } from '../interface/itemInterface'
import PhotoGallery from '../components/PhotoGallery'
import {
  selectItem,
  selectItemStatus,
  selectItemError,
  selectThumbnail,
  resetItemStatus,
  getItemById,
  uploadImages,
  updateItem,
  deleteItem,
} from '../features/item/itemSlice'
import { selectUserImage } from '../features/user/userProfileSlice'
import ProfileBadge from '../components/ProfileBadge'
import { selectCommunity } from '../features/header/headerSlice'
import SearchBarMultiple from '../components/SearchBarMultiple'

type FormInput = {
  heading: string
  sub_heading: string
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
  const navigate = useNavigate()
  const params = useParams()
  const [selectedCommunities, setSelectedCommunities] = useState<Array<string>>(
    []
  )
  const [selectedType, setSelectedType] = useState<string>('')
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

  useEffect(() => {
    if (params.itemId) dispatch(getItemById(params.itemId))
    const myScreenOrientation = window.screen.orientation
    myScreenOrientation.lock('portrait')
  }, [params, dispatch])

  useEffect(() => {
    if (itemStatus === 'failed') {
      toast.error(itemError)
      dispatch(resetItemStatus())
    } else if (itemStatus === 'succeeded') {
      resetLaptop({
        heading: item.heading,
        sub_heading: item.sub_heading,
        reason: item.reason,
        description: item.description,
        price: item.price,
        negotiability: item.negotiability,
        details: item.details,
      })
      setSelectedType(item.type)
      setSelectedCommunities(item.communities)
      dispatch(resetItemStatus())
    } else if (itemStatus === 'updated') {
      dispatch(resetItemStatus())
      navigate(`/item/${item._id}`)
    } else if (itemStatus === 'deleted') {
      dispatch(resetItemStatus())
      navigate('/')
    }
    // eslint-disable-next-line
  }, [itemStatus, resetLaptop, dispatch, appendLaptop])

  const handleDelete = () => {
    if (window.confirm('Delete Item?')) dispatch(deleteItem(item._id))
  }

  const onSubmitLaptop = (data: FormInput) => {
    if (selectedCommunities.length !== 0 && selectedType !== '') {
      const update: ItemUpdate = {
        _id: params.itemId as string,
        type: selectedType,
        communities: selectedCommunities,
        heading: data.heading,
        sub_heading: data.sub_heading,
        reason: data.reason,
        price: data.price,
        negotiability: data.negotiability,
        description: data.description,
        details: data.details,
      }
      dispatch(updateItem(update))
    } else {
      toast.error('Community & Type fields are must!')
    }
  }

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        await imagesSchema.validate({ images: event.target.files })
      } catch (err) {
        if (err instanceof yup.ValidationError) toast.error(err.message)
        return
      }
      dispatch(
        uploadImages({
          images: event.target.files,
          item_id: params.itemId as string,
        })
      )
    }
  }

  const handleCommunitySelect = (
    communities: ReadonlyArray<{ key: string; _id: string }>
  ) => {
    setSelectedCommunities(communities.map((community) => community._id))
  }

  return (
    <>
      <Header sell />
      <form onSubmit={handleSubmitLaptop(onSubmitLaptop)}>
        <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
          <div className="alert alert-info shadow-lg mb-2">
            <div>
              <FaInfoCircle />
              <span>
                <span className="underline">
                  This page is replica of what others will see!
                </span>{' '}
                Edit your item by filling out the details instead of yellow
                texts and buttons.
              </span>
            </div>
          </div>
          <div className="grid grid-rows-10">
            <div className="row-span-1 row-start-10 grid grid-cols-5 my-4 lg:row-start-1">
              <div className="col-span-5">
                {item.type === 'event' && (
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <Link to={`/event/edit-signup/${item._id}`}>
                      <button className="btn btn-block btn-sm rounded btn-secondary rounded-full text-xs">
                        <FaPencilAlt
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                          }}
                        />
                        &nbsp;Edit Signup Form
                      </button>
                    </Link>
                    <Link to={`/event/manage/${item._id}`}>
                      <button className="btn btn-block btn-sm rounded btn-secondary rounded-full text-xs">
                        <FaUserCheck
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                          }}
                        />
                        &nbsp;Manage Event
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="col-span-5 border-b-2 border-gray-200 flex items-start lg:col-span-3 lg:border-0">
                <input
                  type="text"
                  placeholder="Fill In Item Heading"
                  defaultValue={item.heading}
                  className="input input-ghost text-accent input-md placeholder-accent item-input-lg lg:item-input-2xl w-full"
                  {...registerLaptop('heading')}
                />
                <p className="text-error text-xs">
                  {errorsLaptop.heading?.message}
                </p>
              </div>
              <div className="hidden lg:block col-span-2 grid justify-item-stretch">
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete()}
                    className="btn rounded btn-error rounded-full text-xs px-3 mr-2"
                  >
                    <FaRegTrashAlt
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                      }}
                    />
                    &nbsp;Delete
                  </button>
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
            <div className="row-span-9 row-start-1 lg:row-start-2 vh50 relative">
              <div className="grid grid-cols-5 gap-2 h-full">
                <div
                  className="col-span-5 lg:col-span-3 bg-contain bg-no-repeat bg-black bg-center rounded-xl relative lg:bg-cover lg:rounded-l-xl"
                  style={{
                    backgroundImage: `url(
                    ${itemThumbnail[0]}
                  )`,
                  }}
                >
                  <button className="btn glass btn-sm w-1/2 max-w-xs z-40 absolute top-1 left-1">
                    <input
                      type="file"
                      className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent-focus"
                      onChange={(e) => handleUpload(e)}
                    />
                  </button>
                </div>
                <div className="hidden lg:block lg:col-span-1">
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
                <div className="hidden lg:block lg:col-span-1">
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
          </div>
          <div className="grid grid-cols-3 lg:border-b lg:border-gray-300 lg:my-5">
            <div className="col-span-3 lg:col-span-2 lg:pr-5">
              <div className="grid grid-rows-7 divide-y divide-gray-300">
                <div className="row-span-1 pb-3">
                  {/* One liner Description & reason for sale & profile pic */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="col-start-1 col-end-2 flex justify-start">
                      <img
                        src={profile}
                        alt="profile"
                        className="w-2/3 lg:w-1/3 mask mask-squircle"
                      />
                    </div>
                    <div className="col-start-2 col-end-5">
                      <div className="flex justify-end">
                        <input
                          type="text"
                          placeholder="Fill In Item SubHeading"
                          defaultValue={item.sub_heading}
                          className="input input-ghost input-md text-accent text-right placeholder-accent item-input-sm w-full lg:item-input-lg"
                          {...registerLaptop('sub_heading')}
                        />
                        <p className="text-error text-xs">
                          {errorsLaptop.sub_heading?.message}
                        </p>
                      </div>
                      <div className="w-full flex justify-end">
                        <input
                          type="text"
                          placeholder="Fill In Your Reason For Sale"
                          defaultValue={item.reason}
                          className="input input-ghost input-sm text-accent text-right placeholder-accent item-input-sm w-full mb-1 ml-3 lg:item-input-lg"
                          {...registerLaptop('reason')}
                        />
                        <p className="text-error text-xs">
                          {errorsLaptop.reason?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-3 py-5">
                  {fieldsLaptop.map((field, index) => (
                    <div key={field.id}>
                      <input
                        type="text"
                        defaultValue={field.label}
                        className="input rounded-xl text-accent input-xs item-input-lg lg:item-input-md"
                        {...registerLaptop(`details.${index}.label` as const)}
                      />
                      <input
                        type="text"
                        defaultValue={field.value}
                        className="ml-3 input input-ghost text-accent input-xs placeholder-accent w-full mb-1 item-input-lg lg:item-input-md"
                        {...registerLaptop(`details.${index}.value` as const)}
                      />
                    </div>
                  ))}
                  <p className="text-error text-xs">
                    {errorsLaptop.details?.message}
                  </p>
                  <label className="pl-2 text-lg text-gray-500 lg:text-md">
                    Description
                  </label>
                  <textarea
                    className="textarea textarea-ghost placeholder-accent w-full h-40 text-accent text-lg lg:text-md"
                    placeholder="Describe your listing."
                    {...registerLaptop('description')}
                  ></textarea>
                  <p className="text-error text-xs">
                    {errorsLaptop.description?.message}
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 lg:mr-2">
                      <label className="block mb-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                        Select Communities to Post
                      </label>
                      <SearchBarMultiple
                        onChangeFunction={handleCommunitySelect}
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:ml-2">
                      <label
                        htmlFor="type"
                        className="block mb-2 text-lg font-medium text-gray-500 dark:text-gray-400"
                      >
                        Select Item Type
                      </label>
                      <select
                        id="type"
                        onChange={(e) => setSelectedType(e.target.value)}
                        defaultValue={item.type}
                        className="block p-2 mb-6 w-full max-w-sm text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {types.map((type: string, i) => (
                          <option key={i} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row-span-2 py-5">
                  <div className="flex flex-wrap">
                    <label className="text-lg text-gray-500 mb-5">
                      Seller Description &nbsp;
                    </label>
                    {item.user.badges.slice(0, 2).map((badge, i) => (
                      <ProfileBadge key={i} name={badge.name} />
                    ))}
                  </div>
                  <div className="flex stats shadow">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
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
                            {item.type === 'event' ? 'Join for' : 'Listed for'}
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
          <div className="hidden lg:block">
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
                    <button className="btn btn-primary">
                      Explore Community
                    </button>
                  </Link>
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
              <button className="btn btn-primary btn-md w-full" type="submit">
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
      </form>
      <Footer active="explore" />
    </>
  )
}

export default ItemEditScreen
