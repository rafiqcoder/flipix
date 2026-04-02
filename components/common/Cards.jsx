import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

function Card({ img, location, name, pro, className, link }) {
  return (
    <div className="h-full w-full">
      {/* {
       <div className="px-1 py-1.5 w-full ml-5 flex items-center justify-end"><div className="px-2 border border-[#f4c7204d] bg-[#f4c72026] py-1 text-yellow uppercase text-[11px] flex items-center gap-1 font-medium rounded-md"><BsFillStarFill/><span>Pro</span></div></div>
      } */}
      {pro}
      <div
        className={cn(
          "h-[67%] overflow-hidden w-full relative carouselCardImg",
          className,
        )}
      >
        <div className={cn(`p-2 h-full w-full bg-white rounded-xl `)}>
          <Image
            className=" mx-auto object-contain bg-no-repeat h-full w-full"
            src={img}
            alt="Card image"
            width={100}
            height={300}
          />
        </div>
      </div>
      <div className="py-3 text-center">
        {/* <h3 className="text-[13px] md:text-[14px] text-[#ddd] font-semibold line-clamp-1">
          Studio Batra dfa dafdfaf dfafdasf
        </h3> */}
        {/* <p className=" uppercase text-[11px] text-[#666] py-1 font-light">
          Meerut
        </p> */}
        {name}
        {location}
      </div>
      <Link
      target="_blank"
        href={link}
        className="cardsChatBox absolute z-10 flex items-center justify-center flex-col top-0 left-0 bg-[#000000de]"
      >
        <p className="text-lg font-medium text-white text-center w-full">{}</p>
        <div className="px-4 mt-1 transition duration-300 hover:opacity-100 opacity-90 text-[14px] py-1 flex gap-1 items-center bg-[#25d366] w-fit text-white rounded-full">
          <FaWhatsapp />
          <p>Chat</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
