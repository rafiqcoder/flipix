"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import flipixIcon from "@/public/images/flipixIcon.webp";
import { MdCreateNewFolder } from "react-icons/md";
import {
  MdDashboard,
  MdAddBox,
  MdCollections,
  MdGroup,
  MdCameraAlt,
  MdAccountBalanceWallet,
  MdNotifications,
  MdFeedback,
  MdShare,
  MdPerson,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";
function LeftMenu() {
  const sidebarMenu = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "/dashboard",
    },
    {
      name: "Create New",
      icon: <MdAddBox />,
      path: "/create-new",
    },
    {
      name: "All Flipix",
      icon: <MdCollections />,
      path: "/all-flipix",
    },
    {
      name: "Agents",
      icon: <MdGroup />,
      path: "/agents",
    },
    {
      name: "Photographers",
      icon: <MdCameraAlt />,
      path: "/photographers",
    },
    {
      name: "Flipix Recharge",
      icon: <MdAccountBalanceWallet />,
      path: "/flipix-recharge",
    },
    {
      name: "Notification",
      icon: <MdNotifications />,
      path: "/notification",
    },
    {
      name: "Feedback",
      icon: <MdFeedback />,
      path: "/feedback",
    },
    {
      name: "Share Referral Link",
      icon: <MdShare />,
      path: "/share-referral",
    },
    {
      name: "My Profile",
      icon: <MdPerson />,
      path: "/profile",
    },
    {
      name: "Logout",
      icon: <MdLogout />,
      path: "/logout",
    },
  ];
  // left menu controlling
  const [openLeftMenu, setOpenLeftMenu] = useState(true);
  const [activeLink, setActiveLink] = useState("/dashboard");
  return (
    <div
      className={` transition-all duration-300 ${openLeftMenu ? "w-[360px]" : "w-[60px] md:w-[90px]"} overflow-x-hidden`}
    >
      <div
        className={`fixed transition-all duration-300 z-10 md:px-3 px-2 lg:px-4 pb-12 py-2 md:py-3 lg:py-4 bg-[#0d0d0d] font-poppins rounded-lg h-[88vh] overflow-x-hidden ${openLeftMenu ? "w-[290px]" : "w-[65px] md:w-[80px]"}`}
      >
        <div
          className={` md:px-2 px-1 lg:px-3 py-2 transition-all duration-300 ${openLeftMenu ? "" : "flex-col gap-5"} items-center flex justify-between`}
        >
          <Image
            src={flipixIcon}
            alt="icon"
            className=""
            width={40}
            height={50}
          />
          <div
            onClick={() => setOpenLeftMenu(!openLeftMenu)}
            className={` bg-[#f4c720] transition-all duration-300 hover:text-white text-black px-1 hover:bg-black rounded-lg text-xl lg:text-2xl py-1 cursor-pointer`}
          >
            <MdKeyboardArrowLeft />
          </div>
        </div>
        <div className="mt-3 lg:mt-8 ">
          {sidebarMenu.map(({ name, icon, path }) => {
            return (
              <div className="mt-2" key={name}>
                <Link
                  onClick={() => setActiveLink(path)}
                  href={`/admin/hyper/` + path}
                  className=" w-full"
                >
                  <div
                    className={`flex transition duration-300 font-medium hover:text-black text-[15px] lg:text-[17px] rounded-md items-center gap-3 lg:gap-5 px-3 py-2 cursor-pointer   ${activeLink === path ? "bg-[#f4c620bd] text-black" : "hover:bg-[#f4c620bd] text-white"}`}
                  >
                    <div className={`${openLeftMenu ? "text-lg" : "text-2xl"}`}>
                      {icon}
                    </div>
                    <p
                      className={` transition-all duration-500 shrink-0 ${openLeftMenu ? " opacity-100" : " opacity-0"}`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
