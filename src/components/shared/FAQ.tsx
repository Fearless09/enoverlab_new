"use client";

import { cn } from "@/utilities/utils";
import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";

export type Faq = { question: string; answer: string };

const FAQ: FC<{ faqs: Faq[] }> = ({ faqs }) => {
  return (
    <section className="bg-primary-400 relative rounded-xs px-6 pt-10 pb-20 text-white">
      {/* <span className="bg-primary-400 absolute top-0 left-0 -z-1 h-full w-[50vw]" /> */}
      <h1 className="text-[40px] font-semibold">FAQs</h1>

      <ul className="mt-5 space-y-8">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </ul>
    </section>
  );
};

export default FAQ;

const FaqItem: FC<Faq> = ({ answer, question }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className="border-b border-white/75 pb-4">
      <button
        className="flex w-full cursor-pointer gap-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="flex-1 text-xl">{question}</span>
        <ChevronDown
          className={cn("transition-300 mt-1", { "rotate-180": open })}
        />
      </button>

      <p
        className={cn("transition-300 h-0 overflow-hidden", {
          "h-auto pt-5": open,
        })}
      >
        {answer}
      </p>
    </li>
  );
};
