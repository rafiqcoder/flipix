"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/public/images/logo.webp";
import Link from "next/link";
export default function AnimatedSections() {
  //sections data
  const privacyPolicyData = {
    title: "FLIPIX PRIVACY POLICY",
    intro:
      "Welcome to Flipix! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.",

    highlight: (
      <>
        1. We provide end-to-end encryption for all your data{" "}
        <span className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
          and do not share any data with third parties for any purpose
          whatsoever.
        </span>
      </>
    ),

    sections: [
      {
        heading: "Information We Collect",
        title: "We collect the following types of information:",
        content: [
          {
            type: "Personal Information",
            description:
              "Name, email address, phone number, and payment details.",
          },
          {
            type: "Usage Data",
            description:
              "Information about how you interact with our website and services, including IP address, browser type, and pages visited.",
          },
          {
            type: "Cookies",
            description:
              "We use cookies to enhance your experience on our site. Cookies are small data files stored on your device.",
          },
        ],
      },

      {
        heading: "How We Use Your Information",
        title: "We use the information we collect for the following purposes:",
        content: [
          "To provide and improve our services.",
          "To process transactions and manage your subscription.",
          "To communicate with you about updates, promotions, and support.",
          "To analyze website usage and enhance user experience.",
        ],
      },

      {
        heading: "Sharing Your Information",
        title:
          "We do not sell or rent your personal information to third parties. We may share your information with:",
        content: [
          {
            type: "Service Providers",
            description:
              "Third-party vendors who assist us in operating our website and providing our services.",
          },
          {
            type: "Legal Requirements",
            description:
              "When required by law or in response to legal requests.",
          },
          {
            type: "Business Transfers",
            description:
              "In connection with any merger, acquisition, or sale of company assets.",
          },
        ],
      },

      {
        heading: "Data Security",
        description:
          "We implement appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no online data transmission or storage system can be guaranteed to be 100% secure.",
      },

      {
        heading: "Your Rights",
        title: "You have the right to:",
        content: [
          "Access and update your personal information.",
          "Request deletion of your personal information.",
          "Opt-out of receiving promotional communications from us.",
        ],
        description: (
          <>
            To exercise these rights, please contact us at{" "}
            {
              <Link
                href="mailto:hello@flipix.in"
                className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]"
              >
                hello@flipix.in
              </Link>
            }{" "}
          </>
        ),
      },

      {
        heading: "Changes to This Policy",
        description:
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.",
      },
    ],
  };

  // contact data
  const contact = {
    section_number: 5,
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this policy, please contact us:",
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
        <div>
          <div className="md:py-2 py-1 lg:py-3">
            <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
              {privacyPolicyData.intro}
            </p>
          </div>

          <div className="px-4 py-6 bg-[#ffd7001a] mt-2 text-[16px] font-medium text-[#FFD700] rounded-md">
            {privacyPolicyData.highlight}
          </div>
        </div>

        {/* india guideline */}

        {/* account suspension */}
        {privacyPolicyData.sections.map((data, idx) => {
          return (
            <div
              key={idx}
              ref={(el) => addRef(el, idx)}
              className="section-fade"
            >
              <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
                {idx + 2 + ". " + data.heading}
              </h2>
              <p className="text-[#ccc] leading-relaxed md:mt-1 mt-1 lg:mt-2 font-semibold text-[14px] md:text-[16px]">
                {data.title}
              </p>
              <div className="md:mt-2 mt-1 lg:mt-3 space-y-2">
                {data.content ? (
                  data.content.map((cont, id) => {
                    return (
                      cont && (
                        <div key={id} className="flex items-center gap-3">
                          <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
                          {cont.type ? (
                            <p className="text-[#f0a500]">{cont.type}:</p>
                          ) : (
                            <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                              {cont}
                            </p>
                          )}
                          {cont.description && (
                            <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                              {cont.description}
                            </p>
                          )}
                        </div>
                      )
                    );
                  })
                ) : (
                  <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                    {data.description}
                  </p>
                )}
                {data.heading === "Your Rights" && (
                  <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
                    {data.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
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
