"use client";

import React, { Suspense, useState } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const faqData = [
  {
    question: "What is this platform about?",
    answer: "This platform is designed to help users manage their projects and development work efficiently.",
  },
  {
    question: "How can I register?",
    answer: "You can register by clicking on the sign-up button at the top right corner and filling out the required information.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we prioritize your privacy and ensure that all your data is securely stored using the latest encryption technologies.",
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 customer support through email and chat. You can reach out to us anytime.",
  },
  {
    question: "Can I upgrade my plan?",
    answer: "Yes, you can upgrade your plan at any time by visiting the pricing page and selecting a new plan.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-200 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} bg-white`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none rounded-lg transition-all"
      >
        <span className="text-lg font-semibold text-green-700">{question}</span>
        <svg
          className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 pr-4 py-2 text-gray-700 bg-white text-sm rounded-b-lg transition-all">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow-lg">
      {faqData.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="max-w-xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Frequently Asked Questions</h2>
        <FAQAccordion />
      </div>
    </Suspense>
  );
};

export default Page;
