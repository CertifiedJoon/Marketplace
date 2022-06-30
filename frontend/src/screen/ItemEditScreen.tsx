import React from 'react'
import {
  FaHandSparkles,
  FaHeart,
  FaMedal,
  FaShare,
  FaInfoCircle,
  FaUpload,
} from 'react-icons/fa'
import LazySwiper from '../components/LazySwiper'
import PhotoGallery from '../components/PhotoGallery'
import profile from '../static/images/profile.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  [key: string]: any
}

function ItemEditScreen() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-5 my-4">
              <div className="col-span-4">
                <input
                  type="text"
                  placeholder="Fill In Item Heading"
                  className="input input-ghost input-md placeholder-accent item-input-2xl w-full"
                  {...register('itemHeading')}
                />
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
                    &nbsp;Edit
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
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                  }}
                >
                  <button className="btn glass absolute top-1 left-1">
                    <input
                      type="file"
                      className="text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white-50 file:text-accent"
                      {...register('thumbnail1')}
                    />
                  </button>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-rows-2 gap-2 h-full">
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center relative"
                      style={{
                        backgroundImage: `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                      }}
                    >
                      <button className="btn glass btn-sm w-1/2 absolute top-1 left-1">
                        <input
                          type="file"
                          className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent"
                          {...register('thumbnail2')}
                        />
                      </button>
                    </div>
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center relative"
                      style={{
                        backgroundImage: `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                      }}
                    >
                      <button className="btn glass btn-sm w-1/2 absolute top-1 left-1">
                        <input
                          type="file"
                          className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent"
                          {...register('thumbnail3')}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-rows-2 gap-2 h-full">
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center rounded-tr-xl relative"
                      style={{
                        backgroundImage: `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                      }}
                    >
                      <button className="btn glass btn-sm w-1/2 absolute top-1 left-1">
                        <input
                          type="file"
                          className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent"
                          {...register('thumbnail4')}
                        />
                      </button>
                    </div>
                    <div
                      className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl relative"
                      style={{
                        backgroundImage: `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                      }}
                    >
                      <button className="btn glass btn-sm w-1/2 absolute top-1 left-1">
                        <input
                          type="file"
                          className="text-black file:input-xs file:py-1 file:px-1 file:rounded-full file:border-0 file:text-xs file:bg-white-50 file:text-accent"
                          {...register('thumbnail5')}
                        />
                      </button>
                    </div>
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
                            className="input input-ghost input-md placeholder-accent item-input-xl w-full max-w-xs"
                            {...register('itemSubheading')}
                          />
                        </div>
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Fill In Your Reason For Sale"
                            className="input input-ghost input-sm placeholder-accent placeholder-opacity-50 item-input-lg w-full max-w-xs mb-1 ml-3"
                            {...register('reasonForSale')}
                          />
                        </div>
                      </div>
                      <div className="col-span-1 justify-content-end">
                        <img
                          src={profile}
                          alt="profile"
                          className="w-1/2 mask mask-squircle ml-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row-span-2 py-5">
                    <div>
                      <label className="text-sm text-gray-500 block">
                        Bought On
                      </label>
                      <input
                        type="text"
                        placeholder="Fill in approx. Timing of Purchase."
                        className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                        {...register('boughtOn')}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block">
                        Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Fill in Product Branding."
                        className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                        {...register('brand')}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block">
                        Condition
                      </label>
                      <input
                        type="text"
                        placeholder="Describe Condition in One sentence. Be Creative!"
                        className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                        {...register('condition')}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block">
                        Frequency of Use
                      </label>
                      <input
                        type="text"
                        placeholder="Fill in frequency of use. eg) Once a week for a year."
                        className="input input-ghost input-xs placeholder-accent item-input-base w-full mb-1 "
                        {...register('frequencyOfUse')}
                      />
                    </div>
                  </div>
                  <div className="row-span-2 py-5">
                    <label className="text-lg text-gray-500 mb-2 block">
                      Description
                    </label>
                    <textarea
                      className="textarea textarea-ghost placeholder-accent item-input-base w-full h-40"
                      placeholder="Describe your listing."
                      {...register('description')}
                    ></textarea>
                  </div>
                  <div className="row-span-2 py-5">
                    <label className="text-lg text-gray-500 mb-5">
                      Seller Description &nbsp;
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
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Items Bought</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">
                          21% more than last month
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-title">Items Sold</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">
                          21% more than last month
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <div className="avatar online">
                            <div className="w-16 rounded-full">
                              <img
                                src="https://api.lorem.space/image/face?w=128&h=128"
                                alt=""
                              />
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
                      <div className="grid grid-cols-3">
                        <div className="col-span-2">
                          <h2 className="card-title">
                            <span className="text-gray-500">Listed At</span>
                            <input
                              type="number"
                              step={1}
                              placeholder="Price"
                              className="input input-ghost input-xs placeholder-accent item-input-base w-5/12"
                              {...register('price')}
                            />
                          </h2>
                        </div>
                        <div className="col-span-1">
                          <label className="swap">
                            <input type="checkbox" />
                            <div className="swap-off badge badge-accent badge-lg">
                              Negotiable
                            </div>
                            <div className="swap-on badge badge-error badge-lg">
                              Unnegotiable
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="card-actions justify-stretch">
                        <button className="btn btn-primary w-full">
                          Chat & Buy
                        </button>
                      </div>
                      <div className="grid grid-cols-5 border-b border-gray-300">
                        <div className="col-span-3">
                          <p className="underline">Product Price</p>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <p className="mb-1">$4000</p>
                        </div>
                        <div className="col-span-3">
                          <p className="underline">Marketplace Fee</p>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <p className="mb-1">$10</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-5">
                        <div className="col-span-3">
                          <strong className="underline">Total</strong>
                        </div>
                        <div className="col-span-2 justify-self-end">
                          <strong className="mb-1">$4010</strong>
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
            'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg'
          )`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">HKU</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Explore Community</button>
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
            <LazySwiper containImg={true} />
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
