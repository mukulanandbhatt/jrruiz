"use client";
import React from "react";

const TrustSection = () => {
  const images = [
    {
      src: "/images/Building Trust/Frame 2121454049.svg",
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
      src: "/images/Building Trust/6696bdd9b8cadb78a732cfa8_HIPAA (1) 1.svg",
      alt: "HIPAA Compliant logo",
    },
    {
      src: "/images/Building Trust/Rectangle 161124545.png",
      alt: "ISO 27001 Certified logo",
    },
    {
      src: "/images/Building Trust/6696be8992e0cc2fd5889026_iso42001 4.svg",
      alt: "HI TRUST logo",
    },
    {
      src: "/images/Building Trust/6696be8992e0cc2fd5889026_iso42001 3.svg",
      alt: "USDP logo",
    },
    {
      src: "/images/Building Trust/6696be8992e0cc2fd5889026_iso42001 2.svg",
      alt: "NST logo",
    },
    {
      src: "/images/Building Trust/6696be8992e0cc2fd5889026_iso42001 1.svg",
      alt: "ISO 42001 logo",
    },
  ];

  return (
    <>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Building Trust</h2>
          <p className="mt-2 text-lg text-gray-600">
            Your data security is our top priority
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-16 md:max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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
              <h3 className="text-3xl font-bold text-indigo-700">90</h3>
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
