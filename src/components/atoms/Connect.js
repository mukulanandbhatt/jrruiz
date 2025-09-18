import React from "react";

const Connect = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a1f] text-white overflow-hidden flex flex-col items-center justify-center py-20 px-4 sm:px-8">
        <div
          className="absolute top-20 -left-40 w-3/5 z-0 h-50 opacity-50"
          style={{
            backgroundImage: `url('/images/Vector7.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/images/hero_back.svg')`,
          }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/images/wave.svg')`,
            bottom: "-180px",
            right: "10px",
            zIndex: 1,
          }}
        ></div>

        <div className="relative flex flex-col items-center justify-center p-2 md:p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">We Conect</h1>
          <p className="text-sm md:text-lg text-center text-gray-300 max-w-xl mb-12">
            Cloud: Google App Whatsapp Drive Logo, Onedrive, dropBox and others.
          </p>

          <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
            <div className="flex flex-col items-center -translate-y-0">
              <img
                src="/images/Cloud_icons/Hexagon-6.svg"
                alt="Google Drive Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10">
              <img
                src="/images/Cloud_icons/Hexagon-5.svg"
                alt="WhatsApp Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-0">
              <img
                src="/images/Cloud_icons/Hexagon-4.svg"
                alt="Cloud Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10">
              <img
                src="/images/Cloud_icons/Hexagon-1.svg"
                alt="Dropbox Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>

            <div className="flex flex-col items-center -translate-y-0">
              <img
                src="/images/Cloud_icons/Hexagon.svg"
                alt="Google Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10">
              <img
                src="/images/Cloud_icons/Hexagon-2.svg"
                alt="Phone Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>

            <div className="flex flex-col items-center -translate-y-0">
              <img
                src="/images/Cloud_icons/Hexagon-3.svg"
                alt="Email Logo"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
