import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemScreen from './screen/ItemScreen'
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import SignupScreen from './screen/SignupScreen'

function App() {
  return (
    <>
      <Router>
        <main></main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/productId" element={<ItemScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
