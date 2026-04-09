"use client";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

function Cards({ version, icon, startBtnText, role, paragraph, link }) {
  return (
    <div className=" transition duration-200 customShadow cursor-default transform hover:-translate-y-5 md:px-4 px-2 lg:px-6 border border-[#0d0d0d] relative md:py-6 py-4 lg:py-8 rounded-lg bg-[#0d0d0d]">
      <div className="  absolute top-0 left-0 w-full h-[1px] registerCardsBorder"></div>
      <span className=" md:text-4xl text-3xl lg:text-5xl">{icon}</span>
      <h3 className="mt-1.5 lg:mt-3 text-white text-[17px] lg:text-[20px] uppercase font-semibold">
        {version}
        {/* <span className="text-[20px] lg:text-[24px]">S</span>tudio{" "}
        <span className="text-[20px] lg:text-[24px]">v</span>ersion */}
      </h3>
      <p className="text-[13px] tracking-wide lg:text-[13.5px] font-medium text-[#f4c720] mt-1 font-poppins">
        {role}
      </p>
      <p className="text-[#b3b3b3] text-[14px] font-medium md:mt-4 mt-2 lg:mt-6 font-poppins">
        {paragraph}
      </p>
      <div className=" md:mt-4 lg:text-[14px] mt-2 font-poppins text-black lg:mt-6">
        <Link href={link}>
          <button className="customShadow cursor-pointer uppercase font-semibold bg-yellow px-3 py-2.5 w-full rounded-lg">
            {startBtnText}
          </button>
        </Link>
        <button className="mt-4 text-[#b3b3b3] transition duration-200 justify-center cursor-pointer hover:bg-[#f4c62027] border-[#f4c62085] hover:text-yellow flex items-center gap-2 font-semibold bg-transparent border border-[#ffffff12] px-3 py-2.5 w-full rounded-lg">
          <div className="text-[8px] bg-[#f4c7201a] text-yellow px-1.5 py-1.5 border border-[#f4c72040] rounded-full">
            <FaPlay />
          </div>
          Watch how it works
        </button>
      </div>
    </div>
  );
}

export default Cards;
