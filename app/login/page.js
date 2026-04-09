import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.webp";
import Form from "./Form";
import Link from "next/link";
function page() {
  return (
    <div className="h-[92vh] px-3 py-2 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        {/* left */}
        <div className="h- relative customBgLoginPage">
          <div className=" absolute w-full lg:w-[400px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="text-center">
              <h1 className=" md:text-2xl text-xl lg:text-3xl text-white font-bold uppercase">
                FLIPI<span className="text-[#f0a500]">X</span>
              </h1>
              <p className="text-[#555] md:tracking-[0.2em] tracking-[0.1em] lg:tracking-[0.3em] mt-2 uppercase text-[14px] font-normal">
                Feeling Wali Flipbook
              </p>
            </div>
            <h1 className="text-[22px] tracking-tigh uppercase md:mt-4 mt-3 lg:mt-5 font-normal text-white">
              Welcome Back
            </h1>
            <p className="text-[#b3b3b3] text-[15px] font-normal mt-1">
              Log in to your FlipiX account
            </p>

            {/* form */}
            <Form />
          </div>
        </div>

        {/* right */}
        <div className="customBg lg:block hidden h-full relative">
          <h1 className="z-20 relative md:text-4xl text-3xl text-center mt-12 tracking-widest lg:text-5xl text-white font-bold uppercase">
            FLIPI<span className="text-[#f0a500]">X</span>
          </h1>
          <p className="text-white z-20 font-semibold text-center absolute top-[50%] left-[50%] -translate-x-[50%] text-xl tracking-widest -translate-y-[50%]">
            Feeling Wali Flipbook
          </p>
          <div className="text-[#fff] z-20 absolute bottom-8 text-[15px] gap-0.5 mt-2 w-full">
            <div className=" flex items-center w-full justify-center">
              Don't have an account?
              <Link className="text-[#f0a500] hover:border-b border-[#f0a500]" href={"/register"}>
                {" "} 
                Register
              </Link>
            </div>
            <div className=" text-center mt-2">
              <Link
                href={"/privacy"}
                className="text-center text-lg-center text-[#f0a500] mt-2 hover:border-b w-fit"
              >
                Tearms & Condtions
              </Link>
            </div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full overlayDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
