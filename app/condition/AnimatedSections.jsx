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

  //   premium plans data
  const premiumPlans = [
    {
      category: "Photographers",
      version: "Studio",
      daily_limit: "3 Flipix 3D albums",
      plans: [
        {
          name: "Monthly Plan",
          price_inr: 199,
          duration: "per month",
          credits: 40,
        },
        {
          name: "Yearly Plan",
          price_inr: 999,
          duration: "per year",
          credits_per_day: 3,
        },
      ],
    },
    {
      category: "Lab Owners",
      version: "Lab",
      daily_limit: "No daily limit",
      plans: [
        {
          name: "Monthly Plan",
          price_inr: 1200,
          duration: "per month",
          credits: 50,
        },
        {
          name: "Half Yearly Plan",
          price_inr: 6000,
          duration: "per year",
          credits: 300,
        },
        {
          name: "Yearly Plan",
          price_inr: 12000,
          duration: "per year",
          credits: 600,
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Main Content */}
      <main className=" md:px-4 px-3 lg:px-6 py-3 sm:py-5 md:space-y-8 sm:space-y-6 space-y-4 lg:space-y-10">
        <div ref={(el) => addRef(el, 0)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-medium text-[#f0a500] gold-line">
            Welcome to Flipix!
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            Welcome to Flipix! These Terms and Conditions govern your use of our
            website and services. By accessing or using our site, you agree to
            be bound by these terms. If you do not agree with these terms,
            please do not use our site.
          </p>
        </div>

        {/* Our Vision */}
        <div ref={(el) => addRef(el, 1)} className="section-fade">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            1. Services
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px]">
            Flipix provides a platform for creating and managing 3D virtual
            wedding albums (Flipbook). Our services include:
          </p>
          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Access to Flipix's web-based application.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Options to create and customize 3D virtual albums.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Shareable viewing of Flipbooks for clients.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Editing and management tools for photographers and lab owners.
              </p>
            </div>
          </div>
        </div>

        {/* Data Storage and Server Costs*/}
        <div ref={(el) => addRef(el, 2)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            2. Data Storage and Server Costs
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            At Flipix, we understand how valuable your data is. Once you upload
            and create a 3D album, we store it securely —{" "}
            <span className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]">
              just for a few days or months, but for decades.
            </span>
          </p>

          <p className="text-[#ccc] md:mt-3 mt-2 lg:mt-5 leading-relaxed text-[14px] md:text-[15px] md:text-base">
            While you may pay once to update photos and create a flipbook, we
            continue to maintain and host your data long-term, which requires
            ongoing server costs from our side. This is why our pricing might
            appear higher at first — but unlike other services, we do not
            auto-delete your albums. Your memories remain safe and accessible.
          </p>

          <p className="text-red-600 md:mt-3 mt-2 lg:mt-5 leading-relaxed text-[14px] font-semibold md:text-[15px] md:text-base">
            Please Note:
          </p>
          <p className="text-red-600 md:mt-1 mt-1 lg:mt-2 leading-relaxed text-[14px] font-semibold md:text-[15px] md:text-base">
            Albums created during the free trial are considered demo/test albums
            only and not intended for commercial or long-term use. Such demo
            albums may be deleted after 30 days unless a plan is activated —
            even a one-time plan ensures your album stays safe and accessible
            for life.
          </p>
        </div>

        {/* user responsibilites */}
        <div ref={(el) => addRef(el, 3)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            3. User Responsibilities
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px]">
            As a user, you agree to:
          </p>
          <div className="md:mt-3 mt-2 lg:mt-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Provide accurate and complete information.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Use our services only for lawful purposes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Maintain the confidentiality of your account credentials.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Notify us immediately of any unauthorized use of your account.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-[#ccc]"></div>
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                Avoid misuse of free trial services or creating multiple fake
                accounts.
              </p>
            </div>
          </div>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:mt-3 mt-2 lg:mt-5">
            Violation of any terms may result in{" "}
            <span className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]">
              account suspension or permanent ban
            </span>
            , along with loss of data access.
          </p>
        </div>

        {/* subscriptions */}
        <div ref={(el) => addRef(el, 4)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            4. Subscription Plans
          </h2>
          <div>
            <div className="flex items-center gap-3 md:mt-2 mt-1 lg:mt-3 ">
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                We offer the following subscription plans:
              </p>
            </div>
            <div className="flex items-center gap-3 md:mt-3 mt-2 lg:mt-5">
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                For {premiumPlans[0].category} ({premiumPlans[0].version}{" "}
                version - Daily {premiumPlans[0].daily_limit})
              </p>
            </div>
            <div className="grid  mt-1 lg:mt-2  sm:grid-cols-2 gap-4">
              {premiumPlans[0].plans.map((f, i) => (
                <div
                  key={i}
                  className="card-hover cursor-default bg-[#111] border border-[rgba(240,165,0,0.12)] rounded-lg p-5 flex gap-4 items-start"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                      <p className="font-semibold text-[#f0a500] text-sm tracking-wide">
                        {f.name}
                      </p>
                      <p className="font-semibold text-[#f0a500] text-[15px] tracking-wide">
                        ₹{f.price_inr}{" "}
                        <span className="text-[#ccc] leading-relaxed font-medium text-[15px] md:text-[15px]">{`(${f.duration})`}</span>
                      </p>
                    </div>
                    <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px] md:mt-3 mt-2 lg:mt-5 ">
                      Allowing up to {f.credits} Flipix credits.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 md:mt-3 mt-2 lg:mt-5">
              <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px]">
                For {premiumPlans[1].category} ({premiumPlans[1].version}{" "}
                version - Daily {premiumPlans[1].daily_limit})
              </p>
            </div>
            <div className="grid mt-1 lg:mt-2  sm:grid-cols-2 gap-4">
              {premiumPlans[1].plans.map((f, i) => (
                <div
                  key={i}
                  className="card-hover cursor-default bg-[#111] border border-[rgba(240,165,0,0.12)] rounded-lg p-5 flex gap-4 items-start"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                      <p className="font-semibold text-[#f0a500] text-sm tracking-wide">
                        {f.name}
                      </p>
                      <p className="font-semibold text-[#f0a500] text-[15px] tracking-wide">
                        ₹{f.price_inr}{" "}
                        <span className="text-[#ccc] leading-relaxed font-medium text-[15px] md:text-[15px]">{`(${f.duration})`}</span>
                      </p>
                    </div>
                    <p className="text-[#ccc] leading-relaxed font-semibold text-[15px] md:text-[16px] md:mt-3 mt-2 lg:mt-5 ">
                      Allowing up to {f.credits} Flipix credits.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment and Refunds */}
        <div ref={(el) => addRef(el, 5)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            5. Payment and Refunds
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            Payments for subscriptions are processed through our payment
            gateway. We do not store your payment information. All fees are
            non-refundable except as required by law.
          </p>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:mt-3 mt-2 lg:mt-5 md:text-base">
            In case of any issues with billing, please contact our support team
            at At{" "}
            <Link
              href="mailto:hello@flipix.in"
              className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]"
            >
              hello@flipix.in
            </Link>
            .
          </p>
        </div>

        {/* 6. Intellectual Property
         */}
        <div ref={(el) => addRef(el, 6)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            6. Intellectual Property
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            All content and materials on our website, including text, graphics,
            logos, and software, are the property of Flipix or its licensors.
            You may not use or reproduce any content without our express
            permission.
          </p>
        </div>

        <div ref={(el) => addRef(el, 7)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            7. Limitation of Liability
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            Flipix is not liable for any indirect, incidental, or consequential
            damages arising from your use of our services. Our total liability
            is limited to the amount paid for the subscription, if any.
          </p>
        </div>

        <div ref={(el) => addRef(el, 8)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            8. Changes to Terms
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            We reserve the right to update or modify these terms at any time. We
            will notify you of any significant changes, and your continued use
            of our services will constitute acceptance of the updated terms.
          </p>
        </div>

        {/* Contact Card */}
        <div ref={(el) => addRef(el, 9)} className="section-fade">
          <div className="contact-card rounded-2xl px-8 py-12 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[#888] mb-3 font-medium">
              Get In Touch
            </p>
            <h3 className="font-display sm:text-3xl text-2xl md:text-4xl lg:text-5xl tracking-widest text-gradient mb-8">
              9. CONTACT US
            </h3>
            <div className="hero-divider max-w-32 mx-auto mb-8 opacity-40" />
            <p className="text-[#999] text-sm md:text-base leading-relaxed">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at:
              <Link
                href="mailto:hello@flipix.in"
                className="hover:border-b-2 border-[#f0a500] font-semibold text-[#f0a500]"
              >
                hello@flipix.in
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:hello@flipix.in"
                className="inline-block bg-[#f0a500] text-black font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#ffc93c] transition-colors"
              >
                Email Us
              </Link>
              <Link
                href="https://www.flipix.in"
                className="inline-block border border-[#f0a500]/50 text-[#f0a500] font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:border-[#f0a500] hover:bg-[#f0a500]/5 transition-all"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
