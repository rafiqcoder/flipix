import React from "react";
import DailyReportChart from "../../components/DailyReportChart";
import WeaklyReportData from "../../components/WeaklyReportChart";

function page() {
  return (
    <div className="  text-white text-4xl w-full">
      <div className=" w-full">
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          <div className=" col-span-1 bg-[#0d0d0d] rounded-lg px-3 py-5">
            <DailyReportChart />
          </div>
          <div className=" col-span-1 bg-[#0d0d0d] rounded-lg px-3 py-5">
            <WeaklyReportData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
