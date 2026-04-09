"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import Link from "next/link";
export default function RegisterForm() {
  // full form data state
  const [formData, setFormData] = useState({
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
    name: "",
    mobileNumber: "",
    email: "",
    fullAddress: "",
    createdPin: "",
    confirmPin: "",
    pinCode: "",
    studioName: "",
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

  console.log(formData);
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
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              required
              type="text"
              placeholder="Your full name"
              className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
            />
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>

          {/* Studio Name */}
          <div>
            <label className="text-sm flex gap-2 text-[#b3b3b3]">
              Studio Name <span className=" rounded-full text-yellow">*</span>
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, studioName: e.target.value })
              }
              value={formData.studioName}
              required
              type="text"
              placeholder="Your studio name"
              className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
            />
            {/* <p className="text-xs text-red-500 mt-1">
              Only letters and spaces allowed
            </p> */}
          </div>

          {/* Mobile */}
          <div className="flex gap-2">
            <div className=" w-[75%]">
              <label className="text-sm flex gap-2 text-[#b3b3b3]">
                Mobile number{" "}
                <span className=" rounded-full text-yellow">*</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
                value={formData.mobileNumber}
                required
                type="tel"
                placeholder="10 digit number"
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Create 4-Digit PIN
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, createdPin: e.target.value })
                  }
                  value={formData.createdPin}
                  required
                  type="password"
                  placeholder="* * * *"
                  className="bg-[#111] focus:shadow-inputsShadows font-light text-white rounded-lg px-3 text-[13px] tracking-wide mt-1 py-3 border border-[#ffffff12] focus:border-[#f0a500] outline-none w-full"
                />
              </div>
              <div>
                <label className="text-sm flex gap-2 text-[#b3b3b3]">
                  Confirm PIN
                  <span className=" rounded-full text-yellow">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPin: e.target.value })
                  }
                  value={formData.confirmPin}
                  required
                  type="password"
                  placeholder="* * * *"
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
