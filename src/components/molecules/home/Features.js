"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, illustration }) => {
  return (
    <motion.div
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-64 sm:h-72 [transform-style:preserve-3d] cursor-pointer"
    >
      <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {illustration}
      </div>
    </motion.div>

  );
};

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-2">
            Everything you need. <br /> All in one place.
          </h2>
          <p className="mt-2 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools to manage your documents and contracts
            effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            title="AI Contract Summary"
            description="Understand any legal document in 60 seconds, plain language."
            illustration={
              <img
                src="/images/AI tools/03.jpg"
                alt="AI Contract Summary"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Multilingual Translation"
            description="Auto legal translations (EN, ES, DE, FR + more)."
            illustration={
              <img
                src="/images/AI tools/06.jpg"
                alt="Multilingual Translation"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="One-Click Actions"
            description="Cancel, claim, send to lawyer — without leaving Clario."
            illustration={
              <img
                src="/images/AI tools/05.jpg"
                alt="One-Click Actions"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Smart Alerts"
            description="Get notified of deadlines, renewals, or risks before it’s too late."
            illustration={
              <img
                src="/images/AI tools/02.jpg"
                alt="Smart Alerts"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Risk Scoring & Guidance"
            description="Traffic-light system + next steps recommended by AI."
            illustration={
              <img
                src="/images/AI tools/04.jpg"
                alt="Risk Scoring & Guidance"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Secure Data Vault"
            description="Store contracts, invoices, and letters in AES-256 encrypted EU cloud."
            illustration={
              <img
                src="/images/AI tools/01.jpg"
                alt="Secure Data Vault"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
                    
        </div>
      </div>
    </section>
  );
};

export default Features;
