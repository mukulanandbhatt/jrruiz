"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const TelegramLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Telegram_2019_Logo.svg.png"
    alt="Logo"
  ></img>
);

const GoogleLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill="none"
    src="/images/HomePage/Google__G__logo.svg.webp"
    alt="logo"
  ></img>
);

const WhatsAppLogo = () => (
  <Image src={"/whatsapp.svg"} height={60} width={60} alt="Whatsapp" />
);

const NetFlixLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/netflix-mobile-application-logo-free-png.webp"
    alt="Logo"
  ></img>
);

const AmazonLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Amazon_icon.png"
    alt="Logo"
  ></img>
);

const FlipkartLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/png-transparent-flipkart-logo.png"
    alt="Logo"
    background="none"
  ></img>
);

const Brands = () => {
  const logos = [
    { name: "Telegram", Component: TelegramLogo },
    { name: "Google", Component: GoogleLogo },
    { name: "WhatsApp", Component: WhatsAppLogo },
    { name: "Netflix", Component: NetFlixLogo },
    { name: "Amazon", Component: AmazonLogo },
    { name: "Flipkart", Component: FlipkartLogo },
  ];

  return (
    <>
      {/* <style global jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-track {
          display: flex;
          width: 200%;
          animation: scroll 30s linear infinite;
        }

        .group:hover .scrolling-track {
          animation-play-state: paused;
        }
      `}</style> */}

      {/* <div className="overflow-hidden w-full mx-auto py-4 group bg-[#2563eb]">
        <div className="scrolling-track"> */}
      {/* Duplicate the logo set to create an infinite seamless loop */}
      <Marquee className="bg-theme py-5">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 md:px-8 flex-shrink-0"
          >
            <logo.Component />
            <span className="hidden sm:inline text-xl font-semibold ml-2 text-neutral-200">
              {logo.name}
            </span>
          </div>
        ))}
      </Marquee>
      {/* </div>
      </div> */}
    </>
  );
};

export default Brands;
