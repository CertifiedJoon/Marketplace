import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { FaHeart, FaShare } from 'react-icons/fa'
import LazySwiper from '../components/LazySwiper'
import PhotoGallery from '../components/PhotoGallery'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PublicProfile from '../components/PublicProfile'
import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  selectThumbnail,
  selectItem,
  selectItemError,
  selectItemStatus,
  resetItemStatus,
  getItemById,
} from '../features/item/itemSlice'
import ProfileBadge from '../components/ProfileBadge'

function ItemScreen() {
  const [copySuccess, setCopySuccess] = useState(false)
  const params = useParams()
  const item = useAppSelector(selectItem)
  const itemStatus = useAppSelector(selectItemStatus)
  const itemError = useAppSelector(selectItemError)
  const itemThumbnail = useAppSelector(selectThumbnail)
  const dispatch = useAppDispatch()

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
  }

  const handleLike = () => {
    toast.success('Item saved.')
  }

  useEffect(() => {
    if (params.itemId) dispatch(getItemById(params.itemId))
  }, [params, dispatch])

  useEffect(() => {
    if (itemStatus === 'failed') {
      toast.error(itemError)
      dispatch(resetItemStatus)
    }
  }, [itemStatus])

  useEffect(() => {
    if (copySuccess === true) toast.success('Link copied.')
  }, [copySuccess])

  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        {/* Mobile */}

        <div className="lg:hidden">
          <div className="vh40 relative">
            <LazySwiper images={itemThumbnail} containImg={true} />
            <div className="bg-transparent absolute bottom-0 left-auto z-40">
              <label
                htmlFor="my-modal-2"
                className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
              >
                Show all photos
              </label>
            </div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <PhotoGallery />
                <div className="modal-action bg-inherit">
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-sm btn-active btn-ghost"
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3 py-3">
            <h3 className="text-2xl my-3">
              <strong>{item.heading}</strong>
            </h3>
            <div className="divide-y divide-gray-300">
              <div className="grid grid-cols-5">
                <div className="col-span-3">
                  <p className="text-sm text-gray-500">{item.sub_heading}</p>
                </div>
                <div className="col-span-2 justify-self-end">
                  <button
                    className="btn btn-xs rounded btn-ghost text-xs px-0"
                    onClick={handleLike}
                  >
                    <FaHeart
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        color: 'hsl(var(--sf))',
                      }}
                    />
                    &nbsp;Save
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-xs rounded btn-ghost text-xs px-0"
                    onClick={handleShare}
                  >
                    <FaShare
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                      }}
                    />
                    &nbsp;Share
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 justify-self-start max-h-20 py-3 pr-3">
                  <label
                    htmlFor="my-modal-profile-mobile"
                    className="btn modal-button btn-ghost btn-square btn-lg"
                  >
                    <img
                      src={item.user.profile_image}
                      alt="profile"
                      className="mask mask-squircle"
                    />
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-profile-mobile"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom">
                    <div className="modal-box">
                      <PublicProfile profile={item.user} type={item.type} />
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-profile-mobile"
                          className="btn btn-primary"
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 justify-self-end text-md py-3 text-gray-500">
                  {item.reason}
                </div>
              </div>
              <div className="py-3">
                {item.details.map((detail, i) => (
                  <div key={i}>
                    <label className="text-sm text-gray-500">
                      {detail.label}
                    </label>
                    <p className="mb-1">{detail.value}</p>
                  </div>
                ))}
                <div>
                  <label className="text-sm text-gray-500">Description</label>
                  <p className="mb-1">{item.description}</p>
                </div>
              </div>
              <div className="py-3">
                <label className="text-sm text-gray-500">
                  {item.user.nickname}'s Record &nbsp;
                  {item.user.badges.map((badge, i) => (
                    <ProfileBadge key={i} name={badge.name} />
                  ))}
                </label>
                <div className="flex stats shadow mt-2">
                  {item.type === 'event' ? (
                    <>
                      <div className="stat place-items-center">
                        <div className="stat-title">Events Hosted</div>
                        <div className="stat-value">
                          {item.user.events_hosted}
                        </div>
                        <div className="stat-desc">Past year</div>
                      </div>
                      <div className="stat place-items-center">
                        <div className="stat-title">People Hosted</div>
                        <div className="stat-value text-secondary">
                          {item.user.people_hosted}
                        </div>
                        <div className="stat-desc">86 rating</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="stat place-items-center">
                        <div className="stat-title">Clean Purchase</div>
                        <div className="stat-value">
                          {item.user.items_bought}
                        </div>
                        <div className="stat-desc">100% of Transactions</div>
                      </div>
                      <div className="stat place-items-center">
                        <div className="stat-title">Clean Sale</div>
                        <div className="stat-value text-secondary">
                          {item.user.items_sold}
                        </div>
                        <div className="stat-desc">100% of Transactions</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden sticky bottom-0 z-50 border-t py-3 bg-white">
          <div className="grid grid-cols-3 px-3">
            <div className="col-span-2">
              <div>
                <span className="text-gray-500">
                  {item.type === 'event' ? 'Join for' : 'Listed for'}
                </span>{' '}
                {Number(item.price) === 0 ? (
                  <div className="badge badge-info badge-outline">Free</div>
                ) : (
                  `$${item.price}`
                )}
              </div>
              {item.type === 'event' ? (
                item.negotiability ? (
                  <div className="badge badge-info">Open House</div>
                ) : (
                  <div className="badge badge-secondary">Private Hosting</div>
                )
              ) : item.negotiability ? (
                <div className="badge badge-info">Negotiable</div>
              ) : (
                <div className="badge badge-secondary">Unnegotiable</div>
              )}
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
            <div className="col-span-1">
              <Link
                to={
                  item.type === 'event'
                    ? `/event/signup/${item._id}`
                    : '/messages/chatId'
                }
              >
                <button className="btn btn-primary btn-md w-full">
                  {item.type === 'event' ? 'Join' : 'Chat & Buy'}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Laptop */}

        <div className="hidden lg:block">
          <div className="grid grid-cols-5 my-4">
            <div className="col-span-4">
              <h1>
                <strong>{item.heading}</strong>
              </h1>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-0">
                <button
                  className="btn rounded btn-ghost text-xs px-0"
                  onClick={handleLike}
                >
                  <FaHeart
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      color: 'hsl(var(--sf))',
                    }}
                  />
                  &nbsp;Save
                </button>
                <button
                  className="btn rounded btn-ghost text-xs px-0"
                  onClick={handleShare}
                >
                  <FaShare
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                    }}
                  />
                  &nbsp;Share
                </button>
              </div>
            </div>
          </div>
          <div className="vh50 relative">
            <div className="grid grid-cols-5 gap-2 h-full">
              <div
                className="col-span-3 bg-cover bg-no-repeat bg-center rounded-l-xl"
                style={{
                  backgroundImage: `url(
                    '${itemThumbnail[0]}'
                    )`,
                  backgroundColor: 'lightgray',
                }}
              ></div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                      '${itemThumbnail[1]}'
                      )`,
                      backgroundColor: 'lightgray',
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(
                      '${itemThumbnail[2]}'
                      )`,
                      backgroundColor: 'lightgray',
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-tr-xl"
                    style={{
                      backgroundImage: `url(
                      '${itemThumbnail[3]}'
                      )`,
                      backgroundColor: 'lightgray',
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl"
                    style={{
                      backgroundImage: `url(
                      '${itemThumbnail[4]}'
                      )`,
                      backgroundColor: 'lightgray',
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
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
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
                <div className="row-span-1 py-5">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 justify-start">
                      <div>
                        <h1 className="w-full text-2xl">{item.sub_heading}</h1>
                      </div>
                      <div className="w-full my-1 text-lg text-gray-500">
                        {item.reason}
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <label
                        htmlFor="my-modal-profile"
                        className="btn modal-button btn-ghost btn-square btn-lg"
                      >
                        <img
                          src={item.user.profile_image}
                          alt="profile"
                          className="mask mask-squircle"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row-span-2 py-5">
                  {item.details.map((detail, i) => (
                    <div key={i}>
                      <label className="text-sm text-gray-500">
                        {detail.label}
                      </label>
                      <p className="mb-1">{detail.value}</p>
                    </div>
                  ))}
                </div>
                <div className="row-span-2 py-5">
                  <label className="text-lg text-gray-500 mb-2">
                    Description
                  </label>
                  <p>{item.description}</p>
                </div>
                <div className="row-span-2 py-5">
                  <div>
                    <label className="text-lg text-gray-500 mb-5">
                      Seller Description &nbsp;
                      {item.user.badges.map((badge, i) => (
                        <ProfileBadge key={i} name={badge.name} />
                      ))}
                    </label>
                  </div>
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
                            <label
                              htmlFor="my-modal-profile"
                              className="btn modal-button btn-ghost btn-square btn-lg"
                            >
                              <img
                                src={item.user.profile_image}
                                alt="profile"
                                className="mask mask-circle"
                              />
                            </label>

                            <input
                              type="checkbox"
                              id="my-modal-profile"
                              className="modal-toggle"
                            />
                            <div className="modal modal-middle">
                              <div className="modal-box">
                                <PublicProfile
                                  profile={item.user}
                                  type={item.type}
                                />
                                <div className="modal-action">
                                  <label
                                    htmlFor="my-modal-profile"
                                    className="btn btn-primary"
                                  >
                                    Close
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="stat-value">
                        {item.user.clean_transaction}
                      </div>
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
                    <div className="grid grid-cols-1 w-full">
                      <div className="col-span-1">
                        <h2 className="card-title">
                          <span className="text-gray-500">
                            {item.type === 'event' ? 'Join for' : 'Listed for'}
                          </span>{' '}
                          {Number(item.price) === 0 ? (
                            <div className="badge badge-info badge-outline">
                              Free
                            </div>
                          ) : (
                            `$${item.price}`
                          )}
                        </h2>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        {item.type === 'event' ? (
                          item.negotiability ? (
                            <div className="badge badge-info">Open House</div>
                          ) : (
                            <div className="badge badge-secondary">
                              Private Hosting
                            </div>
                          )
                        ) : item.negotiability ? (
                          <div className="badge badge-info">Negotiable</div>
                        ) : (
                          <div className="badge badge-secondary">
                            Unnegotiable
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="card-actions justify-stretch">
                      <Link
                        to={
                          item.type === 'event'
                            ? `/event/signup/${item._id}`
                            : '/messages/chatId'
                        }
                        className="w-full"
                      >
                        <button className="btn btn-primary w-full">
                          {item.type === 'event' ? 'Join' : 'Chat & Buy'}
                        </button>
                      </Link>
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
                        <div className="mb-1">
                          {item.price === 0 ? (
                            <div className="badge badge-info badge-outline">
                              <strong>Free</strong>
                            </div>
                          ) : (
                            `$${(item.price * 1.05).toFixed(2)}`
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <Link to="/community/communityId">
                  <button className="btn btn-primary">Explore Community</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer active="explore" />
    </>
  )
}

export default ItemScreen
