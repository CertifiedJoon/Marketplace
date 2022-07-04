import React from 'react'
import { Link } from 'react-router-dom'

import profile from '../static/images/profile.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LazySwiper from '../components/LazySwiper'
import PhotoGallery from '../components/PhotoGallery'

type Props = {
  host?: boolean
}

function EventDetail({ host = false }: Props) {
  const handleClick = () => {
    if (host) {
      console.log('Rehost event')
    } else {
      console.log("Follow Host's Event")
    }
  }
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
          <div className="my-5 min-h-content">
            <div className="hidden lg:block">
              <h1>
                <strong>Quidditch Practice</strong>
              </h1>
              <div className="vh50 relative">
                <div className="grid grid-cols-5 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-l-xl"
                    style={{
                      backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                  <div className="col-span-1">
                    <div className="grid grid-rows-2 gap-2 h-full">
                      <div
                        className="col-span-3 bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                        }}
                      ></div>
                      <div
                        className="col-span-3 bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
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
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
                  )`,
                        }}
                      ></div>
                      <div
                        className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl"
                        style={{
                          backgroundImage: `url(
                    'https://api.lorem.space/image/house?w=800&h=800&hash=8B7BCDC2'
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
                    <div className="row-span-1 py-5">
                      {/* One liner Description & reason for sale & profile pic */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 justify-start">
                          <div>
                            <h1 className="w-full text-2xl">
                              Gryffindor Quidditch Practice
                            </h1>
                          </div>
                          <div className="w-full my-1 text-lg text-gray-500">
                            A bi-weekly practice.
                          </div>
                        </div>
                        <div className="col-span-1 justify-content-end">
                          <Link to="/public-profile/userId">
                            <img
                              src={profile}
                              alt="profile"
                              className="w-1/2 mask mask-squircle ml-auto"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-2 py-5">
                      <label className="text-sm text-gray-500">
                        Event Date
                      </label>
                      <p className="mb-1">25th, December, 1982</p>
                      <label className="text-sm text-gray-500">Location</label>
                      <p className="mb-1">Hogwarts Quidditch Stadium</p>
                      <label className="text-sm text-gray-500">
                        Event Capacity
                      </label>
                      <p className="mb-1">50</p>
                      <label className="text-sm text-gray-500">Condition</label>
                      <p className="mb-1">You must be gryffindor.</p>
                    </div>
                    <div className="row-span-2 py-5">
                      <label className="text-lg text-gray-500 mb-2">
                        Description
                      </label>
                      <p>
                        "Quidditch, the most popular sport in the magical world
                        – highly dangerous, very exciting and played on
                        broomsticks."
                      </p>
                      <p>
                        The object of the game was to score more points than
                        your opponents. Each goal was worth ten points and
                        catching the Golden Snitch was worth one-hundred and
                        fifty points. The game ended when the Snitch was caught
                        or an agreement was reached between the captains of both
                        teams. Some games could go on for many days if the
                        Snitch was not caught (the record, according to
                        Quidditch Through the Ages, was six months, although no
                        one caught the Snitch).
                      </p>
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
                              <span className="text-gray-500">Joining Fee</span>{' '}
                              $4
                            </h2>
                          </div>
                        </div>
                        <div className="card-actions justify-stretch">
                          <button
                            className="btn btn-primary btn-md w-full"
                            onClick={handleClick}
                          >
                            {host ? 'Rehost Event' : "Follow Host's Event"}
                          </button>
                        </div>
                        <div className="grid grid-cols-5 border-b border-gray-300">
                          <div className="col-span-3">
                            <p className="underline">Event Fee</p>
                          </div>
                          <div className="col-span-2 justify-self-end">
                            <p className="mb-1">$4</p>
                          </div>
                          <div className="col-span-3">
                            <p className="underline">Marketplace Fee</p>
                          </div>
                          <div className="col-span-2 justify-self-end">
                            <p className="mb-1">$0</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div className="col-span-3">
                            <strong className="underline">Total</strong>
                          </div>
                          <div className="col-span-2 justify-self-end">
                            <strong className="mb-1">$4</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="vh40">
                {/* <LazySwiper containImg={true} /> */}
              </div>
              <div className="mx-3 py-3">
                <h3 className="text-2xl my-3">
                  <strong>Quidditch Practice</strong>
                </h3>
                <div className="divide-y divide-gray-300">
                  <p className="text-sm text-gray-500">
                    Gryffindor Quidditch Practice
                  </p>
                  <div className="grid grid-cols-4">
                    <div className="col-span-1 justify-self-start max-h-20 py-3 pr-3">
                      <img
                        src={profile}
                        alt="profile"
                        className="mask mask-squircle"
                      />
                    </div>
                    <div className="col-span-3 justify-self-end text-md py-3 text-gray-500">
                      Bi-weekly practice.
                    </div>
                  </div>
                  <div className="py-3">
                    <label className="text-sm text-gray-500">Event Date</label>
                    <p className="mb-1">25th, December, 1982</p>
                    <label className="text-sm text-gray-500">Location</label>
                    <p className="mb-1">Hogwarts Quidditch Stadium</p>
                    <label className="text-sm text-gray-500">
                      Event Capacity
                    </label>
                    <p className="mb-1">50</p>
                    <label className="text-sm text-gray-500">Condition</label>
                    <p className="mb-1">You must be gryffindor.</p>
                    <label className="text-lg text-gray-500 mb-2">
                      Description
                    </label>
                    <p>
                      "Quidditch, the most popular sport in the magical world –
                      highly dangerous, very exciting and played on
                      broomsticks."
                    </p>
                    <p>
                      The object of the game was to score more points than your
                      opponents. Each goal was worth ten points and catching the
                      Golden Snitch was worth one-hundred and fifty points. The
                      game ended when the Snitch was caught or an agreement was
                      reached between the captains of both teams. Some games
                      could go on for many days if the Snitch was not caught
                      (the record, according to Quidditch Through the Ages, was
                      six months, although no one caught the Snitch).
                    </p>
                  </div>
                </div>
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
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Zemlak, Daniel and Leannon</td>
                    <td>United States</td>
                    <td>12/5/2020</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Carroll Group</td>
                    <td>China</td>
                    <td>8/15/2020</td>
                    <td>Red</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Marjy Ferencz</td>
                    <td>Office Assistant I</td>
                    <td>Rowe-Schoen</td>
                    <td>Russia</td>
                    <td>3/25/2021</td>
                    <td>Crimson</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Yancy Tear</td>
                    <td>Community Outreach Specialist</td>
                    <td>Wyman-Ledner</td>
                    <td>Brazil</td>
                    <td>5/22/2020</td>
                    <td>Indigo</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Irma Vasilik</td>
                    <td>Editor</td>
                    <td>Wiza, Bins and Emard</td>
                    <td>Venezuela</td>
                    <td>12/8/2020</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Meghann Durtnal</td>
                    <td>Staff Accountant IV</td>
                    <td>Schuster-Schimmel</td>
                    <td>Philippines</td>
                    <td>2/17/2021</td>
                    <td>Yellow</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>Sammy Seston</td>
                    <td>Accountant I</td>
                    <td>O'Hara, Welch and Keebler</td>
                    <td>Indonesia</td>
                    <td>5/23/2020</td>
                    <td>Crimson</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td>Lesya Tinham</td>
                    <td>Safety Technician IV</td>
                    <td>Turner-Kuhlman</td>
                    <td>Philippines</td>
                    <td>2/21/2021</td>
                    <td>Maroon</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>Zaneta Tewkesbury</td>
                    <td>VP Marketing</td>
                    <td>Sauer LLC</td>
                    <td>Chad</td>
                    <td>6/23/2020</td>
                    <td>Green</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td>Andy Tipple</td>
                    <td>Librarian</td>
                    <td>Hilpert Group</td>
                    <td>Poland</td>
                    <td>7/9/2020</td>
                    <td>Indigo</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td>Sophi Biles</td>
                    <td>Recruiting Manager</td>
                    <td>Gutmann Inc</td>
                    <td>Indonesia</td>
                    <td>2/12/2021</td>
                    <td>Maroon</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>Florida Garces</td>
                    <td>Web Developer IV</td>
                    <td>Gaylord, Pacocha and Baumbach</td>
                    <td>Poland</td>
                    <td>5/31/2020</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>Maribeth Popping</td>
                    <td>Analyst Programmer</td>
                    <td>Deckow-Pouros</td>
                    <td>Portugal</td>
                    <td>4/27/2021</td>
                    <td>Aquamarine</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>Moritz Dryburgh</td>
                    <td>Dental Hygienist</td>
                    <td>Schiller, Cole and Hackett</td>
                    <td>Sri Lanka</td>
                    <td>8/8/2020</td>
                    <td>Crimson</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>Reid Semiras</td>
                    <td>Teacher</td>
                    <td>Sporer, Sipes and Rogahn</td>
                    <td>Poland</td>
                    <td>7/30/2020</td>
                    <td>Green</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>Alec Lethby</td>
                    <td>Teacher</td>
                    <td>Reichel, Glover and Hamill</td>
                    <td>China</td>
                    <td>2/28/2021</td>
                    <td>Khaki</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>Aland Wilber</td>
                    <td>Quality Control Specialist</td>
                    <td>Kshlerin, Rogahn and Swaniawski</td>
                    <td>Czech Republic</td>
                    <td>9/29/2020</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>Teddie Duerden</td>
                    <td>Staff Accountant III</td>
                    <td>Pouros, Ullrich and Windler</td>
                    <td>France</td>
                    <td>10/27/2020</td>
                    <td>Aquamarine</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>Lorelei Blackstone</td>
                    <td>Data Coordiator</td>
                    <td>Witting, Kutch and Greenfelder</td>
                    <td>Kazakhstan</td>
                    <td>6/3/2020</td>
                    <td>Red</td>
                  </tr>
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
        <div className="lg:hidden sticky bottom-0 z-50 border-t py-3 bg-white">
          <div className="grid grid-cols-3 px-3">
            <div className="col-span-2">
              <p>
                <span className="text-gray-500">Joining Fee</span> $4
              </p>
              <div className="badge badge-secondary">Unnegotiable</div>
            </div>
            <div className="col-span-1">
              <button
                className="btn btn-primary btn-md w-full"
                onClick={handleClick}
              >
                {host ? 'Rehost Event' : "Follow Host's Event"}
              </button>
            </div>
          </div>
        </div>
        <Footer active="mypage" />
      </div>
    </>
  )
}

export default EventDetail
