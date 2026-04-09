"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import Link from "next/link";
import Button from "@/components/common/Button";
export default function RegisterForm() {
  // lab states
  const [labType, setLabType] = useState("Printing Lab");

  // full form data state
  const [formData, setFormData] = useState({
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
    ownerName: "",
    printingLabName: "",
    machineModel: "",
    albums: "",
    GSTNumber: "",
    mobileNumber: "",
    alternateNumber: "",
    email: "",
    fullAddress: "",
    pinNumber: "",
    pinCode: "",
    designLabName: "",
  });

  // locations states
  const [allCountries, setAllCountry] = useState([]);
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);

  // get all countries
  useEffect(() => {
    const country = Country.getAllCountries();
    setAllCountry(country);
  }, []);

  // geeting all states depend on contries
  useEffect(() => {
    if (formData.selectedCountry === "") return;
    const allState = State.getStatesOfCountry(formData.selectedCountry);
    setAllState(allState);
  }, [formData.selectedCountry]);

  // geeting all cities depend on states
  useEffect(() => {
    if (formData.selectedState === "") return;
    const countryCode = formData.selectedState.split("-")[1];
    const isoCode = formData.selectedState.split("-")[0];
    const cities = City.getCitiesOfState(countryCode, isoCode);
    setAllCity(cities);
  }, [formData.selectedState]);

  return (
    <div className="min-h-screen md:py-8 py-4 lg:py-12 text-white font-poppins flex items-center justify-center px-2 lg:px-4">
      <div className="w-full max-w-xl  ">
        {/* Header */}
        <div className="text-center md:mb-6 mb-4 lg:mb-8">
          <h1 className=" md:text-2xl text-xl lg:text-3xl font-semibold">
            FLIPI<span className="text-[#f0a500]">X</span>
          </h1>{" "}
          <p className="text-xs tracking-widest text-gray-400 mt-2">
            FEELING WALL FLIPBOOK
          </p>
          <h2 className="text-lg lg:text-xl font-semibold mt-2 lg:mt-4">
            JOIN AS STUDIO ADMIN
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Start your journey today
            <span className="bg-[#f4c7201f] border border-[#f4c7204d] text-yellow tracking-wide text-xs px-2 py-1 rounded-full ml-2">
              7 Days Free
            </span>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            
          }}
          className=" md:space-y-3 space-y-2 lg:space-y-5 bg-[#0d0d0d] border border-[#ffffff12] p-8 rounded-lg"
        >
          {/* Full Name */}
          <div>
            <label className="text-sm flex gap-2 text-[#b3b3b3]">
              Full Name <span className=" rounded-full text-yellow">*</span>
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
              value={formData.ownerName}
              required
              type="text"
              placeholder="Owner's full name"
              className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
            />
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>

          {/* lab type */}
          <div>
            <label className="text-sm flex mb-1 gap-2 text-[#b3b3b3]">
              Lab Type <span className=" rounded-full text-yellow">*</span>
            </label>
            <div className="flex items-center text-center font-poppins rounded-lg border border-[#ffffff12] justify-between gap-1 px-1 py-1 bg-[#111111]">
              <div
                className={`w-[50%] cursor-pointer rounded-lg ${labType === "Printing Lab" ? "bg-yellow text-black" : "bg-transparent text-[#666666]"}`}
                onClick={() => setLabType("Printing Lab")}
              >
                <div
                  className={"capitalize font-semibold px-3 py-2.5 text-[13px]"}
                >
                  Printing Lab
                </div>
              </div>
              <div
                className={`w-[50%] cursor-pointer rounded-lg ${labType === "Designing Lab" ? "bg-yellow text-black" : "bg-transparent text-[#666666]"}`}
                onClick={() => setLabType("Designing Lab")}
              >
                <div
                  className={"capitalize font-semibold px-3 py-2.5 text-[13px]"}
                >
                  Designing Lab
                </div>
              </div>
            </div>
          </div>

          {/* Printing lab name */}
          {labType === "Printing Lab" ? (
            <div>
              <div className="mb-3">
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Printing Lab Name{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      printingLabName: e.target.value,
                    })
                  }
                  value={formData.printingLabName}
                  required
                  type="text"
                  placeholder="Your printing lab name"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className=" ">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    Machine Model{" "}
                    <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, machineModel: e.target.value })
                    }
                    value={formData.machineModel}
                    required
                    type="text"
                    placeholder="e.g. Epson L1800"
                    className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  />
                  {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
                </div>
                <div className="">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    Albums/Day{" "}
                    <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, albums: e.target.value })
                    }
                    value={formData.albums}
                    required
                    type="text"
                    placeholder="e.g. 20"
                    className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  />
                  {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="mb-3">
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Designing Lab Name{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, designLabName: e.target.value })
                  }
                  value={formData.designLabName}
                  required
                  type="text"
                  placeholder="Your designing lab name"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>

              <div className="w-full">
                <div className="">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    Albums/Day{" "}
                    <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, albums: e.target.value })
                    }
                    value={formData.albums}
                    required
                    type="text"
                    placeholder="e.g. 15"
                    className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  />
                  {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
                </div>
              </div>
            </div>
          )}

          {/* gst number */}
          <div className="flex gap-2">
            <div className=" w-full">
              <label className="text-sm flex gap-2 text-[#b3b3b3]">
                GST Number <span className=" rounded-full text-yellow">*</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, GSTNumber: e.target.value })
                }
                value={formData.GSTNumber}
                required
                type="text"
                min={15}
                max={15}
                pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9A-Z]{1}$"
                placeholder="22AAAAA0000A1Z5"
                className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
              />
              {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex gap-2">
            <div className=" w-[75%]">
              <label className="text-sm flex gap-2 text-[#b3b3b3]">
                Mobile Number{" "}
                <span className=" rounded-full text-yellow">*</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
                value={formData.mobileNumber}
                required
                type="tel"
                placeholder="10-digit number"
                className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
              />
              {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
            </div>
            <button
              type="button"
              className="mt-6 px-4 bg-[#f4c7201f] text-[#f4c720] border border-[#f4c7204d] cursor-pointer rounded-lg text-sm font-semibold"
            >
              Send OTP
            </button>
          </div>

          {/* alternate number */}
          <div className="flex gap-2">
            <div className=" w-full">
              <label className="text-sm flex gap-2 text-[#b3b3b3]">
                Alternate Number
                <span className="text-[13px] font-light">(optional)</span>{" "}
                <span className=" rounded-full text-yellow">*</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, alternateNumber: e.target.value })
                }
                value={formData.alternateNumber}
                required
                type="tel"
                placeholder="10-digit alternate number"
                className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
              />
              {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm flex gap-2 text-[#b3b3b3]">
              Email Adress <span className=" rounded-full text-yellow">*</span>
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              required
              type="email"
              placeholder="you@example.com"
              className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
            />
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>

          {/* Location */}
          <div className="   ">
            <div className="flex items-center gap-2 mb-3 w-full">
              <div className="h-[1px] w-[40%] bg-[#ffffff12]"></div>
              <p className="text-xs text-gray-500 text-center">LOCATION</p>
              <div className="h-[1px] w-[40%] bg-[#ffffff12]"></div>
            </div>
            <div className="flex gap-2 mb-2.5">
              <div className=" w-full">
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Full Address{" "}
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, fullAddress: e.target.value })
                  }
                  value={formData.fullAddress}
                  required
                  type="text"
                  placeholder="Shop/Building, Street, Area"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
            </div>
            <div className="grid grid-cols-2 md:gap-3 gap-2 lg:gap-3">
              <div className="">
                <div className="relative ">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    Country <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedCountry: e.target.value,
                      })
                    }
                    className="bg-[#111] appearance-none focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  >
                    <option>Select Country</option>
                    {allCountries.map(({ name, isoCode }, idx) => {
                      return (
                        idx < 50 && (
                          <option key={idx} value={isoCode}>
                            {name}
                          </option>
                        )
                      );
                    })}
                  </select>

                  <IoMdArrowDropdown className="w-5 h-5 absolute right-3 top-[65%] -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div className="">
                <div className="relative ">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    State <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedState: e.target.value,
                      })
                    }
                    className="bg-[#111] appearance-none focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  >
                    <option>Select State</option>
                    {allState.map(({ name, isoCode, countryCode }) => {
                      return (
                        <option key={name} value={isoCode + "-" + countryCode}>
                          {name}
                        </option>
                      );
                    })}
                  </select>

                  <IoMdArrowDropdown className="w-5 h-5 absolute right-3 top-[65%] -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="">
                <div className="relative ">
                  <label className="text-sm flex gap-2 text-[#b3b3b3]">
                    City <span className=" rounded-full text-yellow">*</span>
                  </label>
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedCity: e.target.value,
                      })
                    }
                    className="bg-[#111] appearance-none focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                  >
                    <option>Select City</option>
                    {allCity.length > 0 &&
                      allCity.map(({ name }, idx) => {
                        return (
                          idx < 50 && (
                            <option key={idx} value={name}>
                              {name}
                            </option>
                          )
                        );
                      })}
                  </select>

                  <IoMdArrowDropdown className="w-5 h-5 absolute right-3 top-[65%] -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  PIN Code <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pinCode: e.target.value,
                    })
                  }
                  value={formData.pinCode}
                  required
                  type="text"
                  placeholder="6-digit pincode"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
                {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <div className="h-[1px] w-[40%] bg-[#ffffff12]"></div>
              <p className="text-xs uppercase text-gray-500 text-center">
                Security
              </p>
              <div className="h-[1px] w-[40%] bg-[#ffffff12]"></div>
            </div>
            <div className=" gap-3">
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Create 4-Digit PIN
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pinNumber: e.target.value,
                    })
                  }
                  value={formData.pinNumber}
                  required
                  type="password"
                  placeholder="Always remember this"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <input required id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">
              I agree to the{" "}
              <span className="text-yellow-400 cursor-pointer">
                Terms & Privacy Policy
              </span>
            </label>
          </div>

          {/* Button */}
          <button className="w-full text-[15px] bg-yellow-400 text-black py-3 rounded-lg font-semibold mt-2">
            Create Account
          </button>
        </form>
        {/* Login */}
        <p className="text-center text-sm text-gray-400 mt-3">
          Already have an account?{" "}
          <Link href={"/login"} className="text-yellow-400 cursor-pointer">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
