import React from "react";

const CommandPlusRLogo = () => (
  <svg
    width="48"
    height="52"
    viewBox="0 0 48 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="27.65"
      height="34.86"
      rx="4"
      fill="#3B82F6"
      opacity="1"
    />
    <rect
      x="8"
      y="8"
      width="41.84"
      height="52.30"
      rx="4"
      fill="#3B82F6"
      opacity="0.6"
    />
    <rect
      x="14"
      y="14"
      width="41.84"
      height="34.87"
      rx="4"
      fill="#3B82F6"
      opacity="0.8"
    />
  </svg>
);

const GlobalBankLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Placeholder for GlobalBank logo */}
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    <path
      d="M12 2L12 22M2 12H22"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpheruleLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Placeholder for Spherule logo */}
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16L12 12L16 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LayersLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Placeholder for Layers logo */}
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AltPlusShiftLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Placeholder for Alt+Shift logo */}
    <path
      d="M10 4L4 10L10 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 4L20 10L14 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10H20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LuminousLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Placeholder for Luminous logo */}
    <path
      d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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
