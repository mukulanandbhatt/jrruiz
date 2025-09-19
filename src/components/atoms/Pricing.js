import React from "react";

const plans = [
  {
    title: "BASIC PLAN",
    subtitle: "Essential Legal Clarity",
    price: "Free",
    features: [
      "Private Legal Cloud – Secure, encrypted storage",
      "Clario.AI Chatbox – Ask legal questions anytime",
      "AI-Powered Summaries – Understand complex Smart Document",
      "Smart Document Organization – Auto-classification",
      "Mobile & Web App Access – Total control from anywhere",
      "Security Pack – End-to-end encryption & GDPR compliance",
    ],
    button: "Get Started",
    highlight: "border-t-4 border-t-[#84CC16]",
    hoverBorder: "hover:border-[#84CC16]",
  },
  {
    title: "BASIC + EMAILS PLAN",
    subtitle: "Essential Legal Clarity",
    price: "€8.99 /month",
    features: [
      "Everything in BASIC plan",
      "Email Automation – Send professional legal emails",
      "Pre-written Templates – You choose the intent, we write the message",
      "Delivery & Read Tracking – Know what was received and when",
    ],
    button: "Choose Plan",
    highlight: "border-t-4 border-t-[#2563EB]",
    hoverBorder: "hover:border-[#2563EB]",
  },
  {
    title: "PRO PLAN",
    subtitle: "For freelancers and professionals",
    price: "€19.99 /month",
    features: [
      "Everything in EMAILS plan",
      "Contract AIkseyo Comparison – Detect clauses and risks",
      "Invoice Management – Upload, organize and compare bills easily",
      "Summarize and extract key data from PDFs automatically",
      "Visual Breakdown of Legal Risk – Color-coded heatmaps",
    ],
    button: "Upgrade",
    highlight: "border-t-4 border-t-[#7C3AED]",
    hoverBorder: "hover:border-[#7C3AED]",
  },
  {
    title: "BUSINESS PLAN",
    subtitle: "For startups and SMEs",
    price: "Custom",
    features: [
      "Everything in PRO plan",
      "Contract Generation – Guided creation of documents",
      "Workflow Automation – Track extensions, cancellations, renewals",
      "Bulk Email Tools – Mass notifications to clients or employees",
      "Scan Cloud – Bulk import and digitization of paper documents",
      "Team Collaboration – Multi-user dashboards and permissions",
    ],
    button: "Contact Us",
    highlight: "border-t-4 border-t-[#1F2937]",
    hoverBorder: "hover:border-[#1F2937]",
  },
];

const Pricing = () => {
  return (
    <>
    
    <div id='pricing' class="scroll-mt-20"></div>
    <div className="py-16 bg-white px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-1/2 h-auto opacity-70 z-0"
        style={{
          backgroundImage: `url('/images/Pricing/TopRight.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full sm:w-1/2 lg:w-1/3 h-auto z-0"
        style={{
          backgroundImage: `url('/images/Pricing/BottomLeft.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          backgroundSize: "contain",
          opacity: 0.7,
        }}
      />

      <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-center mb-4 relative z-10">
        Pricing Plans
      </h2>
      <p className="text-center text-gray-800 mb-12 relative z-10">
        Choose the legal power that fits your needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl bg-white p-6 shadow-md flex flex-col justify-between border-2 border-transparent transition-all duration-300 ease-in-out ${plan.highlight} ${plan.hoverBorder}`}
          >
            <div>
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p className="text-sm text-gray-700">{plan.subtitle}</p>
              <p className="text-2xl font-bold mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 w-full h-12 text-black py-2 rounded-full hover:bg-blue-700 hover:text-white transition border-2 border-blue-600"
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <h3 className="text-xl font-semibold">Coming soon</h3>
        <p className="text-gray-800 mt-2 max-w-2xl mx-auto">
          Voice control, e-signatures, AI legal tutor, and a visual contract
          editor. Want a tailored demo or downloadable comparison chart? Let us
          know!
        </p>
      </div>
    </div>
    
    </>
  );
};

export default Pricing;
