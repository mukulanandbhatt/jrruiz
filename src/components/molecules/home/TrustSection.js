"use client";
import React, { useState, useRef } from "react";

const TrustSection = () => {
  const images = [
    {
      src: "/images/Building Trust/Rectangle 161124544.png",
      alt: "AICPA SOC logo",
    },
    {
      src: "/images/Building Trust/iso27001_certified 1.png",
      alt: "ISO 27001 logo",
    },
    {
      src: "/images/Building Trust/gdpr-compliance-seal-template-vector-20871482 1.png",
      alt: "GDPR Certified logo",
    },
    {
      src: "/images/Building Trust/Rectangle 161124546.png",
      alt: "GDPR Data Protection logo",
    },
    {
      src: "/images/Building Trust/Rectangle 161124552.png",
      alt: "GDPR Approved logo",
    },
    {
      src: "/images/Building Trust/CMMC-1 1.png",
      alt: "Cybersecurity Maturity Model Compliant logo",
    },
    {
      src: "/images/Building Trust/Rectangle 161124547.png",
      alt: "HIPAA Compliant logo",
    },
    {
      src: "/images/Building Trust/Rectangle 161124545.png",
      alt: "ISO 27001 Certified logo",
    },
    {
      src: "/images/Building Trust/208597c8b7c122c36d67c4a5db0847c3bfb3e6c9.png",
      alt: "HI TRUST logo"
    },
    {
      src: "/images/Building Trust/a9c83c09bb622da318b00af25a889fac754ede5f.png",
      alt: "USDP logo"
    },
    {
      src: "/images/Building Trust/cdeb533296ad4ee002a1e16bfc28e5f6cddb357a.png",
      alt: "NST logo"
    },
    {
      src: "/images/Building Trust/9c1b697114933d21a9feba0383ffedd627f14445.png",
      alt: "ISO 42001 logo"
    },
  ];

  const carouselRef = useRef(null);

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200;
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };

  return (
    <>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Building Trust</h2>
          <p className="mt-2 text-lg text-gray-600">
            Your data security is our top priority
          </p>

          <div className="relative mt-12 flex items-center justify-center">
            <button
              onClick={slideLeft}
              className="absolute left-0 z-20 p-2 text-gray-600 hover:text-gray-800 focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110
  bg-white rounded-full shadow-md"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              ref={carouselRef}
              className="flex overflow-x-hidden scroll-smooth justify-start items-center space-x-8 md:space-x-12 p-4 w-full"
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-24 md:w-32">
                  <img src={image.src} alt={image.alt} className="mx-auto" />
                </div>
              ))}
            </div>

            <button
              onClick={slideRight}
              className="absolute right-0 z-20 p-2 text-gray-600 hover:text-gray-800 focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110
  bg-white rounded-full shadow-md"
              aria-label="Next Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* WorkFlow */}

      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-12">
            Our workflow. Supercharged.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-indigo-700">45%</h3>
              <p className="mt-4">
                Reduced costs compared to manual <br /> processes
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="flex items-center justify-center">
                <h3 className="text-3xl font-bold text-indigo-700">90</h3>
              </div>
              <p className="mt-4 ">
                Saved time when processing personal
                <br /> documents
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-indigo-700">X10</h3>
              <p className="mt-4 ">Faster solving your duties</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustSection;
