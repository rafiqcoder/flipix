import React from "react";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";

function LabPricingClient() {
  return (
    <div className="md:mt-6 mt-4 lg:mt-8">
      <div className=" grid lg:grid-cols-2 gap-4 items-center">
        <MonthlyPricing />
        <YearlyPricing />
      </div>
    </div>
  );
}

export default LabPricingClient;
