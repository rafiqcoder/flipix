"use client";
import React, { useState } from "react";
import Navber from "./Navber";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../common/Button";

function ToggleNav() {
  const [openToggle, setOpenToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div>
      <nav
        className={` transition duration-300 transform ${openToggle ? "translate-x-0" : "translate-x-[100%] lg:translate-x-0"} font-poppins lg:px-0 lg:py-0 px-4 py-12 flex lg:flex-row flex-col items-center gap-3 lg:gap-4 fixed lg:static top-0 left-0 lg:w-auto w-full lg:h-auto h-full bg-black`}
      >
        <div
          onClick={() => setOpenToggle(false)}
          className=" lg:hidden absolute top-5 right-5 text-2xl text-white z-30"
        >
          <IoClose />
        </div>
        <div className="text-white uppercase flex lg:flex-row flex-col items-center gap-3 ">
          <Link
            onClick={() => setOpenToggle(false)}
            href={"/"}
            className="nav-link"
          >
            Home
          </Link>
          <div
            onMouseOver={() => setDropDown(true)}
            className="flex relative nav-link items-center cursor-default"
          >
            <p className="">More Info</p>
            <div>
              <TiArrowSortedDown className="text-xl" />
            </div>
            <div
              onMouseLeave={() => setDropDown(false)}
              className={`${dropDown ? "block" : "hidden"} absolute w-50 text-[#b3b3b3] bg-[#1a1a1a] border-t-2 font-medium border-[#f4c720] text-[14px] capitalize top-[120%] left-0`}
            >
              <div
                onClick={() => setOpenToggle(false)}
                className="border-b cursor-pointer transition duration-200 border-[#333] px-3 py-2.5 hover:text-[#f4c720] hover:bg-[#3b3b3b93]"
              >
                <Link href={"/about"}>About Us</Link>
              </div>
              <div
                onClick={() => setOpenToggle(false)}
                className="border-b cursor-pointer transition duration-200 border-[#333] px-3 py-2.5 hover:text-[#f4c720] hover:bg-[#3b3b3b93]"
              >
                <Link href={"/condition"}>Tearms & Conditions</Link>
              </div>
              <div
                onClick={() => setOpenToggle(false)}
                className="border-b cursor-pointer transition duration-200 border-[#333] px-3 py-2.5 hover:text-[#f4c720] hover:bg-[#3b3b3b93]"
              >
                <Link href={"/hyper-guideline"}>Hyper Guidelines</Link>
              </div>
              <div
                onClick={() => setOpenToggle(false)}
                className="border-b cursor-pointer transition duration-200 border-[#333] px-3 py-2.5 hover:text-[#f4c720] hover:bg-[#3b3b3b93]"
              >
                <Link href={"/refund"}>Refund/Cancel Policy</Link>
              </div>
              <div
                onClick={() => setOpenToggle(false)}
                className="border-b cursor-pointer transition duration-200 border-[#333] px-3 py-2.5 hover:text-[#f4c720] hover:bg-[#3b3b3b93]"
              >
                <Link href={"/privacy"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
          <Link
            onClick={() => setOpenToggle(false)}
            href={"/contact"}
            className="nav-link"
          >
            Contact
          </Link>

          <Link
            onClick={() => setOpenToggle(false)}
            href={"/price"}
            className="nav-link"
          >
            Price
          </Link>
          <Link
            onClick={() => setOpenToggle(false)}
            href={"/"}
            className="nav-link"
          >
            Faq
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:gap-6 lg:flex-row flex-col">
          <Link onClick={() => setOpenToggle(false)} href={"/register"}>
            <Button
              className={
                "border-2 text-[#f4c720] transition duration-200 cursor-pointer border-[#f4c720] hover:bg-[#f4c720] hover:text-black"
              }
            >
              Join Flipix
            </Button>
          </Link>
          <Link onClick={() => setOpenToggle(false)} href={"/login"}>
            <Button
              className={
                "border-2 cursor-pointer bg-[#f4c720] border-2 border-[#f4c720] text-black"
              }
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>
      <div
        onClick={() => setOpenToggle(true)}

        className="text-2xl cursor-pointer font-medium text-white lg:hidden block"
      >
        <IoMenu />
      </div>
    </div>
  );
}

export default ToggleNav;
