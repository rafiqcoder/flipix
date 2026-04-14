import React from "react";
import DailyReportChart from "../../components/DailyReportChart";
import WeaklyReportData from "../../components/WeaklyReportChart";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ToggleBtn from "../../components/ToggleBtn";

function page() {
  const cardsData = [
    { title: "Total Agents", value: 2 },
    { title: "Total Photographers", value: 14 },
    { title: "Total Flipix", value: 78 },
    { title: "Total Staff", value: 0 },
  ];
  return (
    <div className="  text-white text-4xl w-full font-poppins">
      <div className=" w-full">
        <ToggleBtn />
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          <div className=" col-span-1 bg-[#0d0d0d] rounded-lg px-3 py-5">
            <DailyReportChart />
          </div>
          <div className=" col-span-1 bg-[#0d0d0d] rounded-lg px-3 py-5">
            <WeaklyReportData />
          </div>
        </div>

        <div className="grid mt-5 md:grid-cols-3 grid-cols-2 lg:grid-cols-4 items-center gap-3">
          <div className="px-2 md:px-4 lg:px-6 md:py-4 py-2 lg:py-6 rounded-lg text-center bg-[#0d0d0d]">
            <p className="text-[17px] font-medium text-gray-text">Total Agents</p>
            <h3 className="text-white font-semibold text-2xl mt-4">2</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
