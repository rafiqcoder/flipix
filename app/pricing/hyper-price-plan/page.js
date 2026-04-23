import React from "react";
import RechargeAccountStandalone from "./components/LabPricingClient";

function page() {
  return (
    <div className=" py-4 px-2 lg:px-0 min-h-screen max-w-4xl mx-auto font-poppins md:py-6 lg:py-8">
      <h1 className="font-display text-yellow text-3xl md:text-5xl tracking-widest text-center">
        Recharge Your Account
      </h1>
      <RechargeAccountStandalone />
    </div>
  );
}

export default page;
