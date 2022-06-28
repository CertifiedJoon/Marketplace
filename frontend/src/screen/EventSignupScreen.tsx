import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function EventSignupScreen() {
  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        <div>
          <div
            className="hero max-h-96"
            style={{
              backgroundImage: `url('https://180dc.org/wp-content/uploads/2015/03/HKU.jpg')`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
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
        <div></div>
      </div>
      <Footer />
    </>
  )
}
export default EventSignupScreen
