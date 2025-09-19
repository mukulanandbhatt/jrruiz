"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up",
    description: "Create your secure account.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (2).jpg",
  },
  {
    title: "Connect Your Sources",
    description: "Link Google Drive, Dropbox, OneDrive, WhatsApp.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (3).jpg",
  },
  {
    title: "Upload or Scan",
    description:
      "Send contracts, invoices, letters via cloud or portable scanner.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (4).jpg",
  },
  {
    title: "Let Clario Work",
    description: "Get instant summaries, risk alerts, and one-click actions.",
    image: "/images/Clario.ai in Minutes/Frame 2121454017 (5).jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ClarioProcess = () => {
  return (
    <>
    <div id='storytelling' class="scroll-mt-20"></div>
    <section className="bg-gradient-to-b from-blue-50 to-blue-200 py-20 relative overflow-hidden">
      
      <div
        className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url('/images/wave.svg')`,
          transform: "scaleX(-1)",
        }}
      ></div>

      <div
        className="absolute right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/images/wave.svg')`, bottom: "-100px" }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Get Started with Clario.ai in Minutes
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Getting started with Clario.ai takes less than 2 minutes. No lawyers,
          no paperwork just legal clarity in your pocket.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-stretch"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white rounded-xl shadow-lg p-6 w-full flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow duration-300 h-full"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto mb-4 object-contain max-h-48 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {step.title}
                </h3>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="h-0.5 my-4 bg-purple-600 rounded-full"
                ></motion.div>

                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ClarioProcess;

