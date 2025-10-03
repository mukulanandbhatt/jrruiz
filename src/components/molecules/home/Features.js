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
            title="Autofill, Sign & Send"
            description="Close deals, approve forms, and finish paperwork in seconds.
 Example: Fill in my company details and send this NDA for signature today."
            illustration={
              <img
                src="/images/AI tools/03.jpg"
                alt="Autofill, Sign & Send"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="AI Calendar"
            description="Never miss a renewal, payment, or deadline — everything tracked automatically.
 Example: “Remind me 30 days before my insurance renews.”"
            illustration={
              <img
                src="/images/AI tools/06.jpg"
                alt="AI Calendar"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Universal Uploads + OCR"
            description="Scan, email, or sync from iOS, Android, Gmail, Google Drive, OneDrive, WhatsApp, Telegram… any format, any time.
 Example: “Upload my travel insurance from Gmail and check if it covers medical emergencies.”"
            illustration={
              <img
                src="/images/AI tools/05.jpg"
                alt="Universal Uploads + OCR"
                className="w-full h-full object-cover rounded-lg"
              />
            }
          />
          <FeatureCard
            title="Smart Cloud Vault"
            description="Store contracts, IDs, invoices, receipts, and business cards in one secure, organized hub.
 Example: “Find all my 2024 invoices and group them by month for my accountant.”"
            illustration={
              <img
                src="/images/AI tools/02.jpg"
                alt="Smart Cloud Vault"
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
            title="One Life. One App."
            description="For you, your family, and your business — everything in one intelligent space.
 Example: “Add my daughter’s school agreement and my mom’s health insurance into my Clario family space.”"
            illustration={
              <img
                src="/images/AI tools/01.jpg"
                alt="One Life. One App."
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
