"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white rounded-xl shadow-lg p-6 flex-shrink-0 w-72 sm:w-80 md:w-96 flex flex-col items-center text-center border border-gray-100"
  >
    <div className="mb-6 p-4 rounded-full bg-white shadow-md">{icon}</div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
      {title}
    </h3>
    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const WhyUs = () => {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    }
  };

  const scrollByAmount = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800">
            Why Clario.AI?
          </h2>
          <p className="mt-3 text-sm sm:text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Say goodbye to bureaucratic headaches and hello to AI-powered
            document management
          </p>
        </div>

        <button
          onClick={() => scrollByAmount(-300)}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scrollByAmount(300)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex flex-row overflow-x-auto gap-6 sm:gap-8 pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10 scroll-smooth"
        >
          <FeatureCard
            delay={0.1}
            icon={<img src="/images/HomePage/Frame.svg" className="w-10 sm:w-12 h-10 sm:h-12" />}
            title="Cancel, modify, sign documents with your Personal AI"
            description="Upload your contracts or sync with Google Drive, Dropbox, or OneDrive. Our AI detects contents, deadlines, and risks explaining everything in plain language for you."
          />
          <FeatureCard
            delay={0.3}
            icon={<img src="/images/HomePage/ai-browser-stroke-rounded 1.svg" className="w-10 sm:w-12 h-10 sm:h-12" />}
            title="Understanding and controlling what you sign"
            description="Clario.AI identifies problematic clauses, suggests actions (e.g., termination, renewal, negotiation), and helps you communicate legally across multiple languages."
          />
          <FeatureCard
            delay={0.5}
            icon={<img src="/images/HomePage/edit-table-stroke-rounded 1.svg" className="w-10 sm:w-12 h-10 sm:h-12" />}
            title="Contracts, tailored for you"
            description="Automatic reminders, legally compliant emails, translations, and organized storage everything you need to manage your legal responsibilities without a law degree."
          />
          <FeatureCard
            delay={0.7}
            icon={<img src="/images/HomePage/smart-phone-04-stroke-rounded 1.svg" className="w-10 sm:w-12 h-10 sm:h-12" />}
            title="Your personal AI assistant for bureaucracy in your app"
            description="Easily upload your contracts or sync cloud storage. The AI recognizes contents, deadlines, and risks, and gives you clear, understandable explanations."
          />
          <FeatureCard
            delay={0.7}
            icon={<img src="/images/HomePage/computer-phone-sync-stroke-rounded 1.svg" className="w-10 sm:w-12 h-10 sm:h-12" />}
            title="Your personal AI assistant for bureaucratic workflow"
            description="Just upload your documents or connect your cloud drive. The AI will spot content, deadlines, risks, and explain every detail simply and transparently."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
