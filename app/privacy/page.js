import React from "react";
import AnimatedSections from "./AnimatedSections";
import Image from "next/image";
import logo from "@/public/images/logo.webp";
import Link from "next/link";
export const metadata = {
  title: "Flipix - Privacy Policy",
  description: "Flipix Privacy Policy",
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
            <span className="text-gradient">FLIPIX</span> PRIVACY POLICY
          </h1>
          <div className="hero-divider max-w-xs mx-auto" />
         
        </div>
      </div>
      <AnimatedSections />

     
      {/* Footer */}
      <footer className="border-t border-[rgba(240,165,0,0.12)] py-12 text-center px-6">
        <p className="text-[#555] text-xs tracking-wider mb-3">
          For any queries, please contact our support team.{" "}
        </p>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src={logo} alt="logo" width={100} height={300} />

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
