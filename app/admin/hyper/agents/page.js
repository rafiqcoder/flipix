import Image from "next/image";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import scanner from "@/public/images/scnner.png";

import DataFilterByDate from "./components/DataFilterByDate";
import FilteringInputs from "./components/FilteringInputs";
import AddNewAgent from "./components/AddNewAgent";
import CountTotalAgent from "./components/CountTotalAgent";

function page() {
  const headers = [
    "Name",
    "Company",
    "Mobile Number",
    "View Flipix",
    "View Photographer  ",
    "Permission",
    "City",
    "State",
    "Country",
    "Join_on",
    "Active Plan",
    "Plan Expiry",
  ];
  function countAgent(data) {
    console.log(data);
  }

  return (
    <div className=" w-full font-poppins">
      <div className="flex w-full bg-[#634d00] md:py-3 py-2 lg:py-5 md:px-4 px-2 lg:px-6 rounded-t-md items-center flex-wrap justify-between gap-3">
        <CountTotalAgent />
        <FilteringInputs />
        <AddNewAgent />
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
                {headers.map((data, idx) => {
                  return (
                    <th key={idx} className="px-2 py-4">
                      {data}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <DataFilterByDate />
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
