import React from "react";

const CommandPlusRLogo = () => (
  <img
    width="45"
    height="50"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Logomark.png"
    alt='Logo'
  >
  </img>
);

const GlobalBankLogo = () => (
  <img
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    src="/images/HomePage/Logomark1.png"
    alt='logo'
  >
  </img>
);

const SpheruleLogo = () => (
  <img
    width="45"
    height="50"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Logomark2.png"
    alt='Logo'
  >
  </img>
);

const LayersLogo = () => (
  <img
    width="45"
    height="50"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Logomark3.png"
    alt='Logo'
  >
  </img>
);

const AltPlusShiftLogo = () => (
  <img
    width="45"
    height="50"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Logomark4.png"
    alt='Logo'
  >
  </img>
);

const LuminousLogo = () => (
  <img
    width="45"
    height="50"
    viewBox="0 0 48 52"
    fill="none"
    src="/images/HomePage/Logomark5.png"
    alt='Logo'
  >
  </img>
);

const Brands = () => {
  const logos = [
    { name: "Command+R", Component: CommandPlusRLogo },
    { name: "GlobalBank", Component: GlobalBankLogo },
    { name: "Spherule", Component: SpheruleLogo },
    { name: "Layers", Component: LayersLogo },
    { name: "Alt+Shift", Component: AltPlusShiftLogo },
    { name: "Luminous", Component: LuminousLogo },
  ];

  return (
    <div className="bg-blue-600 rounded-2xl p-4 md:p-6 mr-5 ml-5 mb-10">
      <div className="flex flex-wrap items-center justify-around gap-x-8 gap-y-4 px-4 py-2 sm:px-6 lg:px-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-white text-xl font-bold"
          >
            <logo.Component />
            <span className="hidden sm:inline">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
