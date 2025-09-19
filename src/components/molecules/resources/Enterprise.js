import React from 'react';

const DocumentIcon = () => (
<img
    src='/images/ResourcesPage/documentation 1.svg'
    alt='Document Icon'
    className="w-12 h-12"
  >
  </img>
);

const CloudIcon = () => (
<img
    src='/images/ResourcesPage/cloud-network 1.svg'
    alt='Document Icon'
    className="w-12 h-12"
  >
  </img>
);

const ShieldIcon = () => (
<img
    src='/images/ResourcesPage/risk-assessment 1.svg'
    alt='Document Icon'
    className="w-12 h-12"
  >
  </img>
);

const UserGroupIcon = () => (
<img
    src='/images/ResourcesPage/team 1.svg'
    alt='Document Icon'
    className="w-12 h-12"
  >
  </img>
);

const EnterPrise = () => {
  return (
    <div className="bg-white font-sans p-8 md:p-12 lg:p-24 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 relative">
        <div
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-40 pointer-events-none"
          style={{
            backgroundImage: "url('/images/HomePage/Group 1000004033.svg')",
            width: "80%",
            maxWidth: "873px",
            height: "auto",
            aspectRatio: "873/489",
          }}
        ></div>
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Value</p>
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800">
            Why Enterprises Choose Clario.ai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          <div className="relative z-10">
            <Card
              icon={<DocumentIcon />}
              title="Document Intelligence at Scale"
              description="Process thousands of contracts and invoices in minutes."
            />
          </div>
          <div className="relative z-10">
            <Card
              icon={<ShieldIcon />}
              title="Risk & Compliance"
              description="Automated flagging of renewal dates, unfair clauses, and GDPR compliance."
            />
          </div>
          <div className="relative z-10">
            <Card
              icon={<CloudIcon />}
              title="Seamless Integrations"
              description="Connect Google Drive, Dropbox, Microsoft 365, and ERP systems."
            />
          </div>
          <div className="relative z-10">
            <Card
              icon={<UserGroupIcon />}
              title="Employee Empowerment"
              description="No more waiting weeks for legal answers; use self-service AI summaries."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 h-full">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default EnterPrise;
