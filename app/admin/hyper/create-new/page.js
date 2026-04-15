import React from "react";
import Form from "./components/Form";

export const metadata = {
  title: "Create-New Flipix",
  description: "crate new flipix page",
};
function page() {

  return (
    <div className="w-full font-poppins">
      <div className=" w-full bg-[#634d00] md:py-3 py-2 lg:py-5 md:px-4 px-2 lg:px-6 rounded-t-md ">
        <h1 className=" text-xl font-semibold text-white text-center tracking-wider">Create New Albums</h1>
      </div>
      <div className=" px-3 lg:px-4 py-2 lg:py-3 bg-[#0d0d0d] rounded-b-md">
        <div className="">
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default page;
