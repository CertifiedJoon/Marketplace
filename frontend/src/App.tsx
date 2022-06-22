import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemScreen from './screen/ItemScreen'
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import SignupScreen from './screen/SignupScreen'
import ProfileScreen from './screen/ProfileScreen'
import EventScreen from './screen/EventScreen'
import ItemUploadScreen from './screen/ItemUploadScreen'
import 'react-toastify/dist/ReactToastify.min.css'
import SavedScreen from './screen/SavedScreen'
import NoMatchScreen from './screen/NoMatchScreen'
function App() {
  return (
    <>
      <Router>
        <main></main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="*" element={<NoMatchScreen />}></Route>
          <Route path="/wishlist" element={<SavedScreen />}></Route>
          <Route path="/explore/itemType" element={<HomeScreen />}></Route>
          <Route path="/sell" element={<HomeScreen sell />}></Route>
          <Route path="/sell/upload" element={<ItemUploadScreen />}></Route>
          <Route path="/productId" element={<ItemScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route
            path="/eventId"
            element={<EventScreen itemType="event" />}
          ></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
