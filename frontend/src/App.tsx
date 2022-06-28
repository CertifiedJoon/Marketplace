import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemScreen from './screen/ItemScreen'
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import SignupScreen from './screen/SignupScreen'
import MyPageScreen from './screen/MyPageScreen'
import EventScreen from './screen/EventScreen'
import SavedScreen from './screen/SavedScreen'
import NoMatchScreen from './screen/NoMatchScreen'
import EventSignupScreen from './screen/EventSignupScreen'
import HistoryScreen from './screen/HistoryScreen'
import OrderDetailScreen from './screen/OrderDetailScreen'
import ProfileScreen from './screen/ProfileScreen'
import ItemUploadScreen from './screen/ItemUploadScreen'
import PaymentMethodScreen from './screen/PaymentMethodScreen'
import 'react-toastify/dist/ReactToastify.min.css'
import CommunityScreen from './screen/CommunityScreen'
import CreateSignupScreen from './screen/CreateSignupScreen'
import EventManageScreen from './screen/EventManageScreen'

function App() {
  return (
    <>
      <Router>
        <main></main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="*" element={<NoMatchScreen />}></Route>
          <Route path="/wishlist/userId" element={<SavedScreen />}></Route>
          <Route path="/explore/itemType" element={<HomeScreen />}></Route>
          <Route path="/productId" element={<ItemScreen />}></Route>
          <Route path="/sell" element={<HomeScreen sell />}></Route>
          <Route path="/sell/upload" element={<ItemUploadScreen />}></Route>
          <Route
            path="/eventId"
            element={<EventScreen itemType="event" />}
          ></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
          <Route
            path="/event/signup/eventId"
            element={<EventSignupScreen />}
          ></Route>
          <Route
            path="/event/create-signup"
            element={<CreateSignupScreen />}
          ></Route>
          <Route
            path="/event/manage/eventId"
            element={<EventManageScreen />}
          ></Route>
          <Route path="/mypage" element={<MyPageScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route
            path="/community/communityId"
            element={<CommunityScreen />}
          ></Route>
          <Route path="/purchase-history" element={<HistoryScreen />}></Route>
          <Route path="/sale-history" element={<HistoryScreen sell />}></Route>
          <Route
            path="/payment-method"
            element={<PaymentMethodScreen />}
          ></Route>
          <Route path="/order/orderId" element={<OrderDetailScreen />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
