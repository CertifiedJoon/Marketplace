import React, { useEffect, useState } from 'react'
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
            <div className="grid grid-cols-3 w-full">
              <div className="px-3">
                <button
                  className="btn btn-block btn-outline rounded-none"
                  onClick={handleSendInvitation}
                >
                  Send Invitation
                </button>
              </div>
              <div className="px-3">
                <button
                  className="btn btn-block btn-outline rounded-none"
                  onClick={handleMessageAll}
                >
                  Send a message to all members
                </button>
              </div>
              <div className="px-3">
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
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Total Members Joined</div>
                  <div className="stat-value">89,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Female</div>
                  <div className="stat-value">39,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Male</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Vegetarian</div>
                  <div className="stat-value">9,400</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Beef</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
                <div className="stat">
                  <div className="stat-title">Chicken</div>
                  <div className="stat-value">40,000</div>
                </div>
              </div>
              <div className="stats shadow mx-3 my-3">
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
      </div>
      <Footer />
    </div>
  )
}

export default EventManageScreen
