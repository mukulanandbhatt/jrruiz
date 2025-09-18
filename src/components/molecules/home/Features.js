import React from "react";

const SecureDataVaultIllustration = () => (
  <img
    src="/images/AI tools/01.jpg"
    alt="Secure Data Vault"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const SmartAlertsIllustration = () => (
  <img
    src="/images/AI tools/02.jpg"
    alt="Smart Alerts"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const AiContractSummaryIllustration = () => (
  <img
    src="/images/AI tools/03.jpg"
    alt="AI Contract Summary"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const RiskScoringIllustration = () => (
  <img
    src="/images/AI tools/04.jpg"
    alt="Risk Scoring & Guidance"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const OneClickIllustration = () => (
  <img
    src="/images/AI tools/05.jpg"
    alt="One-Click Actions"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const MultilingualIllustration = () => (
  <img
    src="/images/AI tools/06.jpg"
    alt="Multilingual Translation"
    className="w-full h-28 sm:h-40 md:h-45 object-cover rounded-lg"
  />
);

const FeatureCard = ({ title, description, illustration }) => {
  return (
    <div
      className="
        bg-white 
        rounded-xl 
        shadow-lg 
        p-4 sm:p-6 
        border 
        border-gray-100
      "
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
        {description}
      </p>
      {illustration}
    </div>
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

        <div
          className="
    grid 
    grid-cols-2     /* Show 2 cards per row on mobile */
    sm:grid-cols-2  /* Keep 2 columns for small screens (>=640px) */
    md:grid-cols-2  /* 2 columns for medium screens (>=768px) */
    lg:grid-cols-2  /* Optional: 3 columns on larger screens if you want */
    gap-6 sm:gap-8
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
