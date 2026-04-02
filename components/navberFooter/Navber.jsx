import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.webp";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "../common/Button";
import { IoMenu } from "react-icons/io5";

function Navber() {
  return (
    <div className="">
      <div className="h-20"></div>
      <div className="w-full border-b border-[#ffffff1a] fixed top-0 z-40 left-0">
        <div className="bg-[#000000]  flex items-center justify-between lg:px-8 md:px-6 px-3 sm:px-4 xl:px-14 py-5">
          <div className="flex items-center md:gap-2 gap-1 lg:gap-3">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
            <p className="font-styleScript font-light text-[18px] md:text-[20px] lg:text-[23px] text-[#f4c720]">
              Feeling Wali Flipbook
            </p>
          </div>
          <nav className="font-poppins flex items-center gap-3 lg:gap-4">
            <div className="text-white uppercase lg:flex items-center gap-3 lg:block hidden">
              <Link href={"/"} className="nav-link">
                Home
              </Link>
              <div className="flex nav-link items-center cursor-default">
                <p className="">More Info</p>
                <div>
                  <TiArrowSortedDown className="text-xl" />
                </div>
              </div>
              <Link href={"/contact"} className="nav-link">
                Contact
              </Link>

              <Link href={"/price"} className="nav-link">
                Price
              </Link>
              <Link href={"/"} className="nav-link">
                Faq
              </Link>
            </div>
            <div className="lg:flex items-center gap-3 lg:gap-6 lg:block hidden">
              <Link href={"/register"}>
                <Button
                  className={
                    "border-2 text-[#f4c720] transition duration-200 cursor-pointer border-[#f4c720] hover:bg-[#f4c720] hover:text-black"
                  }
                >
                  Join Flipix
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button
                  className={
                    "border-2 cursor-pointer bg-[#f4c720] border-2 border-[#f4c720] text-black"
                  }
                >
                  Login
                </Button>
              </Link>
            </div>
            <div className="text-2xl text-white lg:hidden block">
              <IoMenu/>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navber;
