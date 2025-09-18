import React from "react";

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    style={{ color: "#ffffff" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0.5L19.5638 10.7492L30.5638 12.5L22.5638 20.2492L24.1276 31.2492L16 25.4984L7.87241 31.2492L9.43616 20.2492L1.43616 12.5L12.4362 10.7492L16 0.5Z"
      fill="currentColor"
    />
  </svg>
);

const Benefits = () => {
  const benefits = [
    "AI-powered risk and clause detection with plain-language explanations",
    "One-click actions: terminate, renew, negotiate",
    "Automatic notifications for important dates and deadlines",
    "Full multilingual support and legal-grade translations",
    "Encrypted, compliant document handling and storage",
  ];

  return (
    <>
      <section className="min-h-[300px] md:min-h-[500px] lg:min-h-[600px] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="bg-blue-600 mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-0 md:gap-12 p-8 rounded-[30px]">

          <div className="w-full md:w-1/2">
            <h2
              className="text-2xl sm:text-2xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "PP Neue Montreal, sans-serif" }}
            >
              Key Benefits
            </h2>
            <ul className="space-y-4 text-lg">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <StarIcon />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative w-full max-w-xxl h-[450px] md:h-[400px] flex items-center justify-center">
              <img
                src="/images/background.png"
                alt="Security and data protection graphic"
                className="absolute w-full h-auto max-h-full object-contain"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "80%",
                  zIndex: 1,
                }}
              />
              <img
                src="/images/Vector7.svg"
                alt="Decorative wavy line"
                className="absolute object-contain"
                style={{
                  width: "100%",
                  height: "auto",
                  top: "50%",
                  left: "20%",
                  transform: "translateY(-50%)",
                  opacity: 0.4,
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
