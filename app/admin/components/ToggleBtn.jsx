"use client";
import { toggleLeftMenuState } from "@/toolkit/slice";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function ToggleBtn() {
  const dispatch = useDispatch();
  const toggleMenuValue =  useSelector(state => state.isToggleLeftMenu);
  console.log(toggleMenuValue)
  return (
    <button onClick={() => dispatch(toggleLeftMenuState(!toggleMenuValue))} className=" lg:hidden block">
      <div
        // onClick={() => setOpenLeftMenu(!openLeftMenu)}
        className={` bg-[#f4c720] flex items-center gap-1 mb-2 w-fit transition-all duration-300 hover:text-white text-black px-1.5 hover:bg-black rounded text-lg lg:text-2xl py-1.5 cursor-pointer`}
      >
        <MdKeyboardArrowLeft />
      </div>
    </button>
  );
}

export default ToggleBtn;
