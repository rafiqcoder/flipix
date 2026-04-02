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

  //   why choose us data
  const features = [
    {
      title: "Innovative Technology",
      desc: "Our proprietary 3D technology ensures that your albums stand out with stunning depth and detail.",
    },
    {
      title: "User-Friendly Platform",
      desc: "Our web-based application is designed with simplicity in mind, making it easy for studio owners, photographers, and clients to manage their albums and reports.",
    },
    {
      title: "Customizable Options",
      desc: "Tailor your albums to fit your personal style and preferences with our extensive customization options.",
    },
    {
      title: "Exceptional Quality",
      desc: "We use the highest quality materials and techniques to ensure that every album is as durable as it is beautiful.",
    },
  ];

  return (
    <div className="w-full">
      {/* Main Content */}
      <main className=" md:px-4 px-3 lg:px-6 py-3 sm:py-5 md:space-y-8 sm:space-y-6 space-y-4 lg:space-y-10">
        <div ref={(el) => addRef(el, 0)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            Welcome to Flipix!
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            At Flipix, we're passionate about transforming how you experience
            memories. Founded on the belief that every moment deserves to be
            cherished in a unique and captivating way, Flipix specializes in
            bringing your precious memories to life through innovative 3D
            wedding albums.
            <span className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]">
              3D wedding albums
            </span>
            .
          </p>
        </div>

        {/* Our Vision */}
        <div ref={(el) => addRef(el, 1)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            Our Vision
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            Our vision is to redefine the traditional photo album experience. We
            combine cutting-edge technology with artistic design to create
            stunning 3D albums that make your most cherished moments feel as
            though they're jumping off the page. With Flipix, you're not just
            preserving memories; you're creating a timeless, immersive
            experience.
          </p>
        </div>

        {/* What We Do */}
        <div ref={(el) => addRef(el, 2)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            What We Do
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            <Link
              href={"/"}
              className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]"
            >
              Flipix
            </Link>{" "}
            offers a revolutionary approach to displaying wedding albums. Our 3D
            technology allows you to view your wedding photos in an interactive
            and visually engaging format, providing a dynamic way to relive the
            joy of your special day. Whether you're a bride, groom, or
            photographer, our platform makes it easy to upload, customize, and
            share your albums in a format that's both beautiful and
            unforgettable.
          </p>
        </div>

        {/* Why Choose Us */}
        <div ref={(el) => addRef(el, 3)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="card-hover bg-[#111] border border-[rgba(240,165,0,0.12)] rounded-lg p-5 flex gap-4 items-start"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#f0a500]" />
                </div>
                <div>
                  <p className="font-semibold text-[#f0a500] text-sm mb-1 tracking-wide">
                    {f.title}
                  </p>
                  <p className="text-[#999] text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div ref={(el) => addRef(el, 4)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            Our Commitment
          </h2>
          <p className="text-[#ccc] leading-relaxed text-[14px] md:text-[15px] md:text-base">
            At{" "}
            <Link
              href={"/"}
              className="text-[15px] md:text-[17px] lg:text-lg font-semibold text-[#f0a500]"
            >
              Flipix
            </Link>
            , we are committed to providing exceptional service and an
            outstanding user experience. We understand the importance of your
            memories and strive to deliver products that exceed your
            expectations. Our dedicated team is here to support you every step
            of the way, from album creation to delivery.
          </p>
        </div>

        {/* Join Us */}
        <div ref={(el) => addRef(el, 5)} className="section-fade">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            Join Us on Our Journey
          </h2>
          <div className=" text-2xl md:text-3xl lg:text-4xl font-light text-[#f0a500] gold-line">
            <p className="text-[#ccc] leading-relaxed text-[15px] md:text-base">
              We invite you to explore Flipix and discover how our 3D albums can
              add a new dimension to your memories. Whether you're looking to
              create a stunning wedding album or want to offer your clients a
              unique product, Flipix is here to help you make every moment
              memorable.
            </p>
            <p className="text-[#ccc] leading-relaxed text-[15px] md:text-base">
              Thank you for choosing Flipix. We look forward to helping you
              celebrate your special moments in a truly extraordinary way.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div ref={(el) => addRef(el, 6)} className="section-fade">
          <div className="contact-card rounded-2xl px-8 py-12 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[#888] mb-3 font-medium">
              Get In Touch
            </p>
            <h3 className="font-display text-4xl md:text-5xl tracking-widest text-gradient mb-8">
              CONTACT US
            </h3>
            <div className="hero-divider max-w-32 mx-auto mb-8 opacity-40" />
            <p className="text-[#999] text-sm md:text-base leading-relaxed">
              For more information, inquiries, or support, please reach out to
              us at{" "}
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
