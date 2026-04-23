import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.webp";
import Link from "next/link";
import ToggleNav from "./ToggleNav";
function Navber() {
  return (
    <div className="">
      <div className="h-20"></div>
      <div className="w-full border-b bg-[#000000] border-[#ffffff1a] fixed top-0 z-40 left-0">
        <div className=" max-w-[1700px] mx-auto flex items-center justify-between lg:px-8 md:px-6 px-3 sm:px-4 xl:px-14 py-5">
          <div className="flex items-center md:gap-2 gap-1 lg:gap-3">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
            <p className="font-styleScript font-light text-[18px] md:text-[20px] lg:text-[23px] text-[#f4c720]">
              Feeling Wali Flipbook
            </p>
          </div>
          <ToggleNav />
        </div>
      </div>
    </div>
  );
}
export default Navber;
