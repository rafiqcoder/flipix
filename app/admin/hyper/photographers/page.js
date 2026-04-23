import Image from "next/image";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import scanner from "@/public/images/scnner.png";
import DataFilterByDate from "./components/DataFilterByDate";
import FilteringInputs from "./components/FilteringInputs";
import { AiFillEye } from "react-icons/ai";
export const metadata = {
  title: "Flipix - Photographers",
  description: "Flipix photographer page",
};
function page() {
  const tableHeaders = [
    "Dealer/Agent",
    "Name",
    "Studio",
    "Mobile Number",
    "View FlipiX",
    "Permission",
    "City",
    "State",
    "Country",
    "Join_on",
    "Active Plan",
  ];

  const userData = [
    {
      dealerAgent: "Gauri Design",
      name: "Omm Video Vision",
      studio: "Omm Video Vision",
      mobileNumber: "8249125824",
      viewFlipiX: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "Ganjam",
      state: "Orissa",
      country: "IN",
      joinOn: "07/08/2025",
      activePlan: "None",
    },
    {
      dealerAgent: "Gauri Design",
      name: "Richpal",
      studio: "Veer Teja Studio",
      mobileNumber: "7568821692",
      viewFlipiX: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "Dhariya",
      state: "Rajasthan",
      country: "IN",
      joinOn: "13/08/2025",
      activePlan: "None",
    },
    {
      dealerAgent: "Gauri Design",
      name: "Satyam Jaiswal",
      studio: "Radha Rani Production",
      mobileNumber: "9580640438",
      viewFlipiX: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "DEORIAI",
      state: "UP",
      country: "IN",
      joinOn: "13/04/2025",
      activePlan: "None",
    },
    {
      dealerAgent: "Gauri Design",
      name: "Saurav",
      studio: "Vhubhan Creative",
      mobileNumber: "7855013003",
      viewFlipiX: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "Burla",
      state: "Odisha",
      country: "IN",
      joinOn: "08/02/2026",
      activePlan: "None",
    },
    {
      dealerAgent: "Gauri Design",
      name: "Sahdev Roj",
      studio: "Tejal SMS Studio",
      mobileNumber: "9414210507",
      viewFlipiX: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "Mundwa",
      state: "Nagaur",
      country: "IN",
      joinOn: "12/02/2026",
      activePlan: "None",
    },
  ];
  return (
    <div className=" w-full font-poppins">
      <div className="flex w-full bg-[#634d00] md:py-3 py-2 lg:py-5 md:px-4 px-2 lg:px-6 rounded-t-md items-center flex-wrap justify-between gap-3">
        <h1 className="text-white font-semibold text-xl uppercase">
          All Flipix ({userData.length})
        </h1>
        <FilteringInputs />
        <div className=" bg-white px-1 py-1 rounded-md">
          <Image src={scanner} alt="scanner" width={30} height={60} />
        </div>
      </div>
      <div className=" px-3 lg:px-4 py-2 lg:py-3 bg-[#0d0d0d] rounded-b-md">
        <div className="overflow-x-auto rounded-lg border border-[#585858] shadow-sm">
          <table className="min-w-full divide-y divide-[#585858] bg-[#424242] text-sm text-left">
            {/* Table Header */}
            <thead className=" font-semibold text-white">
              <tr>
                {tableHeaders.map((data, idx) => {
                  return (
                    <th key={idx} className="px-2 py-4">
                      {data}
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body */}
            <DataFilterByDate userData={userData} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
