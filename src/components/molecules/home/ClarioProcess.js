import React from "react";

const steps = [
  {
    title: "Sign Up",
    description: "Create your secure account.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (2).jpg",
  },
  {
    title: "Connect Your Sources",
    description: "Link Google Drive, Dropbox, OneDrive, WhatsApp.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (3).jpg",
  },
  {
    title: "Upload or Scan",
    description:
      "Send contracts, invoices, letters via cloud or portable scanner.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (4).jpg",
  },
  {
    title: "Let Clario Work",
    description: "Get instant summaries, risk alerts, and one-click actions.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (5).jpg",
  },
];

const ClarioProcess = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-200 py-20 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url('/images/wave.svg')`,
          transform: "scaleX(-1)",
        }}
      ></div>

      <div
        className="absolute right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/images/wave.svg')`, bottom: "-100px" }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Get Started with Clario.ai in Minutes
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Getting started with Clario.ai takes less than 2 minutes. No lawyers,
          no paperwork just legal clarity in your pocket.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center justify-center text-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto mb-4 object-contain max-h-48"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {step.title}
                </h3>
                <div className="w-12 h-0.5 my-4 bg-purple-600 rounded-full"></div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClarioProcess;
