"use client"
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 relative z-10">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <div
            className={`flex justify-between items-center p-6 cursor-pointer select-none transition-colors duration-300 ${
              activeIndex === index ? 'text-blue-600' : 'text-gray-800'
            }`}
            onClick={() => handleItemClick(index)}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <span className="text-2xl font-bold transition-transform transform">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              activeIndex === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <ul className="px-6 pb-6 space-y-2 text-gray-600">
                {item.content.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    title: "When You Receive Mail or Documents You Don't Fully Understand",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
  {
    title: "When Managing Business & Freelance Contracts",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
  {
    title: "When Dealing With Bills, Invoices & Subscriptions",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
  {
    title: "When You Need to Make a Claim or Dispute",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
  {
    title: "When Living or Working Abroad",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
  {
    title: "When You Care About Privacy & Security",
    content: [
      "A government letter in a foreign language about taxes or social security.",
      "A fine notice for something you didn't know about (parking ticket, late payment).",
      "An insurance renewal letter with small-print changes.",
    ],
  },
];

function ClarioUse() {
  return (
    <>
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      <div
        className="absolute z-0 w-64 h-48 md:w-96 md:h-64 top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/HomePage/Vector.svg')",
          opacity: 0.7
        }}
      />
      <div
        className="absolute z-0 w-64 h-48 md:w-96 md:h-64 top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/HomePage/Vector1.svg')",
          opacity: 0.7
        }}
      />
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2">When to use Clario.ai?</h1>
        <p className="text-gray-800">Practical Scenarios Where Clario.ai Delivers Value</p>
      </div>
      <Accordion items={accordionData} />
    </div>
    </>
  );
}

export default ClarioUse;

