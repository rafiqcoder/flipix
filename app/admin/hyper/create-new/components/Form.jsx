"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import uploadImage from "@/public/images/upload.png";
import Image from "next/image";
import Button from "@/components/common/Button";
import axios from "axios";
function Form() {
  // studio event types
  const eventTypes = [
    "Wedding",
    "Engagement",
    "Anniversary",
    "Reception",
    "Nikah",
    "Upnayan",
    "Rice Ceremony",
    "Baby Shower",
    "Haldi",
    "Mehnedi",
    "Chatti",
    "Aqiqah",
    "Grih Parvesh",
    "Puja",
    "Birthday",
    "Smritishesh",
    "Tour Book",
    "Opening Ceremony",
    "Farewell",
  ];
  // music text's
  const lyrics = [
    "I feel the rhythm in my soul",
    "Music takes me where I want to go",
    "Every beat tells a story untold",
    "Let the melody take control",
  ];
  // range value
  const [rangeValue, setRangeValue] = useState(0);

  // form data states
  const [formData, setFormData] = useState({
    jobNo: 0,
    clientName: "",
    functionType: "",
    functionDate: "",
    dealerName: "",
    dealerNum: "",
    photographerStudio: "",
    photographerNum: "",
    selectedSong: "",
  });
  // form submit func
  const formSubmitFunc = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => formSubmitFunc(e)} className=" w-full mt-4 lg:mt-6">
      {/* FRONT COVER */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:px-3 px-2 lg:px-5 py-2 md:py-3 gap-3">
        {/* left */}
        <div className=" md:col-span-2 w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <div className="">
            <div className=" space-y-3">
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Job No <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, jobNo: e.target.value })
                  }
                  value={formData.jobNo}
                  required
                  type="number"
                  placeholder="Create your own job number"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>

              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Client's Name{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, clientName: e.target.value })
                  }
                  value={formData.clientName}
                  required
                  type="text"
                  placeholder="eg. Raja weds Rani"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
              <div className="relative ">
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Function <span className=" rounded-full text-yellow">*</span>
                </label>
                <select
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      functionType: e.target.value,
                    })
                  }
                  className="bg-[#111] appearance-none focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                >
                  {eventTypes.map((event, idx) => {
                    return (
                      idx < 50 && (
                        <option key={idx} value={event}>
                          {event}
                        </option>
                      )
                    );
                  })}
                </select>

                <IoMdArrowDropdown className="w-5 h-5 absolute right-3 top-[65%] -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Function Date{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, functionDate: e.target.value })
                  }
                  value={formData.functionDate}
                  required
                  type="date"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" md:col-span-1 border border-border-color h-full w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <label
            htmlFor="uploadFile"
            className=" relative  flex items-center justify-center cursor-pointer"
          >
            <Image
              src={uploadImage}
              alt="upload photo"
              height={180}
              width={180}
              className=""
            />
            <input
              type="file"
              className=" opacity-0 cursor-pointer absolute w-full h-full"
            />
          </label>
          <div>
            <p className=" text-center text-gray-text text-[15px] font-medium">
              Drag and Drop or Click here
            </p>
            <h3 className="text-[20px] mt-2 font-semibold text-white text-center uppercase">
              Front Cover
            </h3>
            <p className="text-[15px] font-medium text-center mt-2 text-gray-text md:mt-4 lg:mt-6">
              Upload any images from desktop
            </p>
          </div>
        </div>
      </div>
      {/* BACK COVER */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:px-3 px-2 lg:px-5 py-2 md:py-3 gap-3">
        {/* left */}
        <div className=" md:col-span-1 border border-border-color h-full w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <label
            htmlFor="uploadFile"
            className=" relative  flex items-center justify-center cursor-pointer"
          >
            <Image
              src={uploadImage}
              alt="upload photo"
              height={180}
              width={180}
              className=""
            />
            <input
              onChange={(e) => console.log(e.target.value)}
              type="file"
              className=" opacity-0 cursor-pointer absolute w-full h-full"
            />
          </label>
          <div>
            <p className=" text-center text-gray-text text-[15px] font-medium">
              Drag and Drop or Click here
            </p>
            <h3 className="text-[20px] mt-2 font-semibold text-white text-center uppercase">
              Back Cover
            </h3>
            <p className="text-[15px] font-medium text-center mt-2 text-gray-text md:mt-4 lg:mt-6">
              Upload any images from desktop
            </p>
          </div>
        </div>
        {/* right */}
        <div className=" md:col-span-2 w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <div>
            <div className=" space-y-3">
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Dealer/Agent Name{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, dealerName: e.target.value })
                  }
                  value={formData.dealerName}
                  required
                  type="text"
                  placeholder="Dealer/Agent Name"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Dealer/Agent Mobile{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, dealerNum: e.target.value })
                  }
                  value={formData.dealerNum}
                  required
                  type="tel"
                  placeholder="Dealer/Agent Mobile"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Photographer Studio{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      photographerStudio: e.target.value,
                    })
                  }
                  value={formData.photographerStudio}
                  required
                  type="text"
                  placeholder="Photographer Studio"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Photographer Mobile{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      photographerNum: e.target.value,
                    })
                  }
                  value={formData.photographerNum}
                  required
                  type="tel"
                  placeholder="Photographer Mobile"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INNER SHEETS */}
      <div className=" w-full w-full md:px-3 px-2 lg:px-5 py-2 md:py-3">
        <div className=" md:col-span-1 border border-border-color h-full w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <label
            htmlFor="uploadFile"
            className=" relative  flex items-center justify-center cursor-pointer"
          >
            <Image
              src={uploadImage}
              alt="upload photo"
              height={180}
              width={180}
              className=""
            />
            <input
              type="file"
              className=" opacity-0 cursor-pointer absolute w-full h-full"
            />
          </label>
          <div>
            <p className=" text-center text-gray-text text-[15px] font-medium">
              Drag and Drop or Click here
            </p>
            <h3 className="text-[20px] mt-2 font-semibold text-white text-center uppercase">
              Inner Sheets
            </h3>
            <p className="text-[15px] font-medium text-center mt-2 text-gray-text md:mt-4 lg:mt-6">
              Upload any images from desktop
            </p>
          </div>
        </div>
      </div>
      {/* MUSIC SECTION */}
      <div className=" w-full w-full md:px-3 px-2 lg:px-5 py-2 md:py-3">
        <div className="w-auto bg-[#20201f79] rounded-md px-5 py-3">
          <h3 className=" md:text-[18px] text-[16px] lg:text-[20px] mt-2 tracking-widest font-semibold text-white text-center uppercase">
            Flipix Music Selector{" "}
          </h3>{" "}
          <div className=" flex lg:flex-row flex-col items-center justify-between gap-3 mt-3">
            <div className=" flex md:flex-row flex-col items-center gap-3">
              <input
                // onChange={(e) =>
                //   setFormData({ ...formData, ownerName: e.target.value })
                // }
                // value={formData.ownerName}
                type="text"
                placeholder="Search for a song..."
                className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none"
              />
              <Button
                className={
                  "border-2 cursor-pointer py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
                }
              >
                Upload Song
              </Button>
            </div>
            <div className=" flex gap-4 items-center">
              <label className="text-sm flex gap-2 text-[#b3b3b3]">
                Volume <span className=" rounded-full text-yellow">*</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
                className="
          w-full 
          h-2 
          rounded-lg 
          appearance-none 
          cursor-pointer
          bg-gradient-to-r from-blue-500 to-purple-500

          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-blue-500
          [&::-webkit-slider-thumb]:shadow-lg
          [&::-webkit-slider-thumb]:hover:scale-110

          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-white
        "
              />{" "}
              <span className=" font-medium text-gray-text text-[13px]">
                100:
              </span>
              <span className=" font-medium text-gray-text text-[13px]">
                {rangeValue}
              </span>
            </div>
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>
          <div className=" grid-cols-1 md:grid-cols-2 mt-4 grid gap-3 items-center justify-between">
            {lyrics.map((text) => {
              return (
                <div
                  key={text}
                  className="bg-[#111] transition duration-300 cursor-pointer hover:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide py-3 border border-[#ffffff12] hover:border-[#f0a500] outline-none"
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" w-full text-center md:py-8 py-4 lg:py-12">
        <Button
          className={
            "border-2 cursor-pointer py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
          }
        >
          Submit
        </Button>{" "}
      </div>
    </form>
  );
}

export default Form;
