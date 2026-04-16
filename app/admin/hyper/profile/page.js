import Image from "next/image";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import profile from "@/public/images/profile.png";
import Button from "@/components/common/Button";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function page() {
  const data = {
    importantInfo: [
      { title: "Full Name", text: "Islam Gauri" },
      { title: "Lab Name", text: "Gauri Design" },
      { title: "Email", text: "gauridesignnagaur@gmail.com" },
      { title: "Mobile", text: "9982596086" },
      { title: "Full Address", text: "9982596086" },
    ],
    planDetails: [
      { title: "Active Plan", text: "Monthly Premium 40 Plan" },
      { title: "Recharge Date", text: "06/03/2026" },
      { title: "Coins Left", text: "4 Credits" },
      { title: "Expire On", text: "05/04/2026" },
    ],
    socialMediaLink: [
      { icon: <FaWhatsapp />, text: "WhatsApp", isLinkExist: true },
      { icon: <FaFacebook />, text: "Facebook", isLinkExist: true },
      { icon: <FaTwitter />, text: "Twitter", isLinkExist: false },
      { icon: <FaLinkedinIn />, text: "LinkedIn", isLinkExist: false },
      { icon: <FaInstagram />, text: "Instagram", isLinkExist: true },
      { icon: <FaYoutube />, text: "YouTube", isLinkExist: false },
    ],
  };
  // plan
  return (
    <div className=" w-full font-poppins">
      <div className="px-3 w-full lg:px-4 py-2 lg:py-3 bg-[#0d0d0d] rounded-b-md">
        {/* TOP DATA */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* left */}
          {/* PROFILE DATA */}
          <div className=" lg:col-span-1 bg-[#20201f79] px-1.5 rounded-md md:px-3 py-5 md:py-4">
            <div className=" relative">
              {false ? (
                <Image src={youProfileImg} alt="profileImg" />
              ) : (
                <Image
                  src={profile}
                  alt="profile"
                  width={200}
                  height={300}
                  className=" text-xl md:w-[160px] w-[120px] lg:w-[200px] font-medium text-white mx-auto  border border-yellow rounded-full"
                />
              )}
              <input
                type="file"
                className=" w-full  h-full opacity-0 absolute top-0 left-0"
              />
            </div>
            <div className=" text-center mt-3">
              <h1 className=" text-center font-bold md:text-xl text-lg lg:text-2xl text-white uppercase">
                Islam Gouri
              </h1>
              <p className="text-sm mt-1 justify-center flex gap-2 text-[#b3b3b3]">
                Gauri Desing - 993393939{" "}
                <span className=" rounded-full text-yellow">*</span>
              </p>{" "}
              <p className="text-[15px] mt-3 justify-center flex gap-2 text-[#b3b3b3]">
                Nagaur, RJ, IN{" "}
                <span className=" rounded-full text-yellow">*</span>
              </p>{" "}
              <p className="text-sm mt-2 justify-center flex gap-2 text-[#b3b3b3]">
                Click to photo for update profile picture{" "}
                <span className=" rounded-full text-yellow">*</span>
              </p>{" "}
              <Button
                className={
                  "border-2 cursor-pointer mt-4 lg:mt-6 py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
                }
              >
                Edit
              </Button>{" "}
            </div>
          </div>
          {/* right */}
          {/* IMPORTANT INFORMATION */}
          <div className=" lg:col-span-2 bg-[#20201f79] px-1.5 rounded-md md:px-3 py-2 md:py-4">
            <h1 className=" font-semibold tracking-wider md:text-xl text-lg lg:text-2xl text-white ">
              Important Information
            </h1>
            <div className=" md:space-y-[3%] space-y-[2%] lg:space-y-[5%] mt-3 lg:mt-6 ">
              {data.importantInfo.map(({ title, text }, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center md:gap-8 gap-6 lg:gap-12"
                  >
                    <p className="text-sm mt-1 w-[120px] flex gap-2 text-[#b3b3b3]">
                      {title}{" "}
                      <span className=" rounded-full text-yellow">*</span>
                    </p>{" "}
                    <span className="text-sm  text-[#b3b3b3]">:</span>
                    <p className="text-sm mt-1  flex gap-2 text-[#b3b3b3]">
                      {text}
                    </p>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* BOTTOM DATA */}
        <div className=" mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* left */}
          {/* SOCIAL MEDIA LINKS */}
          <div className=" lg:col-span-1 bg-[#20201f79] px-1.5 rounded-md md:px-3 py-5 md:py-4">
            <h1 className=" font-semibold tracking-wider md:text-xl text-lg lg:text-2xl text-white ">
              Social Media Links
            </h1>
            <div className=" space-y-2 md:space-y-4 lg:space-y-6 md:mt-3 mt-2 lg:mt-5">
              {data.socialMediaLink.map(({ icon, text, isLinkExist }, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex relative flex justify-between items-center gap-4"
                  >
                    <div className=" flex items-center gap-4">
                      <div className="text-2xl w-fit font-medium px-2 py-2 rounded-full bg-yellow">
                        {icon}
                      </div>
                      <p className="text-[15px] mt-1 w-[120px] flex gap-2 text-[#b3b3b3]">
                        {text}{" "}
                        <span className=" rounded-full text-yellow">*</span>
                      </p>{" "}
                    </div>
                    {isLinkExist ? (
                      <IoMdCheckmark className=" text-blue-600" />
                    ) : (
                      <IoClose className="text-red-500" />
                    )}
                  </div>
                );
              })}
              <Button
                className={
                  "border-2 cursor-pointer mt-2 lg:mt-4 py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
                }
              >
                Edit Social Links
              </Button>{" "}
            </div>
          </div>
          {/* right */}
          {/* PLAN DETAILS */}
          <div className=" lg:col-span-2 bg-[#20201f79] px-1.5 rounded-md md:px-3 py-2 md:py-4">
            <h1 className=" font-semibold tracking-wider md:text-xl text-lg lg:text-2xl text-white ">
              Plan Details
            </h1>
            <div className=" md:space-y-[3%] space-y-[2%] lg:space-y-[5%] mt-3 lg:mt-6 ">
              {data.planDetails.map(({ text, title }, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center md:gap-8 gap-6 lg:gap-12"
                  >
                    <p className="text-sm mt-1 w-[120px] flex gap-2 text-[#b3b3b3]">
                      {title}{" "}
                      <span className=" rounded-full text-yellow">*</span>
                    </p>{" "}
                    <span className="text-sm  text-[#b3b3b3]">:</span>
                    <p className="text-sm mt-1  flex gap-2 text-[#b3b3b3]">
                      {text}
                    </p>{" "}
                  </div>
                );
              })}
            </div>
            <div className=" space-y-4 mt-12">
              <div>
                <div className=" flex items-center justify-between">
                  <p className="text-sm  flex gap-2 text-[#fff]">
                    Flipix coin used{" "}
                    <span className=" rounded-full text-yellow">*</span>
                  </p>
                  <p className=" text-white text-sm">4/D</p>
                </div>
                <div className="mt-2 w-[100%] h-[8px] rounded-full bg-yellow">
                  <div className=" w-[0%] h-full rounded-full bg-blue-600"></div>
                </div>
              </div>
              <div className="">
                <div className=" flex items-center justify-between">
                  <p className="text-sm  flex gap-2 text-[#fff]">
                    Days Passed{" "}
                    <span className=" rounded-full text-yellow">*</span>
                  </p>
                  <p className=" text-white text-sm">6/30</p>
                </div>
                <div className=" w-[100%] h-[8px] rounded-full mt-2 bg-yellow">
                  <div className={` w-[6%] h-full rounded-full bg-blue-600`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
