"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/public/images/logo.webp";
import Link from "next/link";
export default function AnimatedSections() {
  const sectionsRef = useRef([]);
  // observe sections for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el, index) => {
    if (el) sectionsRef.current[index] = el;
  };



  return (
    <div className="w-full">
      {/* Main Content */}
      <main className=" md:px-4 px-3 lg:px-6 py-3 sm:py-2 md:space-y-8 sm:space-y-6 space-y-4 lg:space-y-10">
        <div className="md:py-2 py-1 lg:py-3">
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            By registering for the Flipix Hyper program, you (the Printing Lab)
            agree to abide by the rules and regulations set by Flipix India.
            Failure to comply with these guidelines may result in temporary or
            permanent account suspension without any refund.
          </p>
        </div>

        {/* india guideline */}
        <div ref={(el) => addRef(el, 0)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            1. Compliance with Flipix India Guidelines
          </h2>

          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                The printing lab must strictly follow all rules, policies, and
                operational guidelines provided by Flipix India.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Any violation of Flipix's policies will lead to account
                suspension or permanent deletion.
              </p>
            </div>
          </div>
        </div>

        {/* account suspension */}
        <div ref={(el) => addRef(el, 1)} className="section-fade">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f0a500] gold-line">
            2. Account Suspension & Termination
          </h2>
          <p className="text-[#ccc] leading-relaxed md:mt-3 mt-2 lg:mt-5  text-[14px] md:text-[15px]">
            Flipix India reserves the right to temporarily or permanently delete
            an account under the following circumstances:
          </p>
          <div className="md:mt-2 mt-1 lg:mt-3 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If the printing lab fails to comply with Flipix India's rules
                and regulations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If incorrect, false, or misleading information/documents are
                provided during registration.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If Flipix India services are not available in a specific region
                (e.g., Bihar) but the printing lab uses a false address to gain
                access.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If the printing lab is found to be using Flipix services in an
                unauthorized or fraudulent manner.
              </p>
            </div>
          </div>
        </div>

        {/* no refund policy */}
        <div ref={(el) => addRef(el, 2)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            3. No Refund Policy
          </h2>

          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If an account is suspended or terminated due to policy
                violations, any recharge amount will not be refunded.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Flipix India holds the full right to deny refunds in case of
                misuse, policy breach, or fraudulent activity.
              </p>
            </div>
          </div>
        </div>

        {/* verification kyc */}
        <div ref={(el) => addRef(el, 3)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            4. Verification & KYC Checks
          </h2>

          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Flipix India will conduct regular verification and KYC checks to
                ensure compliance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                If required, physical officer visits may also be conducted for
                further verification.
              </p>
            </div>
          </div>
        </div>

        {/* legal authority */}
        <div ref={(el) => addRef(el, 4)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            5. Legal Authority & Final Decision
          </h2>

          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Flipix India holds full authority to take action against any
                non-compliance and reserves the right to terminate access at its
                sole discretion.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                The final decision regarding any disputes or policy violations
                will be made by Flipix India, and the printing lab must accept
                and adhere to it.
              </p>
            </div>
          </div>
        </div>

        
      </main>
    </div>
  );
}
