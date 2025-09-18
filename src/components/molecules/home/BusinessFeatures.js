
import React from "react";

const BusinessFeatures = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Made in Europe, Designed for the World
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg ">
          When it comes to doing business, location plays an important role. Our
          contract management software has been tailored specifically for the
          requirements of European businesses.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-8 flex flex-col items-center">
          <img
            className="h-60 w-full object-contain"
            src="/images/protected.svg"
            alt="Computer with a shield and data protection icons"
          />
          <div className="mt-10 w-full text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              100% protected and EU and <br /> GDPR-compliant
            </h3>
            <div className="w-60 h-0.5 bg-indigo-600 my-4"></div>
            <p className="mt-4 text-gray-700">
              fynks contract management software was built to keep your data
              safe. From hosting over product architecture to audit-proof
              storage, you can rest assured that your business will remain
              protected with enterprise-grade security and GDPR compliant.
            </p>
          </div>
          <div className="mt-6 w-full">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-1 border-8 bg-indigo-600 border-indigo-600 text-base font-medium rounded-4xl uppercase"
            >
              <p className="text-white">Find out more</p>
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-8 flex flex-col items-center">
          <img
            className="h-60 w-full object-contain"
            src="/images/Business tools.svg"
            alt="Mobile phone with a cogwheel and code icon"
          />
          <div className="mt-6 w-full text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Connected to the Business <br /> tools you love
            </h3>
            <div className="w-60 h-0.5 bg-indigo-600 my-4"></div>
            <p className="mt-4 text-gray-700">
              Extensive integrations connect your existing CRM and other
              workflow tools to Clario.AI contract management software and help
              you accelerate your business even further. Create, edit, track and
              sign Clario.AI starting directly from the setup you already love.
            </p>
          </div>
          <div className="mt-6 w-full">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-1 border-8 bg-indigo-600 border-indigo-600 text-base font-medium rounded-4xl uppercase"
            >
              <p className="text-white">Find out more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFeatures;
