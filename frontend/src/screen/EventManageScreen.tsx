import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DownloadTableExcel } from "react-export-table-to-excel";

import { useAppDispatch, useAppSelector } from "../app/hook";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  getGuestDetails,
  resetEventManageStatus,
  selectEventManage,
} from "../features/event/eventManageSlice";
import { selectItem } from "../features/item/itemSlice";
import { Guests } from "../interface/eventInterface";
import { HashLoader } from "react-spinners";

function EventManageScreen() {
  const tableRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [stats, setStats] = useState<Array<Guests>>([]);
  const sessionItem = useAppSelector(selectItem);
  const { guestDetails, status, error } = useAppSelector(selectEventManage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (copySuccess === true) toast.success("Invitation copied.");
  }, [copySuccess]);

  useEffect(() => {
    if (!params.eventId || params.eventId !== sessionItem._id) {
      toast.error("Sesseion expired, try again.");
      navigate(`/edit/${params.eventId}`);
    } else {
      dispatch(getGuestDetails(params.eventId));
    }
  }, [params, dispatch, navigate, getGuestDetails]);

  useEffect(() => {
    if (status === "failed") {
      toast.error(error);
      dispatch(resetEventManageStatus());
    } else if (status === "succeeded") {
      const parsedDetails: Array<Guests> = [];
      guestDetails.forEach((guestDetail) => {
        const parsedDetail = JSON.parse(guestDetail.details);
        parsedDetails.push(parsedDetail);
      });
      setStats(parsedDetails);
      console.log(parsedDetails);
    }
  }, [status, error]);

  const handleSendInvitation = async () => {
    await navigator.clipboard.writeText("Link");
    setCopySuccess(true);
  };

  const handleMessageAll = () => {
    console.log("Message All");
  };

  const handleDownloadCell = () => {
    console.log("Download Member Details");
  };
  if (status === "succeeded" && stats !== []) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
          <div className="my-5 min-h-content">
            <div>
              <div
                className="hero max-h-96 rounded-2xl"
                style={{
                  backgroundImage: `url(
                  ${sessionItem.images[0].image}
                  )`,
                }}
              >
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-secondary font-bold">
                      {sessionItem.heading}
                    </h1>
                    <p className="mb-5 text-secondary">
                      {sessionItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex flex-wrap sm:grid sm:grid-cols-3 sm:w-full">
                <div className="px-3 w-full my-1">
                  <button
                    className="btn btn-block btn-outline rounded-none"
                    onClick={handleSendInvitation}
                  >
                    Send Invitation
                  </button>
                </div>
                <div className="px-3 w-full my-1">
                  <button
                    className="btn btn-block btn-outline rounded-none"
                    onClick={handleMessageAll}
                  >
                    Send a message to all members
                  </button>
                </div>
                <div className="px-3 w-full my-1">
                  <DownloadTableExcel
                    filename="guest_details"
                    sheet="users"
                    currentTableRef={tableRef.current}
                  >
                    <button className="btn btn-block btn-outline rounded-none">
                      Download Excel File
                    </button>
                  </DownloadTableExcel>
                </div>
              </div>
            </div>
            <div className="my-5">
              <h1 className="text-center font-bold text-5xl my-2">
                Statistics
              </h1>
              <div className="flex flex-wrap">
                <div className="stats shadow mx-3 my-3 w-full sm:max-w-fit">
                  <div className="stat">
                    <div className="stat-title">Total Members Joined</div>
                    <div className="stat-value">{stats.length}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <h1 className="text-center font-bold text-5xl my-2">
                Member Joined
              </h1>
              <div className="overflow-x-auto overflow-y-auto vh80">
                <DownloadTableExcel
                  filename="guest_details"
                  sheet="users"
                  currentTableRef={tableRef.current}
                >
                  <button className="btn btn-sm btn-secondary my-1">
                    Download Excel File
                  </button>
                </DownloadTableExcel>
                <table className="table table-compact w-full" ref={tableRef}>
                  <thead>
                    <tr>
                      <th></th>
                      {stats &&
                        Object.keys({ ...stats[0] }).map((label, i) => (
                          <th key={i}>{label}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stats &&
                      stats.map((stat, i) => {
                        return (
                          <tr key={i}>
                            <th>{i}</th>
                            {stat &&
                              Object.values({ ...stat }).map((value, j) => (
                                <th key={j}> {value} </th>
                              ))}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer active="mypage" />
      </div>
    );
  } else {
    return (
      <div className="h-screen flex justify-center items-center bg-base-content opacity-40 fixed top-0 right-0 left-0 z-100">
        <HashLoader color="#54bab9" size={40} />
      </div>
    );
  }
}

export default EventManageScreen;
