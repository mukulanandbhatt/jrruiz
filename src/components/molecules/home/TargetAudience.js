import React from "react";

const TargetAudience = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-[#f5f3ff] py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url('/images/wave.svg')`,
          transform: "scaleX(-1)",
        }}
      ></div>

      <div
        className="absolute right-0 w-[300px] h-[300px] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/images/wave.svg')`, bottom: "-180px" }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="mb-16">
          <h1
            className="text-2xl sm:text-2xl md:text-4xl font-bold"
            style={{ fontFamily: "PP Neue Montreal, sans-serif" }}
          >
            Who is It for?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Designed for everyone who deals with Clario.AI <br /> and legal
            documents
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/images/HomePage/Group 1597883886.png"
              alt="Private Individual"
              className="h-22 w-22"
            />
            <h2 className="text-xl font-semibold">Private Individuals</h2>
            <div className="w-[47px] border-b-2 border-[#7C55FF] my-2"></div>
            <p className="mt-2 text-sm">
              Manage rental agreements, phone <br /> contracts, insurance
              policies, and <br /> guarantees with ease.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/HomePage/Group 1597883886 -1.png"
              alt="Freelancer"
              className="h-22 w-22"
            />
            <h2 className="text-xl font-semibold">
              Freelancers & Solopreneurs
            </h2>
            <div className="w-[47px] border-b-2 border-[#7C55FF] my-2"></div>
            <p className="mt-2 text-sm ">
              Handle client contracts, invoices, and <br /> project agreements
              effortlessly.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/HomePage/Group 1597883886-2.png"
              alt="Startup"
              className="h-22 w-22"
            />
            <h2 className="text-xl font-semibold">Startups & SMEs</h2>
            <div className="w-[47px] border-b-2 border-[#7C55FF] my-2"></div>
            <p className="mt-2 text-sm">
              Streamline employment contracts, supplier <br /> agreements, Terms
              & Conditions, and <br /> GDPR documents.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/HomePage/Group 1597883886-3.png"
              alt="Expat & Migrant"
              className="h-22 w-22"
            />
            <h2 className="text-xl font-semibold">Expatriates & Migrants</h2>
            <div className="w-[47px] border-b-2 border-[#7C55FF] my-2"></div>
            <p className="mt-2 text-sm">
              Navigate work Clario.AI abroad and <br /> communication with
              authorities in any <br /> language.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img src='/images/Building Trust/bd03ef506a5ffb2401d55f477b8bc634351db58b.png' alt='Image' />
    </>
  );
};

export default TargetAudience;
