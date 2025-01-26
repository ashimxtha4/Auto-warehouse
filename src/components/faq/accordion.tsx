import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/constants/faq-items';

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-200 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} bg-white`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none rounded-lg transition-all"
      >
        <span className="text-lg font-semibold text-primary-main">{question}</span>
        <svg
          className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 pr-4 py-2 text-primary-text bg-white text-sm rounded-b-lg transition-all">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow-lg">
      {FAQ_ITEMS.map((item) => (
        <AccordionItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
