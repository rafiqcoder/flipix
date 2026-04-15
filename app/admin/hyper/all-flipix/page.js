import Image from "next/image";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import scanner from "@/public/images/scnner.png";
import DataFilterByDate from "./components/DataFilterByDate";
import FilteringInputs from "./components/FilteringInputs";
function page() {
  const tableHeaders = [
    "Album",
    "Sheets",
    "Job No",
    "Dealer/Agent",
    "Photographer",
    "Client",
    "Design/Edit Rating",
    "Photography Rating",
    "Views",
    "Created",
    "QR Code",
  ];
  const userData = [
    {
      album: "Image_1",
      sheets: "23 S",
      jobNo: "616397",
      dealerAgent: "Gauri Design",
      photographer: "Radha Rani Production",
      client: "Ashutosh & Pinky",
      designEditRating: 0,
      photographyRating: 0,
      views: 0,
      created: "06/06/2026",
    },
    {
      album: "Image_2",
      sheets: "26 S",
      jobNo: "616499",
      dealerAgent: "Gauri Design",
      photographer: "Radha Rani Production",
      client: "Krishna & Sejal",
      designEditRating: 0,
      photographyRating: 0,
      views: 0,
      created: "06/03/2026",
    },
    {
      album: "Image_3",
      sheets: "26 S",
      jobNo: "616392",
      dealerAgent: "Gauri Design",
      photographer: "Radha Rani Production",
      client: "Saista & Asif",
      designEditRating: 0,
      photographyRating: 0,
      views: 2,
      created: "06/12/2026",
    },
    {
      album: "Image_4",
      sheets: "21 S",
      jobNo: "6126391",
      dealerAgent: "Gauri Design",
      photographer: "Radha Rani Production",
      client: "Asif & Sista",
      designEditRating: 0,
      photographyRating: 0,
      views: 1,
      created: "06/03/2026",
    },
    {
      album: "Image_5",
      sheets: "42 S",
      jobNo: "616576",
      dealerAgent: "Gauri Design",
      photographer: "Sattyam Photography",
      client: "Rahul & Swati",
      designEditRating: 0,
      photographyRating: 0,
      views: 4,
      created: "06/03/2026",
    },
    {
      album: "Image_6",
      sheets: "46 S",
      jobNo: "616575",
      dealerAgent: "Gauri Design",
      photographer: "Sattyam Photography",
      client: "Luvkush & usha",
      designEditRating: 0,
      photographyRating: 0,
      views: 14,
      created: "06/03/2026",
    },
  ];
  return (
    <div className=" w-full font-poppins">
      <div className="flex w-full bg-[#634d00] md:py-3 py-2 lg:py-5 md:px-4 px-2 lg:px-6 rounded-t-md items-center flex-wrap justify-between gap-3">
        <h1 className="text-white font-semibold text-xl uppercase">
          All Flipix ({userData.length})
        </h1>
       <FilteringInputs/>
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
            <DataFilterByDate userData={userData}/>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
