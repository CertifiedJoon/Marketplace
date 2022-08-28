import React, { useEffect, useState } from "react";
import { FaApple, FaAt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import { Link, useLocation, useNavigate } from "react-router-dom";

import googleIcon from "../static/images/google.png";
import {
  login,
  resetUserStatus,
  selectUserError,
  selectUserStatus,
} from "../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  getUserProfile,
  resetUserProfileStatus,
  selectUserProfileError,
  selectUserProfileStatus,
} from "../features/user/userProfileSlice";
import {
  getMemberships,
  resetMembershipStatus,
  selectMembershipError,
  selectMembershipStatus,
} from "../features/community/membershipSlice";
import {
  getWishlist,
  resetWishlistStatus,
  selectWishlist,
} from "../features/user/userWishlistSlice";

interface IFormInput {
  email: string;
  password: string;
}

function LoginScreen() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const userStatus = useAppSelector(selectUserStatus);
  const userError = useAppSelector(selectUserError);
  const userProfileStatus = useAppSelector(selectUserProfileStatus);
  const userProfileError = useAppSelector(selectUserProfileError);
  const membershipStatus = useAppSelector(selectMembershipStatus);
  const membershipError = useAppSelector(selectMembershipError);
  const { status: wishlistStatus, error: wishlistError } =
    useAppSelector(selectWishlist);
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(
    () => {
      if (
        userStatus === "succeeded" &&
        userProfileStatus === "succeeded" &&
        membershipStatus === "succeeded" &&
        wishlistStatus === "succeeded"
      ) {
        dispatch(resetUserStatus());
        dispatch(resetUserProfileStatus());
        dispatch(resetMembershipStatus());
        dispatch(resetWishlistStatus());
        setLoading(false);
        navigate(redirect);
      } else if (userStatus === "succeeded" && userProfileStatus === "idle") {
        dispatch(getUserProfile());
      } else if (userStatus === "succeeded" && membershipStatus === "idle") {
        dispatch(getMemberships());
      } else if (userStatus === "succeeded" && wishlistStatus === "idle") {
        dispatch(getWishlist());
      }

      if (userStatus === "failed") {
        toast.error(userError);
        dispatch(resetUserStatus());
        setLoading(false);
      }
      if (userProfileStatus === "failed") {
        toast.error(userProfileError);
        dispatch(resetUserProfileStatus());
        setLoading(false);
      }
      if (membershipStatus === "failed") {
        toast.error(membershipError);
        dispatch(resetMembershipStatus);
        setLoading(false);
      }
      if (wishlistError === "failed") {
        toast.error(wishlistError);
        dispatch(resetWishlistStatus());
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      userStatus,
      userProfileStatus,
      membershipStatus,
      wishlistStatus,
      dispatch,
      navigate,
      redirect,
    ]
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <div className="relative">
      {/* Tablet or bigger */}
      {loading && (
        <div className="h-screen flex justify-center items-center bg-base-content opacity-40 fixed top-0 right-0 left-0 z-100">
          <GridLoader color="#54bab9" size={30} />
        </div>
      )}
      <div className="hidden lg:block mx-auto w-1/3 ">
        <div className="min-h-screen grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="text-center min-h-content row-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered border-b-0 input-accent input-md rounded-t-xl rounded-b-none w-2/3 focus:outline-none"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
                  {...register("password", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="mt-2 btn w-2/3 btn-block btn-accent"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-500 mt-2">
              <span className="underline">
                <Link to="/reset-password">Can't Login</Link>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="text-center my-auto">
            <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
              <div className="grid grid-cols-4 justify-items-stretch items-center">
                <div className="col-span-1 justify-self-start">
                  <img src={googleIcon} alt="" className="w-6" />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Login with Google</p>
                </div>
              </div>
            </button>
            <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
              <div className="grid grid-cols-4 justify-items-stretch items-center text-white">
                <div className="col-span-1 text-xl justify-self-start">
                  <FaApple />
                </div>
                <div className="col-span-3 justify-self-end">
                  <p className="text-sm">Login with Apple ID</p>
                </div>
              </div>
            </button>
          </div>
          <div className="text-center my-auto text-gray-500 underline">
            <Link to="/">Continue without login</Link>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden min-h-screen grid grid-rows-6 justify-items-stretch">
        <div></div>
        <div className="text-center my-auto">
          <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
          <h3 className="text-gray-500">
            A community based second-hand market.
          </h3>
        </div>
        <div className="text-center mb-auto min-h-content">
          <button className="btn w-2/3 btn-block btn-outline btn-sm px-0">
            <div className="grid grid-cols-4 justify-items-stretch items-center">
              <div className="col-span-1 justify-self-start">
                <img src={googleIcon} alt="" className="w-6" />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Google</p>
              </div>
            </div>
          </button>
          <button className="btn w-2/3 btn-block btn-outline btn-sm bg-black">
            <div className="grid grid-cols-4 justify-items-stretch items-center text-white">
              <div className="col-span-1 text-xl justify-self-start">
                <FaApple />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Apple ID</p>
              </div>
            </div>
          </button>
          <button className="btn w-2/3 btn-block btn-outline btn-secondary btn-sm">
            <div className="grid grid-cols-4 justify-items-stretch items-center">
              <div className="col-span-1 text-xl justify-self-start">
                <FaAt />
              </div>
              <div className="col-span-3 justify-self-end">
                <p className="text-sm">Login with Email ID</p>
              </div>
            </div>
          </button>
        </div>
        <div className="text-center text-gray-300">
          <Link to="/reset-password">Can't login?</Link>
        </div>
        <div className="mx-auto">
          <Link to="/signup">
            <button className="btn glass">Sign Up</button>
          </Link>
        </div>
        <div className="text-center my-auto text-gray-500 underline">
          <Link to="/">Continue without login</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
