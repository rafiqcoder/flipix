"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
function DataFilterByDate() {
  const userData = [
    {
      name: "Islam Gauri",
      company: "Gauri Design",
      mobileNumber: "9982596086",
      viewFlipix: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      viewPhotographer: (
        <IoShirtOutline className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: "Nagaur",
      state: "RJ",
      country: "IN",
      joinOn: "09/04/2025",
      activePlan: "Monthly Premium 40",
      planExpiry: "05/04/2026",
    },
    {
      name: "Nisha HD",
      company: "Nisha HD Videography",
      mobileNumber: "9546200275",
      viewFlipix: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      viewPhotographer: (
        <IoShirtOutline className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: null,
      state: "BR",
      country: "IN",
      joinOn: "14/04/2025",
      activePlan: "None",
      planExpiry: "17/10/2025",
    },
    {
      name: "Nisha HD",
      company: "Nisha HD Videography",
      mobileNumber: "9546200275",
      viewFlipix: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      viewPhotographer: (
        <IoShirtOutline className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: null,
      state: "BR",
      country: "IN",
      joinOn: "14/04/2025",
      activePlan: "None",
      planExpiry: "17/10/2025",
    },
    {
      name: "Nisha HD",
      company: "Nisha HD Videography",
      mobileNumber: "9546200275",
      viewFlipix: (
        <AiFillEye className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      viewPhotographer: (
        <IoShirtOutline className="text-xl font-medium cursor-pointer hover:text-yellow" />
      ),
      permission: "approved",
      city: null,
      state: "BR",
      country: "IN",
      joinOn: "14/04/2025",
      activePlan: "None",
      planExpiry: "17/10/2025",
    },
  ];
  const filteringDate = useSelector((state) => state.filterAgentByDate);
  const [data, setData] = useState(userData);
  useEffect(() => {
    if (filteringDate !== "") {
      setData([]);
      userData.map((dates) => {
        if (dates.joinOn === filteringDate) {
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
      {data.length > 0 &&
        data.map((row, index) => (
          <tr
            key={index}
            className={` ${index % 2 === 0 ? "bg-[#0d0d0d]" : "bg-[#0d0d0d]"}`} // Zebra stripes
          >
            <td className="px-4 py-5 text-gray-text">{row.name}</td>
            <td className="px-4 py-5 text-gray-text">{row.company}</td>
            <td className="px-4 py-5 text-gray-text">{row.mobileNumber}</td>
            <td className="px-4 py-5 text-gray-text">{row.viewFlipix}</td>
            <td className="px-4 py-5 text-gray-text">{row.viewPhotographer}</td>
            <td className="px-4 py-5 text-gray-text font-semibold">
              {row.permission}
            </td>
            <td className="px-4 py-5 text-center text-gray-text">{row.city}</td>
            <td className="px-4 py-5 text-center text-gray-text">
              {row.state}
            </td>
            <td className="px-4 py-5 text-center text-gray-text">
              {row.country}
            </td>

            <td className="px-4 py-5 text-center text-gray-text">
              {row.joinOn}
            </td>
            <td className="px-4 py-5 text-gray-text">{row.activePlan}</td>
            <td className="px-4 py-3 text-center text-gray-text">
              {row.planExpiry}
            </td>
          </tr>
        ))}
      {data.length === 0 && (
        <h1 className=" fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-[50%]  text-2xl font-semibold text-center text-white">
          No Created On This Date
        </h1>
      )}
    </tbody>
  );
}

export default DataFilterByDate;
