import React from "react";

const cardData = [
  {
    title: "Banking & Insurance",
    description: "Claims, policies, disputes.",
    image: "/images/ResourcesPage/Rectangle 161124493.svg",
  },
  {
    title: "Startups & SMEs",
    description: "Contract lifecycle, HR docs.",
    image: "/images/ResourcesPage/Frame 2121454017.svg",
  },
  {
    title: "Healthcare",
    description: "Patient forms, insurance claims.",
    image: "/images/ResourcesPage/HealthCare.svg",
  },
  {
    title: "Expats / Mobility",
    description: "Immigration & relocation docs.",
    image: "/images/ResourcesPage/Mobility.svg",
  },
];

const Industries = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-blue-600 font-sans text-gray-800">
      <div className="container mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold mt-5 text-white uppercase tracking-widest">
            Industries
          </p>

          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold mt-5 tracking-tight text-white">
            Built for Modern Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 bg-[#D9D9FF] p-6 flex flex-col items-start"
            >

              <div className="relative z-10 w-full">
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>

                <p className="text-gray-800">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10 w-full mt-6 mb-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
