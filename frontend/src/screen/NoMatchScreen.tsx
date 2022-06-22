import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import oops from '../static/images/oops.png'
function NoMatchScreen() {
  return (
    <>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 vh90">
        <div className="flex items-center flex-col">
          <div>
            <img src={oops} alt="" className="mask mask-square" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary">
              We could not find the page you are looking for.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NoMatchScreen
