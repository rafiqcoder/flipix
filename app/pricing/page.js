import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdWallet } from "react-icons/io";
import logo from "@/public/images/logo.webp";
export const metadata = {
  title: "Flipix - Pricing Plans",
  description: "Premium Plans",
};
function page() {
  const pricingPlans = [
    {
      id: "startup",
      title: "STARTUP",
      badge: "SAVE ₹100",
      price: {
        original: 299,
        current: 199,
        duration: "1 Month",
        perDay: "₹6.63/day",
      },
      features: [
        { text: "40 Credits (₹5/Flipix)", available: true },
        { text: "Daily Limit: 3 Flipix QR / day", available: false },
        { text: "Easy to Find", available: true },
        { text: "Approval Option", available: true },
        { text: "Branding with Name & Number", available: true },
        { text: "Chat with Photographer", available: true },
        { text: "Shareable on Social media", available: true },
        { text: "Download QR", available: true },
        { text: "Add Insta/FB/Website/ecard etc", available: true },
        { text: "Edit Songs & Details", available: true },
        { text: "Re-Arrange Sheets", available: true },
        { text: "AI & Operator Support", available: true },
        { text: "Rating System", available: true },
        { text: "Theft Protection", available: true },
        { text: "No App Needed To View", available: true },
      ],
      buttonText: "RECHARGE",
    },
    {
      id: "professional",
      title: "PROFESSIONAL",
      badge: "BEST DEAL",
      price: {
        original: 2199,
        current: 999,
        duration: "1 Year",
        perDay: "₹2.74/day",
      },
      features: [
        {
          text: "Unlimited Credits (T & C applied)",
          available: true,
          highlight: true,
        },
        { text: "Daily Limit: 3 Flipix QR / day", available: false },
        { text: "Easy to Find", available: true },
        { text: "Approval Option", available: true },
        { text: "Branding with Name & Number", available: true },
        { text: "Chat with Photographer", available: true },
        { text: "Shareable on Social media", available: true },
        { text: "Download QR", available: true },
        { text: "Add Insta/FB/Website/ecard etc", available: true },
        { text: "Edit Songs & Details", available: true },
        { text: "Re-Arrange Sheets", available: true },
        { text: "AI & Operator Support", available: true },
        { text: "Rating System", available: true },
        { text: "Theft Protection", available: true },
        { text: "No App Needed To View", available: true },
      ],
      buttonText: "RECHARGE",
    },
  ];
  return (
    <div className=" font-poppins">
      <div className="flex flex-col items-center justify-center md:py-6 lg:py-8 xl:py-16 px-4 ">
        <div className="text-center md:mb-6 sm:mb-4 mb-3 lg:mb-8">
          <p className="text-base md:text-xl lg:text-2xl font-medium text-white mb-2 mt-3 lg:mt-0">
            Our Pricing & Plans
          </p>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            This Plan is for Creating Flipix, 1 Credit is Used When You Create 1
            Flipix Album.
          </p>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            After Plan is Expired, You can't Create or View Flipix.
          </p>
          <h1 className="mt-3 md:text-4xl sm:w-3xl text-2xl lg:text-5xl font-medium text-[#f0a500] tracking-tighter">
            Studio version (for Photographers only)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl w-full justify-center">
          {/* Starter Card */}

          {pricingPlans.map(
            ({ features, price, buttonText, badge, title, id }) => {
              return (
                <div
                  key={id}
                  className={`${title === "PROFESSIONAL" ? "border-[#f0a40085]" : "border-gray-900"} bg-[#000000a6] border  rounded-xl px-8 pt-5 pb-5 w-full flex flex-col`}
                >
                  <div className="w-full flex  justify-between">
                    <div className="w-full">
                      {/* Badge */}
                      <div className=" md:mb-4 flex items-center justify-between mb-2 lg:mb-6">
                        <span className="inline-block py-1.5 font-semibold text-3xl text-[#f0a500] ">
                          {title}
                        </span>
                        <div className="px-2 py-1.5 rounded text-white bg-[#f0a500] text-[14px] font-semibold">
                          {badge}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4.5 flex items-center justify-between">
                        <h2 className=" md:text-3xl text-2xl lg:text-4xl font-medium text-white">
                          <span className=" line-through text-[17px] font-medium text-gray-300 mr-3">
                            ${price.original}
                          </span>
                          ${price.current}
                          <span className="text-base font-medium text-white">
                            /{price.duration}
                          </span>
                        </h2>
                        <div className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                          {price.perDay}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Line */}
                  <div className="border-b border-gray-800 mb-4.5"></div>

                  {/* Features */}
                  <div className="grow md:mb-4 mb-3 lg:mb-6">
                    <ul className="space-y-3.5">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-4.5 h-4.5 rounded-sm bg-rose-500 flex items-center justify-center shrink-0">
                            {feature.available && (
                              <svg
                                width="9"
                                height="6"
                                viewBox="0 0 9 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m7.75.75-4.812 4L.75 2.932"
                                  fill="#ff2056"
                                />
                                <path
                                  d="m7.75.75-4.812 4L.75 2.932"
                                  stroke="#fff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Line */}
                  <div className="border-b border-gray-800 mb-4.5"></div>

                  {/* Annual Toggle */}

                  {/* CTA Button */}
                  <div className="w-full">
                    <Button
                      className={
                        "w-full cursor-pointer flex border border-gray-900 items-center justify-center gap-5 transition duration-300 px-4 text-white " +
                        `${title === "PROFESSIONAL" ? "bg-[#f0a400]" : " bg-transparent hover:bg-[#f0a400bb]"}`
                      }
                    >
                      {buttonText}
                      <IoMdWallet className="text-white text-xl" />
                    </Button>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[rgba(240,165,0,0.12)] py-12 text-center px-6">
        <p className="text-[#555] text-xs tracking-wider mb-3">
          For any queries, please contact our support team.{" "}
        </p>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} height={300} />
          </Link>

          <p className="text-[#555] text-xs tracking-wider">
            © 2026 Flipix. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#555] tracking-wide uppercase">
            <Link
              href="/privacy"
              className="hover:text-[#f0a500] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/tearms"
              className="hover:text-[#f0a500] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;
