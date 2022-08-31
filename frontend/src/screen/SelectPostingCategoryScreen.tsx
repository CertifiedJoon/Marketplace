import React from "react";
import {
  FaBath,
  FaBook,
  FaCouch,
  FaDumbbell,
  FaGlassCheers,
  FaLaptop,
  FaPencilAlt,
  FaPlane,
  FaQuidditch,
  FaRegAddressBook,
  FaShoePrints,
  FaTshirt,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SelectPostingCategoryScreen() {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="absolute top-0 left-0 right-0">
          <Header sell />
        </div>
        <div className="min-h-screen mx-3 lg:mx-auto lg:w-1/2 xl:w-1/3 flex flex-col items-center justify-center">
          <h1 className="text-center md:font-bold mb-3">Select a Category</h1>
          <ul className="min-w-xs divide-y rounded-xl w-full">
            <li>
              <Link to="/post/note">
                <button className="btn btn-ghost rounded-xl rounded-b-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaRegAddressBook />
                    </figure>
                    <div className="card-body py-0 px-1">Note</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/book">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaBook />
                    </figure>
                    <div className="card-body py-0 px-1">Book</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/clothing">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaTshirt />
                    </figure>
                    <div className="card-body py-0 px-1">Clothing</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/shoes">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaShoePrints />
                    </figure>
                    <div className="card-body py-0 px-1">Shoes</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/fitness">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaDumbbell />
                    </figure>
                    <div className="card-body py-0 px-1">Fitness</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/ikia">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaCouch />
                    </figure>
                    <div className="card-body py-0 px-1">IKIA</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/travel">
                <button className="btn btn-ghost rounded-none w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaPlane />
                    </figure>
                    <div className="card-body py-0 px-1">Travel</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/electronics">
                <button className="btn btn-ghost rounded-t-none rounded-xl w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaLaptop />
                    </figure>
                    <div className="card-body py-0 px-1">Electronics</div>
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post/others">
                <button className="btn btn-ghost rounded-t-none rounded-xl w-full flex justify-center">
                  <div className="card card-side py-1">
                    <figure className="text-lg">
                      <FaQuidditch />
                    </figure>
                    <div className="card-body py-0 px-1">Others</div>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <Footer active="explore" />
        </div>
      </div>
    </>
  );
}

export default SelectPostingCategoryScreen;
