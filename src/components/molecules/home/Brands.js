"use client"
import React from "react";

const TelegramLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Telegram_2019_Logo.svg.png"
    alt='Logo'
  >
  </img>
);

const GoogleLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill="none"
    src="/images/HomePage/Google__G__logo.svg.webp"
    alt='logo'
  >
  </img>
);

const WhatsAppLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/f71ffb7ad7db43ccc7b1466de418f254.jpg"
    alt='Logo'
  >
  </img>
);

const NetFlixLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/netflix-mobile-application-logo-free-png.webp"
    alt='Logo'
  >
  </img>
);

const AmazonLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Amazon_icon.png"
    alt='Logo'
  >
  </img>
);

const FlipkartLogo = () => (
  <img
    width="70"
    height="70"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/png-transparent-flipkart-logo.png"
    alt='Logo'
    background='none'
  >
  </img>
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

  const logoCount = logos.length;

  return (
    <>
      <style global jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); 
          }
        }
        
        .animate-slide-loop {
          animation: slide 30s linear infinite; 
        }
        
        .group:hover .animate-slide-loop {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-full mx-auto py-4 group bg-[#2563eb]">
        
        <div 
          className="flex animate-slide-loop"
          style={{ 
            width: "200%"
          }} 
          aria-label="Scrolling brands logos"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-6 md:px-8 flex-shrink-0"
              style={{ minWidth: `${100 / logoCount}%` }} 
            >
              <logo.Component />
              <span className="hidden sm:inline text-xl font-semibold ml-2 text-gray-800">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;