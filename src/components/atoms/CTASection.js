import React from 'react';

const CTASection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 font-[PP Nueue Montreal] p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
       <img className="absolute top-1/20 left-0"
        src='/images/Pricing/Ellipse 36.png'
        alt='Ellipse Decorative'
        />
        <img className="absolute  left-1/4 transform  w-[900px] h-[450px]"  
        src='/images/Pricing/Vector 7.png'
        alt='wave decorative'
        />
        <div className="absolute top-20 right-12 w-16 h-14 grid grid-cols-6 grid-rows-6 gap-2 opacity-50">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="z-10 text-white text-center p-6 space-y-6 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Boost your productivity and relax. Get started with Clario.AI today.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-7xl mx-auto">
          Individuals, Companies using our Learned AI Document management software get their work <br/> done faster than ever before. Ready to give valuable time back to your team?
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button className="flex items-center gap-2 px-8 py-4 border-1 border-t-2 border-black bg-white text-black  rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            START FOR FREE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
            DEMO FOR FREE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <p className="pt-4 text-sm sm:text-base font-light opacity-80">
          Efficient, easy & Safe
        </p>
      </div>
    </div>
  );
};

export default CTASection;
