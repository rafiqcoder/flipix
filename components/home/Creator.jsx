import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";
import bannerGif from "@/public/images/banner.gif";
import Link from "next/link";
function Creator() {
  return (
    <div className="md:py-5 py-4 lg:py-7 w-full">
      <div className="text-center">
        <Heading>Join Creator Program</Heading>
        <p className="text-[14px] md:text-[15px] font-medium text-[#888] mt-1 md:mt-2">
          Monetize your photography with FlipiX
        </p>
      </div>
      <div className="mt-5 w-fit mx-auto gifShadow">
        <Link href={"/creator"} >
          <Image src={bannerGif} alt="bannerGif" className="mx-auto" width={1000} height={""} />
        </Link>
      </div>
    </div>
  );
}

export default Creator;
