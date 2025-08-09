import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Community = () => {
  return (
    <SectionCard
      variant="primary"
      title="Community Partnership"
      subtitle={
        <ul className="flex flex-col gap-3">
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      }
      imgSrc="/community.svg"
    />
  );
};

export default Community;

const lists = [
  "Builds local capacity in underserved areas.",
  "Encourages economic growth through skill empowerment.",
  "Fosters goodwill between the institute and grassroots communities.",
  "Bridges the gap between tech knowledge and local development.",
];
