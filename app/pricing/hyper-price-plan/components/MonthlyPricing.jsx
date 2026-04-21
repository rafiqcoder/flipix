"use client";
import {
  hyperCurrentRateState,
  hyperValueState,
  hyperPlanTypeState,
  hyperTotalPriceState,
} from "@/toolkit/slice";
import React, { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function MonthlyPricing() {
  const plans = [
    {
      type: "monthly",
      duration: "30 Days",
      features: [
        "Support 24 x 7",
        "No Daily Limit",
        "Hight Quality QR",
        "Bulk QR Code Download",
        "Analytics",
        "Flipix album stay Lifetime",
      ],
      pricing: {
        standard: true,
        premium: false,
        withPhotographerAd: false,
        adCost: 10,
        baseRate: 40, // per Flipix
        tiers: [
          { range: "1-10", price: 40 },
          { range: "11-50", price: 30 },
          { range: "51-100", price: 20 },
        ],
      },
      coins: {
        default: 1,
        min: 1,
        max: 100,
      },
      totalPay: 40,
    },
    {
      type: "yearly",
      duration: "365 Days",
      features: [
        "Support 24 x 7",
        "No Daily Limit",
        "Hight Quality QR",
        "Bulk QR Code Download",
        "Analytics",
        "Flipix album stay Lifetime",
      ],
      pricing: {
        standard: true,
        premium: false,
        withPhotographerAd: false,
        adCost: 10,
        baseRate: 14, // per Flipix
        tiers: [
          { range: "201-400", price: 18 },
          { range: "401-1000", price: 14 },
          { range: "1001-1800", price: 10 },
        ],
      },
      coins: {
        default: 996,
        min: 201,
        max: 1800,
      },
      totalPay: 13944,
    },
  ];
  // redux
  const dispatch = useDispatch();
  // state for plan type standard or premium
  // state data
  const data = useSelector((state) => state.hyperPricePlan);
  // handle slider change
  const handleSliderChange = (e) => {
    dispatch(hyperValueState(e.target.value));
  };
  // use effect for changing current rate based on plan type and value
  // plan type effect
  useEffect(() => {
    if (data.planType === "Standard") {
      dispatch(hyperCurrentRateState(40));
    } else if (data.planType === "Premium") {
      dispatch(hyperCurrentRateState(50));
    }
  }, [data.planType]);
  // value for hyper current rate
  useEffect(() => {
    if (data.planType === "Premium") return;
    if (data.value >= 1 && data.value <= 10) {
      dispatch(hyperCurrentRateState(40));
    } else if (data.value >= 11 && data.value <= 50) {
      dispatch(hyperCurrentRateState(30));
    } else if (data.value >= 51 && data.value <= 100) {
      dispatch(hyperCurrentRateState(20));
    }
  }, [data.value, data.planType]);
  // use effect for total price
  useEffect(() => {
    if (data.planType === "Standard") return;
    if (data.value >= 1 && data.value <= 10) {
      dispatch(hyperCurrentRateState(50));
    } else if (data.value >= 11 && data.value <= 50) {
      dispatch(hyperCurrentRateState(40));
    } else if (data.value >= 51 && data.value <= 100) {
      dispatch(hyperCurrentRateState(30));
    }
  }, [data.value, data.planType]);

  useEffect(() => {
    dispatch(hyperTotalPriceState(data.value * data.currentRate));
  }, [data.currentRate, data.value]);
  return (
    <>
      {/* monthly */}
      <div className=" md:px-4 px-2 border rounded-md border-gray-900 bg-[#000000de] md:py-4 py-2 lg:py-6 lg:px-6">
        <h1 className=" text-center text-white font-medium text-xl tracking-wider lg:text-2xl">
          {plans[0].type.charAt(0).toUpperCase() + plans[0].type.slice(1)}{" "}
        </h1>
        <p className=" text-center text-[14px] text-gray-text mt-1">
          ({plans[0].duration})
        </p>
        {/* features */}
        <div className=" mt-2 lg:mt-4">
          <div className=" space-y-2 md:space-y-4 text-[#dbdbdb] lg:space-y-6">
            {plans[0].features.map((feature, index) => (
              <div key={index} className=" flex items-center gap-3">
                <div className="w-4.5 h-4.5 rounded-sm bg-rose-500 flex items-center justify-center shrink-0">
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m7.75.75-4.812 4L.75 2.932" fill="#ff2056" />
                    <path
                      d="m7.75.75-4.812 4L.75 2.932"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{" "}
                <p className=" text-[14px] ">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:px-6 md:px-4 px-4 md:py-4 py-4 lg:py-6 md:mt-4 bg-[#0d0d0d] rounded-md mt-4 lg:mt-6">
          {/* standard or premium */}
          <div className=" justify-center flex items-center md:gap-4 gap-2 lg:gap-6">
            <button
              onClick={() => dispatch(hyperPlanTypeState("Standard"))}
              className={`px-3 md:px-5 lg:px-8 py-2 cursor-pointer transition duration-300 font-medium border border-border-color hover:bg-yellow hover:text-black text-[#fff] text-base lg:text-lg rounded ${data.planType === "Standard" ? "bg-yellow text-black" : "bg-black"}`}
            >
              Standard
            </button>
            <button
              onClick={() => dispatch(hyperPlanTypeState("Premium"))}
              className={`px-3 md:px-5 lg:px-8 py-2 cursor-pointer transition duration-300 font-medium border border-border-color hover:bg-yellow hover:text-black text-[#fff] text-base lg:text-lg rounded ${data.planType === "Premium" ? "bg-yellow text-black" : "bg-black"}`}
            >
              Premium
            </button>
          </div>
          {/* checkbox for photographer ad */}
          <div className=" flex items-center mt-4  justify-center gap-1">
            <input
              onChange={() => {}}
              onClick={() =>
                dispatch(
                  hyperPlanTypeState(
                    data.planType === "Standard" ? "Premium" : "Standard",
                  ),
                )
              }
              type="checkbox"
              id="withPremium"
              checked={data.planType === "Premium" ? true : false}
            />
            <label
              htmlFor="withPremium"
              className=" text-gray-text text-[13px] lg:text-[14px] font-medium"
            >
              With Photographer Ad (+₹10/coin)
            </label>
          </div>
          {/* current rate */}
          <div className="px-2.5 bg-red-500 md:mt-4 mt-2 rounded lg:mt-6 lg:px-4 py-2 lg:py-3">
            <p className="text-[13px] text-center text-gray-200 tracking-wider lg:text-[14px] font-medium ">
              Current Rate
            </p>
            <h3 className="text-2xl lg:text-3xl tracking-wide font-semibold text-center text-white mt-1 lg:mt-2">
              ₹{data.currentRate}/Flipix
            </h3>
          </div>
          {/* number of coins input  */}
          <div className="flex items-center gap-2 justify-between mt-3 text-gray-text text-[14px] lg:text-[15px]">
            <p className="">Number Of Coins</p>
            <input
              onChange={(e) => dispatch(hyperValueState(e.target.value))}
              value={data.value}
              type="number"
              className=" border text-black border-border-color outline-none px-1.5 bg-white rounded w-[20%] py-1"
            />
          </div>
          {/* price range slider */}
          <div className=" mt-2 lg:mt-3">
            <div className="w-full max-w-md mx-auto ">
              <div className="relative w-full h-3 mt-4">
                {/* Track background */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-green-200 rounded-full overflow-x-hidden flex items-center -translate-y-1/2">
                  <div className=" bg-[#e74c3c] w-[10%] h-full"></div>
                  <div className=" bg-[#f39c12] w-[40%] h-full"></div>
                  <div className=" bg-[#27ae60] w-[50%] h-full"></div>
                </div>

                {/* Active range */}
                <div
                  className="absolute top-1/2 left-0 h-2 rounded-full -translate-y-1/2"
                  style={{ width: `${data.value}%` }}
                />

                {/* Input */}
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={data.value}
                  onChange={handleSliderChange}
                  className="absolute top-0 labPriceInput w-full h-4 z-20 rounded-full opacity-0 cursor-pointer"
                />

                {/* Custom thumb */}
                <div
                  className="absolute top-1/2 w-5 h-5 bg-blue-500 rounded-full -translate-y-1/2 shadow-md"
                  style={{ left: `calc(${data.value}% - 10px)` }}
                />
              </div>

              <div className=" relative h-12 flex mt-2 w-full">
                <div className=" absolute left-0 text-white text-[12px]">
                  <p>1-10</p>
                  <p className=" text-gray-text text-center">₹40</p>
                </div>
                <div className=" absolute left-[30%] -translate-x-[30%] text-white text-[12px]">
                  <p>11-50</p>
                  <p className=" text-gray-text text-center">₹30</p>
                </div>
                <div className=" absolute right-7 text-white text-[12px]">
                  <p>51-100</p>
                  <p className=" text-gray-text text-center">₹20</p>
                </div>
              </div>
            </div>
          </div>

          {/* pay now button */}
          <button className=" text-center px-4 py-2 bg-yellow w-full mt-4 font-semibold cursor-pointer transition duration-300 hover:-translate-y-1 rounded-md">
            Pay Now ₹{data.totalPrice}
          </button>
        </div>
      </div>
    </>
  );
}

export default MonthlyPricing;
