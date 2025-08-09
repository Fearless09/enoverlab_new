import SectionCard from "@/components/shared/SectionCard";
import { Check } from "lucide-react";
import React from "react";

const Training = () => {
  return (
    <SectionCard
      variant="primary"
      title="Partnership for Training Government Workers"
      subtitle={
        <>
          <h6 className="mt-11 mb-8 text-xl font-semibold text-[#404040]">
            Benefits
          </h6>

          <ul className="mb-11 flex flex-col gap-8">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 text-lg text-[#404040]"
              >
                <span className="flex size-5 items-center justify-center rounded-[6px] bg-[#2FAEF4] text-white">
                  <Check className="size-4 stroke-[3px]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
};

export default Training;

const benefits = [
  "Enhance public service delivery",
  "Cost efficiency and process optimization",
  "Data driven decision making",
  "Innovation and leadership development",
];
