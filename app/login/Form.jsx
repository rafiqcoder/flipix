"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Form() {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  // change state values
  const handleChange = (value, idx) => {
    if (isNaN(value)) return;
    const copy = [...digits];
    copy[idx] = value;
    setDigits(copy);

    if (value && idx < 3) {
      inputsRef.current[idx + 1].focus();
    }
  };
  // paste data
  const pasteData = (e) => {
    const inputs = e.clipboardData.getData("text").split("");
    console.log(inputs);

    if (inputs.length === 4) {
      setDigits(inputs);
      inputsRef.current[3].focus();
    }
  };
  // delete digits
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };
  return (
    <form className="  lg:mt-4">
      <div>
        <label className="text-[#b3b3b3] font-medium mb-1 text-[14px]">
          Mobile Number
        </label>
      </div>
      <input
        type="tel"
        inputMode="numeric"
        className="bg-[#111] focus:shadow-inputsShadows text-white rounded-lg px-3 text-[15px] font-light tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
        placeholder="10-digit number"
      />
      <div className="mt-5">
        <div>
          <label className="text-[#b3b3b3] font-medium mb-1 text-[14px]">
            4-Digit PIN
          </label>
        </div>
        <div className="mt-1 grid grid-cols-4 justify-between gap-14 w-full">
          {digits.map((digit, idx) => {
            return (
              <input
                value={digit}
                key={idx}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, idx)}
                ref={(el) => (inputsRef.current[idx] = el)}
                onPaste={(e) => pasteData(e)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="tel"
                inputMode="numeric"
                className="bg-[#111] focus:shadow-inputsShadows text-white rounded-lg px-3 text-[15px] font-light tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
              />
            );
          })}
        </div>
        <div className="w-full mt-3">
          <p className="text-end transition duration-300 cursor-pointer text-[13.5px] font-normal text-[#555] hover:text-[#f0a500]">
            Forgot PIN?
          </p>
          <div className="bg-[#f4c720] transition duration-300 cursor-pointer hover:shadow-inputsShadows shadow-[#f0a500] text-center rounded-lg mt-4">
            <Button className={" capitalize text-[16px]"}>Log In</Button>
          </div>
          <div className=" transition duration-300 cursor-pointer  text-[#555] hover:text-[#f0a500] flex items-center gap-1 text-[14px] mt-3 justify-center w-full">
            <p>Login as Designer</p>
            <HiArrowLongRight className="text-xl mt-1" />
          </div>
          <div className="text-[#555] text-[13.5px] gap-0.5 mt-2 flex items-center justify-center">
            Don't have an account?
            <Link className="text-[#f0a500]" href={"/register"}>
              {" "}
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
