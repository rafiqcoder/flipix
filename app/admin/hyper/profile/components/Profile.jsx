"use client";
import Button from "@/components/common/Button";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/images/profile.png";

function Profile() {
  const [isEditProfile, setIsEditProfile] = useState(false);
  return (
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
        {isEditProfile && (
          <input
            type="file"
            className=" w-full  h-full opacity-0 absolute top-0 left-0"
          />
        )}
      </div>
      <div className=" text-center mt-3">
        {isEditProfile ? (
          <div>
            <label className="text-sm flex gap-2 text-[#b3b3b3]">
              New Name <span className=" rounded-full text-yellow">*</span>
            </label>
            <input
              //   onChange={(e) =>
              //     setFormData({ ...formData, jobNo: e.target.value })
              //   }
              //   value={formData.jobNo}
              required
              type="number"
              placeholder="Set your new name here"
              className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
            />
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>
        ) : (
          <h1 className=" text-center font-bold md:text-xl text-lg lg:text-2xl text-white uppercase">
            Islam Gouri
          </h1>
        )}
        <p className="text-sm mt-1 justify-center flex gap-2 text-[#b3b3b3]">
          Gauri Desing - 993393939{" "}
          <span className=" rounded-full text-yellow">*</span>
        </p>{" "}
        <p className="text-[15px] mt-3 justify-center flex gap-2 text-[#b3b3b3]">
          Nagaur, RJ, IN <span className=" rounded-full text-yellow">*</span>
        </p>{" "}
        <p className="text-sm mt-2 justify-center flex gap-2 text-[#b3b3b3]">
          Click to photo for update profile picture{" "}
          <span className=" rounded-full text-yellow">*</span>
        </p>{" "}
        {isEditProfile ? (
          <button
            onClick={() => setIsEditProfile(false)}
            className={
              "border-2 cursor-pointer mt-4 font-medium rounded-md tracking-wider lg:mt-6 py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
            }
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditProfile(true)}
            className={
              "border-2 cursor-pointer mt-4 font-medium rounded-md tracking-wider lg:mt-6 py-2 text-[13px] px-3 bg-[#f4c720] border-2 border-[#f4c720] text-black"
            }
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
