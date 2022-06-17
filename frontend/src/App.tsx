import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemScreen from './screen/ItemScreen'
import HomeScreen from './screen/HomeScreen'

function App() {
  return (
    <>
      <Router>
        <main></main>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/productId" element={<ItemScreen />}></Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
