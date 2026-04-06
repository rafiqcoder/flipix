import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "../common/Heading";
import { IoSearch } from "react-icons/io5";
import HomePageSlider from "./HomePageSlider";
import Creator from "./Creator";
import { FaWhatsapp } from "react-icons/fa";
import { FaWandMagic } from "react-icons/fa6";
import demoCollection from "@/public/images/demoCollection.webp";
function MainPage() {
  return (
    <div className=" h-full w-full max-w-[1400px] mx-auto">
      <div className="w-full h-full md:pb-8 pb-6 lg:pb-12">
        <div className=" max-w-[300px] md:max-w-[350px] mx-auto bg-[#ffffff0d] border border-[#ffffff1a] rounded-3xl px-5 py-4 overflow-hidden">
          <Image
            className=" rounded-3xl "
            src={demoCollection}
            alt="img"
            width={420}
            height={400}
          />
          <p className="font-bold flex cursor-pointer items-center justify-center py-3 gap-1 pt-4 md:text-[17px] text-[16px] lg:text-[18px] text-[#f4c720]">
            Click & Feel Demo <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="  md:mt-4 mt-3 lg:mt-6  mx-auto">
        <div className=" flex lg:flex-row flex-col lg:items-center justify-between ">
          <div className="border-l-4 border-[#f4c720] px-2 py-2">
            <Heading>Our Printing Partners</Heading>
            <p className="text-[#888] text-[16px] font-medium mt-2">
              Get high-quality physical albums from our verified labs
            </p>
          </div>
          <div className="px-3 md:px-2.5 lg:mt-0 mt-3 py-2 md:py-1.5 flex lg:w-[150px] items-center gap-2 text-gray-text rounded-full bg-gray-bg border border-border-color">
            <IoSearch className="text-lg lg:text-[22px] cursor-pointer" />
            <input
              className="text-[13px] outline-none h-full w-full lg:text-[14px]  font-medium"
              type="text"
              placeholder="Search labs..."
            />
          </div>
        </div>
        <div className=" md:py-8 h-auto sm:py-6 py-4 lg:py-12">
          <HomePageSlider />
        </div>
      </div>
      <Creator />
      <div className=" fixed md:right-6 right-4 lg:right-8 md:bottom-24 bottom-7 lg:bottom-26">
        <div className=" md:px-3 px-2 lg:px-4 md:py-3 py-2 lg:py-4 md:text-2xl text-xl lg:text-3xl font-medium rounded-full bg-[#f4c720] searchIconShadow text-black cursor-pointer gifShadow">
          <IoSearch />
        </div>
        <div className="mt-4 transition duration-300 flex items-center justify-center md:px-1.5 px-1 lg:px-2 mx-auto w-fit md:py-1 py-1 lg:py-1.5 text-white md:text-2xl text-xl hover:scale-105 lg:text-3xl font-medium rounded-lg bg-[#f4c720] text-black cursor-pointer">
          <FaWhatsapp />
        </div>
      </div>
      <div className="px-1.5 gifShadow cursor-pointer text-lg lg:text-[22px] z-30 py-1.5 fixed border transition duration-300 rounded-full border-[#f4c720] hover:bg-[#f4c720] hover:text-black md:left-6 left-4 text-[#f4c720] lg:left-8 md:bottom-8 bottom-5 lg:bottom-10">
        <FaWandMagic />
      </div>
    </div>
  );
}

export default MainPage;
