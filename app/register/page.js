import React from "react";
import { FaPlay } from "react-icons/fa6";
import Cards from "./CardsBtns";
import Link from "next/link";

function page() {
  return (
    <div className="registerPageBg">
      <div className="font-cinzel  max-w-6xl flex items-center justify-center  min-h-[90vh] relative mx-auto">
        <div className=" w-full">
          <div className=" text-center uppercase text-[#b3b3b3] gap-5 flex items-center justify-center tracking-widest text-[18px] font-extralight">
            <h1 className="">
              FLIPI<span className="text-[#f0a500]">X</span>
            </h1>
            <span className="  font-semibold">.</span>
            <p className="">Feeling Wali Flipbook</p>
          </div>
          <div>
            <h2 className="text-center mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#fff] tracking-wider gold-line">
              Choose Your Version
            </h2>
            <p className="text-[17px] tracking-wide font-medium mt-1 text-[#b3b3b3] font-poppins text-center">
              Select the version that best suits your needs
            </p>
          </div>
          <div className=" max-w-3xl mx-auto md:mt-8 mt-5 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 lg:gap-12 w-full">
            <Cards
              version={
                <>
                  <span className="text-[20px] lg:text-[24px]">S</span>tudio{" "}
                  <span className="text-[20px] lg:text-[24px]">v</span>ersion
                </>
              }
              paragraph={
                "For photographers who want their own marketing and branding abovean e-album. Build your studio presence."
              }
              role={"For Photographers"}
              icon={"🎥"}
              startBtnText={"Get Started Free →"}
              link={"/register/studio"}
            />
            <Cards
              version={
                <>
                  <span className="text-[20px] lg:text-[24px]">L</span>ab{" "}
                  <span className="text-[20px] lg:text-[24px]">v</span>ersion
                </>
              }
              paragraph={
                "Create multiple e-albums for your photographer customers. Manage your printing and designing workflow."
              }
              role={"For Printing & Designing Labs"}
              icon={"🖨️"}
              startBtnText={"Get Started →"}
              link={"/register/hypher"}
            />
          </div>
          <div className="flex md:mt-4 mt-2 lg:mt-6 text-[#555555] font-poppins text-[14px] font-medium gap-1 items-center justify-center">
            <p>Already have an account? </p>
            <Link href={'/login'} className=" transition duration-200 hover:text-[#f0a500]">Log In ·</Link>
            <Link href={'/'} className=" transition duration-200 hover:text-[#f0a500]">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
