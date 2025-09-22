import React from "react";
import Overview from '../atoms/Overview'

const Connect = () => {
  return (
    <>
    <Overview />
      <div className="relative min-h-[70vh] sm:min-h-screen bg-[#0a0a1f] text-white overflow-hidden flex flex-col items-center justify-center py-10 px-4 sm:px-8">
        <div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 sm:-left-40 sm:w-3/5 z-0 opacity-50 h-50"
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
          className="absolute w-40 h-40 sm:w-60 sm:h-60 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/images/wave.svg')`,
            bottom: "10px",
            right: "10px",
            zIndex: 1,
          }}
        ></div>

        <div className="relative flex flex-col items-center justify-center p-2 md:p-4 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            We Connect
          </h1>
          <p className="text-sm md:text-lg text-center text-gray-300 max-w-xl mb-12">
            Cloud: Google App Whatsapp Drive Logo, Onedrive, dropBox and others.
          </p>

          <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 ">
            <div className="flex flex-col items-center -translate-y-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-6.svg"
                alt="Google Drive Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-5.svg"
                alt="WhatsApp Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-4.svg"
                alt="Cloud Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-1.svg"
                alt="Dropbox Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>

            <div className="flex flex-col items-center -translate-y-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon.svg"
                alt="Google Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col items-center -translate-y-10 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-2.svg"
                alt="Phone Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>

            <div className="flex flex-col items-center -translate-y-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <img
                src="/images/Cloud_icons/Hexagon-3.svg"
                alt="Email Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;



// import React from "react";
// import Overview from "../atoms/Overview";

// const Connect = () => {
//   const icons = [
//     { src: "/images/Cloud_icons/Hexagon-6.svg", alt: "Google Drive Logo" },
//     { src: "/images/Cloud_icons/Hexagon-5.svg", alt: "WhatsApp Logo" },
//     { src: "/images/Cloud_icons/Hexagon-4.svg", alt: "Cloud Logo" },
//     { src: "/images/Cloud_icons/Hexagon-1.svg", alt: "Dropbox Logo" },
//     { src: "/images/Cloud_icons/Hexagon.svg", alt: "Google Logo" },
//     { src: "/images/Cloud_icons/Hexagon-2.svg", alt: "Phone Logo" },
//     { src: "/images/Cloud_icons/Hexagon-3.svg", alt: "Email Logo" },
//   ];

//   return (
//     <>
//       <Overview />
//       <div className="relative min-h-[70vh] sm:min-h-screen bg-[#0a0a1f] text-white overflow-hidden flex flex-col items-center justify-center py-10 px-4 sm:px-8">
//         {/* Backgrounds */}
//         <div
//           className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 sm:-left-40 sm:w-3/5 z-0 opacity-50 h-50"
//           style={{
//             backgroundImage: `url('/images/Vector7.svg')`,
//             backgroundSize: "cover",
//             backgroundPosition: "left center",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//           style={{
//             backgroundImage: `url('/images/hero_back.svg')`,
//           }}
//         ></div>
//         <div
//           className="absolute w-40 h-40 sm:w-60 sm:h-60 bg-no-repeat bg-contain"
//           style={{
//             backgroundImage: `url('/images/wave.svg')`,
//             bottom: "10px",
//             right: "10px",
//             zIndex: 1,
//           }}
//         ></div>

//         {/* Content */}
//         <div className="relative flex flex-col items-center justify-center p-2 md:p-4 z-10">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
//             We Connect
//           </h1>
//           <p className="text-sm md:text-lg text-center text-gray-300 max-w-xl mb-12">
//             Cloud: Google App Whatsapp Drive Logo, Onedrive, dropBox and others.
//           </p>

//           {/* Icons */}
//           <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
//             {icons.map((icon, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:rotate-6"
//               >
//                 <img
//                   src={icon.src}
//                   alt={icon.alt}
//                   className="w-16 h-16 md:w-24 md:h-24 drop-shadow-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Connect;
