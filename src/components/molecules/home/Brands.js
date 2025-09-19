"use client"
import React, { useEffect, useState } from "react";

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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const logos = [
    { name: "Command+R", Component: CommandPlusRLogo },
    { name: "GlobalBank", Component: GlobalBankLogo },
    { name: "Spherule", Component: SpheruleLogo },
    { name: "Layers", Component: LayersLogo },
    { name: "Alt+Shift", Component: AltPlusShiftLogo },
    { name: "Luminous", Component: LuminousLogo },
  ];

  return (
    <>
    <div
      style={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "#2563eb",
        borderRadius: "1rem",
        padding: '1rem 1rem',
        margin: '0 0',
        boxSizing: 'border-box',
      }}
    >
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider-track {
            display: flex;
            width: max-content;
            animation: slide 20s linear infinite;
            white-space: nowrap;
          }
          .logo-item {
            display: flex;
            align-items: center;
            margin-right: 2rem;
            color: white;
            font-weight: bold;
            font-size: 1.25rem;
            white-space: nowrap;
          }
          @media (max-width: 640px) {
            .logo-item {
              font-size: 1rem;
              margin-right: 1rem;
              min-width: 90px;
            }
          }
        `}
      </style>
      <div className="slider-track" aria-label="Scrolling brands logos">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <logo.Component />
            <span className="hidden sm:inline" style={{ marginLeft: "0.5rem" }}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default Brands;

