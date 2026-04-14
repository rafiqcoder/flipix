"use client";
import { filteringDateState } from "@/toolkit/slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FilteringInputs() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  useEffect(() => {
    dispatch(filteringDateState(date.split("-").reverse().join("/")));
  }, [date]);

  return (
    <>
      <div className="px-2 py-1.5 bg-[#ffffff49] text-white rounded">
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className=" outline-none"
        />
      </div>
      <div className="px-2 py-1.5 bg-[#ffffff49] text-white rounded ">
        <input
          type="text"
          className=" outline-none "
          placeholder="Search Data"
        />
      </div>
    </>
  );
}

export default FilteringInputs;
