import React from "react";
const SecureDataVaultIllustration = () => (
  // You would replace this with your actual SVG or image component
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    Secure Data Vault Illustration
  </div>
);

const SmartAlertsIllustration = () => (
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    Smart Alerts Illustration
  </div>
);

const AiContractSummaryIllustration = () => (
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    AI Contract Summary Illustration
  </div>
);

const RiskScoringIllustration = () => (
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    Risk Scoring & Guidance Illustration
  </div>
);

const OneClickIllustration = () => (
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    One Click Actions Illustration
  </div>
);

const MultilingualIllustration = () => (
  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
    Multilingual Translation Illustration
  </div>
);

// Reusable Card Component
const FeatureCard = ({ title, description, illustration }) => {
  return (
    <div
      className="
      bg-white 
      rounded-xl 
      shadow-lg 
      p-6 
      sm:p-8 
      border 
      border-gray-100
    "
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      {illustration}
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Everything you need. <br /> All in one place.
          </h2>
          <p className="mt-2 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools to manage your documents and contracts
            effortlessly
          </p>
        </div>

        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-8
        "
        >
          <FeatureCard
            title="Secure Data Vault"
            description="Store contracts, invoices, and letters in AES-256 encrypted EU cloud."
            illustration={<SecureDataVaultIllustration />}
          />
          <FeatureCard
            title="Smart Alerts"
            description="Get notified of deadlines, renewals, or risks before it’s too late."
            illustration={<SmartAlertsIllustration />}
          />
          <FeatureCard
            title="AI Contract Summary"
            description="Understand any legal document in 60 seconds, plain language."
            illustration={<AiContractSummaryIllustration />}
          />
          <FeatureCard
            title="Risk Scoring & Guidance"
            description="Traffic-light system + next steps recommended by AI."
            illustration={<RiskScoringIllustration />}
          />

          <FeatureCard
            title="One-Click Actions"
            description="Cancel, claim, send to lawyer — without leaving Clario."
            illustration={<OneClickIllustration />}
          />

          <FeatureCard
            title="Multilingual Translation"
            description="Auto legal translations (EN, ES, DE, FR + more)."
            illustration={<MultilingualIllustration />}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
