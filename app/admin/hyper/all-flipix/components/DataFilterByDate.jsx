"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
function DataFilterByDate({userData}) {
  
  const filteringDate = useSelector((state) => state.filterAgentByDate);
  const [data, setData] = useState(userData);
  useEffect(() => {
    if (filteringDate !== "") {
      setData([]);
      userData.map((dates) => {
        if (dates.created === filteringDate) {
          setData((prev) => [...prev, dates]);
        }
        console.log(filteringDate, dates.joinOn);
      });
    } else if (filteringDate === "") {
      setData(userData);
    }
  }, [filteringDate]);
  return (
    <tbody className="divide-y divide-[#585858] bg-white">
      {data.map((row, index) => (
        <tr
          key={index}
          className={` ${index % 2 === 0 ? "bg-[#0d0d0d]" : "bg-[#0d0d0d]"}`} // Zebra stripes
        >
          <td className="px-4 py-3 font-medium">
            <div className="w-10 h-10 bg-gray-200 rounded overflow-hidden">
              {/* Replace with <Image /> if using local files */}
              <img src="/api/placeholder/40/40" alt="Album" />
            </div>
          </td>
          <td className="px-4 py-3 text-gray-text">{row.sheets}</td>
          <td className="px-4 py-3 text-gray-text">{row.jobNo}</td>
          <td className="px-4 py-3 text-gray-text">{row.dealerAgent}</td>
          <td className="px-4 py-3 text-gray-text">{row.photographer}</td>
          <td className="px-4 py-3 text-gray-text font-semibold">
            {row.client}
          </td>
          <td className="px-4 py-3 text-center text-gray-text">
            {row.designEditRating}
          </td>
          <td className="px-4 py-3 text-center text-gray-text">
            <div className=" flex items-center justify-center text-yellow">
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx}>
                    <CiStar />
                  </div>
                ))}
            </div>
            ({row.photographyRating} persons)
          </td>
          <td className="px-4 py-3 text-center text-gray-text">{row.views}</td>
          <td className="px-4 py-3 text-gray-text">{row.created}</td>
          <td className="px-4 py-3">
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white p-2 rounded transition-colors">
              {/* Download Icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataFilterByDate;
