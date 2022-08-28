import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ItemScreen from "./screen/ItemScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import MyPageScreen from "./screen/MyPageScreen";
import SavedScreen from "./screen/MySavedScreen";
import NoMatchScreen from "./screen/NoMatchScreen";
import EventSignupScreen from "./screen/EventSignupScreen";
import HistoryScreen from "./screen/MyHistoryScreen";
import OrderDetailScreen from "./screen/MyOrderDetailScreen";
import ProfileScreen from "./screen/MyProfileScreen";
import ItemUploadScreen from "./screen/ItemUploadScreen";
import PaymentMethodScreen from "./screen/MyPaymentMethodScreen";
import "react-toastify/dist/ReactToastify.min.css";
import CommunityScreen from "./screen/CommunityScreen";
import CreateSignupScreen from "./screen/EventCreateSignupScreen";
import EventManageScreen from "./screen/EventManageScreen";
import ItemEditScreen from "./screen/ItemEditScreen";
import TermsScreen from "./screen/TermsScreen";
import PrivacyScreen from "./screen/PrivacyScreen";
import CommunityJoinScreen from "./screen/CommunityJoinScreen";
import SelectPostingCategoryScreen from "./screen/SelectPostingCategoryScreen";
import MyCommunityScreen from "./screen/MyCommunityScreen";
import ScrollToTop from "./components/ScrollToTop";
import MyEventScreen from "./screen/MyEventScreen";
import EventDetail from "./screen/EventDetailScreen";
import EventEditSignupScreen from "./screen/EventEditSignupScreen";
import EventReceiptScreen from "./screen/EventReceiptScreen";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <main></main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/explore/:itemType" element={<HomeScreen />}></Route>
          <Route path="/item/:itemId" element={<ItemScreen />}></Route>
          <Route
            path="/select-posting-category"
            element={<SelectPostingCategoryScreen />}
          ></Route>
          <Route path="/post/:type" element={<ItemUploadScreen />}></Route>
          <Route path="/edit/:itemId" element={<ItemEditScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
          <Route path="/wishlist" element={<SavedScreen />}></Route>
          <Route
            path="/event/signup/:eventId"
            element={<EventSignupScreen />}
          ></Route>
          <Route
            path="/event/create-signup/:eventId"
            element={<CreateSignupScreen />}
          ></Route>
          <Route
            path="/event/edit-signup/:eventId"
            element={<EventEditSignupScreen />}
          ></Route>
          <Route
            path="/event/manage/:eventId"
            element={<EventManageScreen />}
          ></Route>
          <Route path="/event/receipt" element={<EventReceiptScreen />}></Route>
          <Route path="/mypage" element={<MyPageScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route
            path="/community/:communityId"
            element={<CommunityScreen />}
          ></Route>
          <Route
            path="/community/join"
            element={<CommunityJoinScreen />}
          ></Route>
          <Route
            path="/community/my-communities"
            element={<MyCommunityScreen />}
          ></Route>
          <Route path="/my-events" element={<MyEventScreen />}></Route>
          <Route
            path="/event-history/eventId"
            element={<EventDetail />}
          ></Route>
          <Route
            path="/hosting-history/eventId"
            element={<EventDetail host />}
          ></Route>
          <Route path="/purchase-history" element={<HistoryScreen />}></Route>
          <Route path="/sale-history" element={<HistoryScreen sell />}></Route>
          <Route
            path="/payment-method"
            element={<PaymentMethodScreen />}
          ></Route>
          <Route path="/order/orderId" element={<OrderDetailScreen />}></Route>
          <Route path="/terms" element={<TermsScreen />}></Route>
          <Route path="/privacy" element={<PrivacyScreen />}></Route>
          <Route path="*" element={<NoMatchScreen />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
