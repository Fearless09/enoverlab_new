"use client"
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white py-4">
      <button
        className="flex justify-between items-start w-full text-left font-semibold text-[24px] py-3 text-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-white">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;