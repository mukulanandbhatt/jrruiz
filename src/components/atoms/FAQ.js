"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: "How does Clario.ai save my team time?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Instant legal summaries with AI (no more reading 30-page contracts).</li>
        <li>Smart document organization by type, party, and deadline.</li>
        <li>Calendar alerts for renewals, cancellations, or penalties.</li>
        <li>Auto-generated legal emails and templates for common actions.</li>
        <li>24/7 chatbot assistance that answers contract-related questions instantly.</li>
        <li><span className="font-bold">Dispute center:</span> do following up of different disagreements, not returned money, mistreated services</li>
      </ul>
    ),
    expanded: true
  },
  {
    question: "Can Clario.ai replace our current legal document tools?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Yes. Clario.ai centralizes legal operations in one secure platform:</li>
        <li>Replace tools like Google Drive, Dropbox, translators, and basic PDF readers.</li>
        <li>Automate contract analysis, email responses, and compliance checks.</li>
        <li>Syncs with your existing cloud storage and offers private AI on top.</li>
        <li><span className="font-bold">Dispute center:</span> do following up of different disagreements, not returned money, mistreated services</li>
      </ul>
    ),
    expanded: true
  },
  {
    question: "What support is included?",
    answer: "Our dedicated support team is available 24/7 to assist you with any questions or issues. We also provide extensive documentation and tutorials to help you get started.",
    expanded: false
  },
  {
    question: "Can we cancel if it doesn’t fit our needs?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts, and you will not be charged for the next billing cycle.",
    expanded: false
  },
  {
    question: "Is our data secure with Clario.ai?",
    answer: "We use industry-standard encryption and security protocols to ensure your data is protected. Your data is private and never used to train our AI models.",
    expanded: false
  },
  {
    question: "What AI capabilities are available?",
    answer: "Our AI capabilities include text summarization, document classification, automated email generation, and a chatbot for instant legal inquiries.",
    expanded: false
  },
  {
    question: "How quickly can we get up and running?",
    answer: "Most users can get started within a few minutes. We offer a simple setup process and a quick-start guide to help you integrate your existing tools.",
    expanded: false
  },
  {
    question: "How does Clario.ai Bot benefit our team?",
    answer: "The Clario.ai bot provides instant answers to common legal questions, reducing the workload on your legal team and allowing them to focus on more complex tasks.",
    expanded: false
  },
];

const FAQItem = ({ question, answer, isExpanded, onToggle, showMinus }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 cursor-pointer transition-all duration-300 transform hover:scale-[1.01]" onClick={onToggle}>
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
      <div className="text-blue-600 transition-transform duration-300">
        {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
      </div>
    </div>
    <div
      className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <p className="overflow-hidden text-gray-600 text-sm leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({
    "How does Clario.ai save my team time?": false,
    "Can Clario.ai replace our current legal document tools?": false
  });

  const handleToggle = (question) => {
    setExpandedItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Ask Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isExpanded={!!expandedItems[faq.question]}
                onToggle={() => handleToggle(faq.question)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;


