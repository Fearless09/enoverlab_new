import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Interns = () => {
  return (
    <SectionCard
      variant="primary"
      title="Partnership for Internship Placement"
      subtitle={
        <ul className="flex flex-col gap-3">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      }
      imgSrc="/interns.svg"
    />
  );
};

export default Interns;

const lists = [
  "Access to a pool of trained and job-ready product management, design, and development talent.",
  "Reduces recruitment costs and training time.",
  "Fresh ideas and innovative approaches from interns.",
  "Strengthens your talent pipeline for future hires.",
];
