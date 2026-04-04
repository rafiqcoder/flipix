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
        <div className=" md:py-2 px-2 py-1 lg:py-3 ">
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            Thank you for choosing Flipix. We are committed to providing you
            with the best possible service. If you are not satisfied with your
            purchase, please review our refund policy to understand the process
            for requesting a refund.
          </p>
        </div>

        {/* india guideline */}
        <div ref={(el) => addRef(el, 0)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            1. Eligibility for Refund
          </h2>
          <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
            Refunds are available under the following conditions:
          </p>
          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                If you experience technical issues with the Flipix platform that
                we are unable to resolve within a reasonable time frame.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                If there is a billing error that was not corrected after
                contacting our support team.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                If you cancel your subscription within the first 7 days of
                purchase and have not used any services.
              </p>
            </div>
          </div>
        </div>

        {/* account suspension */}
        <div ref={(el) => addRef(el, 0)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            2. Non-Refundable Items
          </h2>
          <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
            The following items are non-refundable:
          </p>
          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                Fees for subscription plans after the initial 7-day period.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                Any services or features used during the subscription period.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                Custom branding or design work completed as part of your
                subscription.
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
