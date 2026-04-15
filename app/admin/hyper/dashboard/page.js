import React from "react";
import DailyReportChart from "../../components/DailyReportChart";
import WeaklyReportData from "../../components/WeaklyReportChart";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ToggleBtn from "../../components/ToggleBtn";
export const metadata = {
  title: "Admin - Dashboard",
  description: "Admin - Dashboard page",
};
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

        <div className="grid mt-5 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-3">
          {cardsData.map(({ title, value }, idx) => {
            return (
              <div
                key={idx}
                className="px-4 md:px-6 lg:px-8 md:py-6 py-4 lg:py-8 rounded-lg text-center bg-[#0d0d0d]"
              >
                <p className="text-[17px] font-medium text-gray-text">
                  {title}
                </p>
                <h3 className="text-white font-semibold text-2xl mt-4">
                  {value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
