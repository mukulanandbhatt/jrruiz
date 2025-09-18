import React from "react";

// FeatureCard component for reusable cards
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex-shrink-0 w-80 flex flex-col items-center text-center border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <div className="mb-6 p-4 rounded-full bg-white shadow-md">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center rounded-[200px]"
            style={{
              backgroundImage: "url('/images/Homepage/WhyUsBG.png')",
              width: '873px',
              height: '489px',
            }}
          ></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Why Clario.AI?
            </h2>
            <p className="mt-2 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Say goodbye to bureaucratic headaches and hello to AI-powered
              document management
            </p>
          </div>

          <div className="flex flex-row overflow-x-auto gap-8 pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
            <FeatureCard
              icon={<img src='/images/HomePage/Frame.svg' className="w-12 h-12" />}
              title="Cancel, modify, sign documents with your Personal AI"
              description="Upload your contracts or sync with Google Drive, Dropbox, or OneDrive. Our AI detects contents, deadlines, and risks explaining everything in plain language for you."
            />
            <FeatureCard
              icon={<img src='/images/Homepage/Frame2.png' className="w-12 h-12" />}
              title="Understanding and controlling what you sign"
              description="Clario.AI identifies problematic clauses, suggests actions (e.g., termination, renewal, negotiation), and helps you communicate legally across multiple languages."
            />
            <FeatureCard
              icon={<img src='/images/Homepage/Frame3.png' className="w-12 h-12" />}
              title="Contracts, tailored for you"
              description="Automatic reminders, legally compliant emails, translations, and organized storage everything you need to manage your legal responsibilities without a law degree."
            />
            <FeatureCard
              icon={<img src='/images/Homepage/Frame4.png' className="w-12 h-12" />}
              title="Your personal AI assistant for bureaucracy in your app"
              description="Easily upload your contracts or sync cloud storage. The AI recognizes contents, deadlines, and risks, and gives you clear, understandable explanations."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;