import React from "react";
import AnimatedSections from "./AnimatedSections";
import Image from "next/image";
import logo from "@/public/images/logo.webp";
export const metadata = {
  title: "Flipix Terms & Conditions",
  description: "Read the official Terms and Conditions of Flipix platform.",
};
function page() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto font-poppins  text-white font-body">
      <div className=" md:px-4 px-3 lg:px-6 py-5 md:py-6 lg:py-8 text-center ">
        <div className="">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="mx-auto mb-3 w-[170px] "
          />
          <h1 className="font-display text-5xl md:text-7xl tracking-widest mb-3">
            <span className="text-gradient">FLIPIX</span> TERMS AND CONDITIONS
          </h1>
          <div className="hero-divider max-w-xs mx-auto" />
        </div>
      </div>
      <AnimatedSections />
      {/* Footer */}
      <footer className="border-t border-[rgba(240,165,0,0.12)] py-12 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src={logo} alt="logo" width={100} height={300} />
          <p className="text-[#555] text-xs tracking-wider">
            © 2026 Flipix. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default page;
