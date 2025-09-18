import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-8 lg:px-16 bg-white rounded-lg">
      <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
        Overview:
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-center leading-relaxed max-w-4xl">
        Payslips. Invoices. Rental agreements. Cancellations. Clario.ai turns
        everyday legal chaos into a simple, automated, multilingual and secure
        experience. Designed for individuals, freelancers, SMEs and
        professionals who want to understand, act and protect themselves—without
        relying on lawyers.
      </p>
    </div>
  );
};

export default Overview;
