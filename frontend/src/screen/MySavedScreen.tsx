import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectWishlistLikes } from "../features/user/userWishlistSlice";
import { selectUser } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { ItemBrief } from "../interface/itemInterface";
import { selectUserProfile } from "../features/user/userProfileSlice";
import { KnownError } from "../interface/exceptionInterface";

function SavedScreen() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<{ item: ItemBrief }>>();
  const user = useAppSelector(selectUser);
  const profile = useAppSelector(selectUserProfile);
  const wishlist = useAppSelector(selectWishlistLikes);
  const dispatch = useAppDispatch();

  const getWishlistItems = async () => {
    const token = user?.token;
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.get(
        "/api/items/get-wishlist-items/",
        config
      );
      setItems(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const response = error.response.data as KnownError;
          toast.error(response.error.details.detail);
        }
      }
    }
  };

  useEffect(() => {
    if (!user) navigate("/login");
    else getWishlistItems();
  }, [user, navigate]);
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>

      <div className="md:hidden sticky top-0 bg-white z-50 relative">
        <div className="absolute left-6 top-3">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        </div>
        <h3 className="font-bold border-b text-center py-2 mx-20">Wishlist</h3>
      </div>

      {/* Mobile */}
      <div className="md:hidden min-h-screen">
        {items?.map((item, i) => (
          <div key={i} className="card w-full my-10">
            <figure>
              <img
                src={item.item.images[0].image}
                alt="Saved"
                className="mask mask-hexagon"
              />
            </figure>
            <div className="card-body">
              <div>
                <h1 className="text-2xl font-bold">{item.item.heading}</h1>
                <p>{item.item.sub_heading}</p>
                <div className="badge badge-alert badge-sm mb-6">
                  {item.item.price === 0 ? `$${item.item.price}` : "Free"}
                </div>
                <button className="btn btn-primary btn-block">
                  {item.item.type === "event" ? "Join" : "Chat & Buy"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet or bigger */}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 md:mx-3 hidden md:block min-h-screen">
        <div className="grid grid-cols-3 min-h-screen my-5">
          <div className="col-span-1 mr-6 border-r border-gray-300">
            <div className="sticky top-1/3 z-50">
              <div className="flex flex-col justify-center">
                <div>
                  <Link to="/profile">
                    <div className="avatar flex items-center">
                      <div className="w-32 rounded-full mx-auto">
                        <img src={profile.profile_image} alt="img" />
                      </div>
                    </div>
                  </Link>
                  <div className="text-center mt-5">
                    <h1 className="font-bold">{profile.nickname}'s Wishlist</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {items?.map((item, i) => (
              <div key={i} className="hero min-h-content">
                <div
                  className={`hero-content flex-col ${
                    i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <img
                    src={item.item.images[0].image}
                    className="mask mask-hexagon min-w-xs max-w-xs rounded-lg shadow-2xl"
                    alt="img"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">{item.item.heading}</h1>
                    <div className="pb-6">
                      <p className="py-6 inline mr-2">
                        {item.item.sub_heading}
                      </p>
                      <div className="badge badge-sm badge-alert">
                        {item.item.price === 0 ? `$${item.item.price}` : "Free"}
                      </div>
                    </div>
                    <Link to="/message/chatId">
                      <button className="btn btn-primary btn-block">
                        {item.item.type === "event" ? "Join" : "Chat & Buy"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer active="likes" />
    </>
  );
}

export default SavedScreen;
