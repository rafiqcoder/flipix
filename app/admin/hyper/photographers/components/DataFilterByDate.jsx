"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
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
          <td className="px-4 py-3 text-gray-text">{row.dealerAgent}</td>
          <td className="px-4 py-3 text-gray-text">{row.name}</td>
          <td className="px-4 py-3 text-gray-text">{row.studio}</td>
          <td className="px-4 py-3 text-gray-text">{row.mobileNumber}</td>
          <td className="px-4 py-3 text-gray-text">{row.viewFlipiX}</td>
          
          <td className="px-4 py-3 text-center text-gray-text">
            {row.permission}
          </td>
          <td className="px-4 py-3 text-center text-gray-text">{row.city}</td>
          <td className="px-4 py-3 text-center text-gray-text">{row.state}</td>
          <td className="px-4 py-3 text-gray-text">{row.country}</td>
          <td className="px-4 py-3 text-gray-text">{row.joinOn}</td>

          <td className="px-4 py-3 text-gray-text">{row.activePlan}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataFilterByDate;
