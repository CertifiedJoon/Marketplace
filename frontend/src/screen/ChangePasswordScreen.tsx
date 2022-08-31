import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import googleIcon from "../static/images/google.png";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  selectUser,
  selectUserStatus,
  selectUserError,
  signup,
  resetUserStatus,
  changePassword,
} from "../features/user/userSlice";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const changePasswordSchema = yup.object({
  currentPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(30, "Password must be at most 30 characters long.")
    .matches(
      /^[ A-Za-z0-9_@./#&+-]*$/,
      "Password must only include alphanumerics and special letters."
    )
    .required("Password is a required field."),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(30, "Password must be at most 30 characters long.")
    .matches(
      /^[ A-Za-z0-9_@./#&+-]*$/,
      "Password must only include alphanumerics and special letters."
    )
    .required("Password is a required field."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

function ChangePasswordScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector(selectUser);
  const userStatus = useAppSelector(selectUserStatus);
  const userError = useAppSelector(selectUserError);
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(changePasswordSchema),
  });

  useEffect(() => {
    if (!user) {
      navigate(redirect);
    }
  }, [user, redirect, navigate]);

  useEffect(() => {
    if (userStatus === "failed") {
      toast.error(userError);
      setLoading(false);
      dispatch(resetUserStatus());
    } else if (userStatus === "succeeded") {
      setLoading(false);
      toast.success("Password changed.");
      dispatch(resetUserStatus());
      navigate("/profile");
    }
  }, [userStatus, dispatch, navigate]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    dispatch(
      changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      })
    );
  };

  return (
    <div className="relative">
      {loading && (
        <div className="h-screen flex justify-center items-center bg-base-content opacity-40 fixed top-0 right-0 left-0 z-100">
          <GridLoader color="#54bab9" size={30} />
        </div>
      )}
      <div className="lg:mx-auto lg:w-1/2 xl:w-1/3">
        <div className="grid grid-rows-6 justify-items-stretch">
          <div></div>
          <div className="text-center my-auto min-h-content">
            <h1 className="text-3xl text-primary">Welcome to Marketplace!</h1>
            <h3 className="text-gray-500">
              A community based second-hand market.
            </h3>
          </div>
          <div className="row-span-2 text-center my-auto min-h-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="input input-bordered input-accent input-md rounded-none rounded-t-xl w-2/3 focus:outline-none"
                  {...register("currentPassword", { required: true })}
                />
                <p className="text-error text-xs">
                  {errors.currentPassword?.message}
                </p>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="New Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-none w-2/3 focus:outline-none"
                  {...register("newPassword", { required: true })}
                />
                <p className="text-error text-xs">
                  {errors.newPassword?.message}
                </p>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered border-t-0 input-accent input-md rounded-b-xl rounded-t-none w-2/3 focus:outline-none"
                  {...register("confirmPassword", { required: true })}
                />
                <p className="text-error text-xs">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <div className="text-center mt-1">
                <button
                  type="submit"
                  className="btn w-2/3 btn-block btn-sm btn-accent"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
          <div className="text-center my-auto text-gray-500 underline min-h-content">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordScreen;
