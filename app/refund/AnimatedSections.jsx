"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/public/images/logo.webp";
import Link from "next/link";
export default function AnimatedSections() {
  // flipix refund policy data
  const flipixRefundPolicy = {
    company_name: "Flipix",
    policy_sections: [
      {
        section_number: 1,
        title: "Eligibility for Refund",
        content: "Refunds are available under the following conditions:",
        conditions: [
          "If you experience technical issues with the Flipix platform that we are unable to resolve within a reasonable time frame.",
          "If there is a billing error that was not corrected after contacting our support team.",
          "If you cancel your subscription within the first 7 days of purchase and have not used any services.",
        ],
      },
      {
        section_number: 2,
        title: "Non-Refundable Items",
        content: "The following items are non-refundable:",
        conditions: [
          "Fees for subscription plans after the initial 7-day period.",
          "Any services or features used during the subscription period.",
          "Custom branding or design work completed as part of your subscription.",
        ],
      },
      {
        section_number: 3,
        title: "Refund Request Process",
        content: "To request a refund, please follow these steps:",
        conditions: [
          <>
            1. Contact our support team via email at{" "}
            {
              <Link
                href="mailto:hello@flipix.in"
                className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]"
              >
                hello@flipix.in
              </Link>
            }{" "}
            with your refund request.
          </>,
          "2. Provide your order details and a brief explanation of the reason for your refund request.",
          "3. Our team will review your request and respond within 5-7 business days.",
          "4. If your request is approved, we will process the refund to the original payment method used for the purchase.",
        ],
      },
      {
        section_number: 4,
        title: "Changes to the Refund Policy",
        content:
          "We may update or modify this refund policy at any time. Any changes will be posted on this page, and your continued use of our services will constitute acceptance of the updated policy.",
      },
    ],
    support_email: "hello@flipix.in",
  };

  // contact data
  const contact = {
    section_number: 5,
    title: "Contact Us",
    content:
      "If you have any questions or concerns regarding our refund policy, please contact us:",
    details: {
      email: (
        <>
          Email:{" "}
          <span className="text-yellow-500 font-semibold">hello@flipix.in</span>
        </>
      ),
      address: "Address: Delhi, India",
    },
  };

  // observation section
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

        {flipixRefundPolicy.policy_sections.map(
          ({ section_number, title, content, conditions }, idx) => {
            return (
              <div
                key={idx}
                ref={(el) => addRef(el, idx)}
                className="section-fade"
              >
                <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
                  {section_number}. {title}
                </h2>
                <p
                  className={
                    conditions
                      ? "text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]"
                      : "text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base"
                  }
                >
                  {content}
                </p>
                <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
                  {conditions?.map((condition, id) => {
                    return (
                      <div key={id} className="flex items-center gap-3">
                        {section_number !== 3 && (
                          <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
                        )}
                        <p className="text-[#ccc] leading-relaxed   text-[14px] md:text-[15px]">
                          {condition}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          },
        )}

        {/* Contact Card */}
        <div ref={(el) => addRef(el, 6)} className="section-fade">
          <div className="contact-card rounded-2xl px-8 md:py-5 py-3 lg:py-7 text-center">
            <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#888] mb-3 font-medium">
              Get In Touch
            </p>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-widest text-gradient mb-8">
              {contact.section_number}.{contact.title}
            </h3>
            <p className="text-[#999] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              {contact.content}{" "}
              <Link
                href="mailto:hello@flipix.in"
                className="hover:border-b-2 border-[#f0a500] font-semibold text-[#f0a500]"
              >
                {contact.details.email}
              </Link>{" "}
              or visit our website at{" "}
              <Link
                href="https://www.flipix.in"
                className="hover:border-b-2 border-[#f0a500] font-semibold text-[#f0a500]"
              >
                www.flipix.in
              </Link>
              .
            </p>

            <div className=" md:mt-3 mt-2 lg:mt-5 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:hello@flipix.in"
                className="inline-block bg-[#f0a500] text-black font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#ffc93c] transition-colors"
              >
                Email Us
              </Link>
            </div>
            <div className="text-xs tracking-[0.2em] mt-3 md:mt-5 uppercase text-[#888] mb-1 font-medium">
              {contact.details.address}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
