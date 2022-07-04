import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'

function EventManageScreen() {
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    if (copySuccess === true) toast.success('Invitation copied.')
  }, [copySuccess])

  const handleSendInvitation = async () => {
    await navigator.clipboard.writeText('Link')
    setCopySuccess(true)
  }

  const handleMessageAll = () => {
    console.log('Message All')
  }

  const handleDownloadCell = () => {
    console.log('Download Member Details')
  }
  return (
    <div className="min-h-screen">
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div className="my-5 min-h-content">
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
                    Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex flex-wrap sm:grid sm:grid-cols-3 sm:w-full">
              <div className="px-3 w-full my-1">
                <button
                  className="btn btn-block btn-outline rounded-none"
                  onClick={handleSendInvitation}
                >
                  Send Invitation
                </button>
              </div>
              <div className="px-3 w-full my-1">
                <button
                  className="btn btn-block btn-outline rounded-none"
                  onClick={handleMessageAll}
                >
                  Send a message to all members
                </button>
              </div>
              <div className="px-3 w-full my-1">
                <button
                  className="btn btn-block btn-outline rounded-none"
                  onClick={handleDownloadCell}
                >
                  Download Event Members' Detail
                </button>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-center font-bold text-5xl my-2">Statistics</h1>
            <div className="flex flex-wrap">
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Total Members Joined</div>
                  <div className="stat-value">89,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Female</div>
                  <div className="stat-value">39,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Male</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Vegetarian</div>
                  <div className="stat-value">9,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Beef</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Chicken</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                <div className="stat">
                  <div className="stat-title">Total Ticket Sales</div>
                  <div className="stat-value">$40,000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-center font-bold text-5xl my-2">
              Member Joined
            </h1>
            <div className="overflow-x-auto overflow-y-auto vh80">
              <table className="table table-compact w-full">
                <thead>
                  {/* LazyLoad to be implemented */}
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>company</th>
                    <th>location</th>
                    <th>Last Login</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 30 }, () => '').map((e, i) => (
                    <tr>
                      <th>{i}</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Littel, Schaden and Vandervort</td>
                      <td>Canada</td>
                      <td>12/16/2020</td>
                      <td>Blue</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>company</th>
                    <th>location</th>
                    <th>Last Login</th>
                    <th>Favorite Color</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer active="mypage" />
    </div>
  )
}

export default EventManageScreen
