import React from "react";

const CTASection = () => {
  return (
    <div className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-blue-600 font-[PP Nueue Montreal] p-2 sm:p-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="absolute top-[5%] left-0 w-16 sm:w-36 lg:w-48 opacity-75"
          src="/images/Pricing/Ellipse 36.png"
          alt="Decorative Ellipse"
        />
        <img
          className="absolute left-1/4 transform -translate-x-1/2 w-[300px] sm:w-[700px] lg:w-[900px] h-auto"
          src="/images/Pricing/Vector 7.png"
          alt="Decorative Wave"
        />
        <div className="absolute top-10 right-4 sm:right-12 w-12 sm:w-16 h-10 sm:h-14 grid grid-cols-6 grid-rows-6 gap-1 sm:gap-2 opacity-50">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="z-10 text-white text-center p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-4xl sm:max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
          Boost your productivity and relax. Get started with Clario.AI today.
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl font-light max-w-4xl sm:max-w-7xl mx-auto">
          Individuals, Companies using our Learned AI Document management
          software get their work done faster than ever before. Ready to give
          valuable time back to your team?
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
          <button className="flex items-center gap-1 sm:gap-2 px-6 sm:px-8 py-2 sm:py-4 border-2 border-white bg-white text-black rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 text-sm sm:text-base">
            START FOR FREE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button className="flex items-center gap-1 sm:gap-2 px-6 sm:px-8 py-2 sm:py-4 bg-transparent border-2 border-white text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black text-sm sm:text-base">
            DEMO FOR FREE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <p className="pt-2 sm:pt-4 text-xs sm:text-sm font-light opacity-80">
          Efficient, easy & Safe
        </p>
      </div>
    </div>
  );
};

export default CTASection;
