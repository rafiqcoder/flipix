"use client";
import React from "react";
import { useSelector } from "react-redux";

function CountTotalAgent() {
   const totalAgent = useSelector(state => state.totalAgentData)
  return (
    <h1 className="text-white font-semibold text-xl uppercase">Result ({totalAgent})</h1>
  );
}

export default CountTotalAgent;
