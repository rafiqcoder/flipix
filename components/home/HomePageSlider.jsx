"use client";
import React, { useEffect, useState } from "react";
import Card from "../common/Cards";
import { BsFillStarFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import rainbowDigital from "@/public/images/rainbow-digital.jpg";
import raviDigital from "@/public/images/ravi-digital.jpg";
import ditComputer from "@/public/images/dit-computer.jpg";
import skyNet from "@/public/images/sky-net.jpg";
import royDesigning from "@/public/images/roy-designing.png";

function HomePageSlider() {
  // printing partners data
  const partners = [
    {
      id: 1,
      name: "Rainbow digital color lab",
      location: "Bhagalpur",
      image: rainbowDigital,
      whatsAppLink:
        "https://api.whatsapp.com/send?phone=916202083032&text=Hi%20%F0%9F%91%8B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20Maine%20apka%20ad%20*FlipiX%20India*%20par%20dekha%20aur%20mai%20apke%20printing%2Fdesigning%20service%20ke%20bare%20mai%20janna%20chahta%20hoon!",
      isPro: true,
    },
    {
      id: 2,
      name: "Ravi digital colour lab",
      location: "Kanpur",
      image: raviDigital,
      whatsAppLink:
        "https://api.whatsapp.com/send?phone=919927842444&text=Hi%20%F0%9F%91%8B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20Maine%20apka%20ad%20*FlipiX%20India*%20par%20dekha%20aur%20mai%20apke%20printing%2Fdesigning%20service%20ke%20bare%20mai%20janna%20chahta%20hoon!",
      isPro: false,
    },
    {
      id: 3,
      name: "DIT COMPUTERS MASWASI",
      location: "Rampur",
      image: ditComputer,
      whatsAppLink:
        "https://api.whatsapp.com/send?phone=918395968002&text=Hi%20%F0%9F%91%8B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20Maine%20apka%20ad%20*FlipiX%20India*%20par%20dekha%20aur%20mai%20apke%20printing%2Fdesigning%20service%20ke%20bare%20mai%20janna%20chahta%20hoon!",
      isPro: false,
    },
    {
      id: 4,
      name: "Sky Net Creations",
      location: "Meerut",
      image: skyNet,
      whatsAppLink:
        "https://api.whatsapp.com/send?phone=919761677886&text=Hi%20%F0%9F%91%8B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20Maine%20apka%20ad%20*FlipiX%20India*%20par%20dekha%20aur%20mai%20apke%20printing%2Fdesigning%20service%20ke%20bare%20mai%20janna%20chahta%20hoon!",
      isPro: false,
    },
    {
      id: 5,
      name: "R.R Roy Designing Lab",
      location: "Bulandshahr",
      image: royDesigning,
      whatsAppLink:
        "https://api.whatsapp.com/send?phone=917530967320&text=Hi%20%F0%9F%91%8B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20Maine%20apka%20ad%20*FlipiX%20India*%20par%20dekha%20aur%20mai%20apke%20printing%2Fdesigning%20service%20ke%20bare%20mai%20janna%20chahta%20hoon!",
      isPro: false,
    },
  ];
  // carousel functionality
  const [slide, setSlide] = useState(0);
  const [startCarousel, setStartCausel] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1100) {
        setStartCausel(true);
      }
    });
  }, []);
  useEffect(() => {
    if (partners.length > 8) {
      setStartCausel(true);
    }
  }, [partners]);
  const prevItem = () => {
    if (startCarousel) {
      if (slide > 0) {
        setSlide(slide - 1);
      } else {
        setSlide(partners.length - 1);
      }
      console.log(slide);
    }
  };
  const nextItem = () => {
    if (startCarousel) {
      if (slide < partners.length - 1) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
      console.log(slide);
    }
  };

  return (
    <div className=" relative px-2 overflow-x-hidden h-auto w-full">
      <div
        onClick={prevItem}
        className=" left-0 z-20 absolute top-[50%] -translate-y-[50%] transition duration-200 cursor-pointer text-[#f4c720] hover:text-black bg-black p-0.5 -[17px] hover:bg-yellow rounded-full border border-[#f4c720]"
      >
        <MdKeyboardArrowLeft className=" md:text-xl text-lg font-bold lg:text-2xl " />
      </div>
      <div
        onClick={nextItem}
        className=" absolute z-20 top-[50%] right-0 -translate-y-[50%] transition duration-200 cursor-pointer text-[#f4c720] hover:text-black bg-black p-0.5 -[17px] hover:bg-yellow rounded-full border border-[#f4c720]"
      >
        <MdKeyboardArrowRight className=" md:text-xl text-lg font-bold lg:text-2xl " />
      </div>
      <div className="flex px-5 flex-nowrap overflow-y-hidden py-5 gap-4 h-full w-full ">
        {partners.map((partner) => (
          <div
            className={`shrink-0 overflow-hidden cardsParent px-3  h-[270px] cursor-pointer transition duration-300 hover:-translate-y-2 hover:scale-[103%] bg-gray-bg rounded-xl border border-border-color 
  ${partner.isPro ? "w-[60%] sm:w-[40%] customShadow md:w-[30%] lg:w-[20%] py-1" : "w-[50%] sm:w-[33.33%] py-3 md:w-[25%] lg:w-[16.66%]"}`}
            key={partner.id}
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {partner.isPro && (
              <div className="px-1 pb-1 w-full  flex items-center justify-end">
                <div className="px-2 border border-[#f4c7204d] bg-[#f4c72026] py-1 text-yellow uppercase text-[11px] flex items-center gap-1 font-medium rounded-md">
                  <BsFillStarFill />
                  <span>Pro</span>
                </div>
              </div>
            )}
            <Card
              className={partner.isPro && "px-8"}
              link={partner.whatsAppLink}
              name={
                <h3
                  className={`${partner.isPro ? "text-[16px]" : "text-[13px] md:text-[13px]"}   text-[#ddd] font-semibold line-clamp-1`}
                >
                  {partner.name}
                </h3>
              }
              location={
                <p
                  className={`uppercase mt-1 text-[11px] text-[#666] py-1 font-light ${partner.isPro && "text-yellow"}`}
                >
                  {partner.location}
                </p>
              }
              img={partner.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageSlider;
