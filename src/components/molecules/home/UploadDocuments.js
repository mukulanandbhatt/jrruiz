import React from "react";

const UploadDocuments = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-5xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Upload, Extract, Analysis <br />
            all your Documents <br />
            <span className="text-blue-600">automatically</span>
          </h1>
          <p className="text-lg font-bold text-gray-800 mb-6">
            Extract and analyse contract information automatically
          </p>
          <p className="text-lg  mb-4">
            Simply upload a document – my Clario.ai takes care of the rest.
            Whether digital, scanned or handwritten: Our AI recognizes the
            relevant data and analyses the contract for you.
          </p>
          <p className="text-lg mb-8">
            Emails, Contracts Document invoices in your Dashboard - all under
            your control no more Paper (you can destroy)
          </p>
          <p className="text-lg font-bold ">
            (image with options: SummarizeAi, translateAi, ResponsedAi, SignAi,
            CalenderAi, maybe later..)
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/form.jpg"
            alt="Document upload and analysis interface"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default UploadDocuments;
