"use client";
import React from "react";
import Image from "next/image";

const TrustedSection = () => {
  const logos = [
    { src: "/images/ResourcesPage/Fictional company logo.svg", alt: "Command+R" },
    { src: "/images/ResourcesPage/GlobalBankLogo.svg", alt: "GlobalBank" },
    { src: "/images/ResourcesPage/SpheruleLogo.svg", alt: "Spherule" },
    { src: "/images/ResourcesPage/Layers.svg", alt: "Layers" },
    { src: "/images/ResourcesPage/Alt_Shift.svg", alt: "Alt+Shift" },
    { src: "/images/ResourcesPage/Luminous.svg", alt: "Luminous" },
    { src: "/images/ResourcesPage/LightBox.svg", alt: "Lightbox" },
    { src: "/images/ResourcesPage/Catalog.svg", alt: "Catalog" },
    { src: "/images/ResourcesPage/Capsule.svg", alt: "Capsule" },
    { src: "/images/ResourcesPage/Hourglass.svg", alt: "Hourglass" },
  ];

  return (
    <section className="relative py-16 px-6 sm:px-12 lg:px-20 bg-white border border-[#d9d9ff] rounded-lg">
      <div
        className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url('/images/wave.svg')`,
          transform: "scaleX(-1)",
        }}
      ></div>

      <div
        className="absolute right-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/images/wave.svg')`, bottom: "-240px" }}
      ></div>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          Trusted by Modern Teams
        </h2>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Swap placeholders with real customer logos and wins.
        </p>
      </div>

      <div className="mt-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={50}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2">
  <div className="max-w-xl border-b-4 border-b-[#2779E2] border-x-2 border-l-[#BFDAFD61] border-r-[#BFDAFD61] rounded-xl p-4 sm:p-6 text-left bg-white shadow-sm hover:shadow-md transition">
    <h3 className="text-blue-600 font-semibold text-lg sm:text-xl lg:text-2xl">
      How SME X reduced contract disputes by 40%
    </h3>
    <p className="mt-2 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
      Clario.ai streamlined review workflows and auto-flagged risky clauses, cutting disputes and review cycles.
    </p>
  </div>

  <div className="max-w-xl border-b-4 border-b-[#2779E2] border-x-2 border-l-[#BFDAFD61] border-r-[#BFDAFD61] rounded-xl p-4 sm:p-6 text-left bg-white shadow-sm hover:shadow-md transition">
    <h3 className="text-blue-600 font-semibold text-lg sm:text-xl lg:text-2xl">
      Faster onboarding at FinServ Y
    </h3>
    <p className="mt-2 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
      Automated summaries slashed first-response times from days to
      minutes across 3 regions.
    </p>
  </div>
</div>

    </section>
  );
};

export default TrustedSection;