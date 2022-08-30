import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectItem } from "../features/item/itemSlice";
import {
  resetEventGuest,
  resetEventGuestStatus,
  selectEventGuestDetails,
  selectEventGuestStatus,
} from "../features/event/eventGuestSlice";
import { FaSave, FaShare } from "react-icons/fa";
import { toast } from "react-toastify";
import { QRCodeCanvas } from "qrcode.react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function EventReceiptScreen() {
  const guestDetails = JSON.parse(
    JSON.parse(useAppSelector(selectEventGuestDetails).details)
  );
  const guestStatus = useAppSelector(selectEventGuestStatus);
  const event = useAppSelector(selectItem);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  const handleSavePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (!event || event.type !== "event" || !guestDetails) {
      toast.error("Session Expired");
      navigate("/");
    }
  }, [event, guestDetails, navigate]);

  return (
    <>
      <div className="min-h-screen relative">
        <div className="sticky top-0 hidden md:block">
          <Header />
        </div>

        <div className="md:hidden sticky top-0 bg-white z-50 relative">
          <h3 className="font-bold border-b text-center py-2 mx-20">
            Event Ticket
          </h3>
          <div className="absolute right-6 top-2">
            <button onClick={handleSavePDF}>
              <div className="flex items-center">
                <FaSave />
                &nbsp;<p className="font-bold">Save PDF</p>
              </div>
            </button>
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
          <div className="grid grid-cols-3 min-h-screen my-5">
            <div className="hidden md:block col-span-1 mr-6 border-r border-gray-300">
              <div className="sticky inset-1/2 z-50">
                <div className="flex flex-col justify-center">
                  <div>
                    <div className="text-center mt-5">
                      <h1 className="font-bold text-4xl">Event Ticket</h1>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn rounded btn-ghost text-xs"
                        onClick={handleSavePDF}
                      >
                        <FaShare
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0)",
                          }}
                        />
                        &nbsp;Save PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-3 md:col-span-2 flex flex-col md:justify-center my-2 items-center"
              ref={componentRef}
            >
              <div className="py-10 mb-4 flex flex-col">
                <div className="flex justify-center">
                  <div className="flex flex-col justify-center">
                    <div className="w-60 h-60 bg-base-200">
                      <QRCodeCanvas value="https://reactjs.org/" size={240} />
                    </div>
                    <p className="text-gray">
                      present this QR code at entrance
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-center">Event Details</h1>
                  <ul>
                    <li>
                      <strong>Event Name</strong> :{" "}
                      {event.heading + ": " + event.sub_heading}
                    </li>
                    <li>
                      <strong>Event Host</strong> : {event.user.nickname}
                    </li>
                    <li>
                      <strong>Ticket Price</strong> : {event.price}{" "}
                    </li>
                    {event.details.map((detail, i) => (
                      <li key={i}>
                        <strong>{detail.label}</strong> : {detail.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h1 className="font-bold text-center">Guest Details</h1>
                  <ul>
                    {Object.keys(guestDetails).map((k, i) => (
                      <li key={i}>
                        <strong>{k}</strong> : {guestDetails[k]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0">
          <Footer active="likes" />
        </div>
      </div>
    </>
  );
}

export default EventReceiptScreen;
