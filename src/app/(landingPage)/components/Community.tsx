import SectionCard from "@/components/shared/SectionCard";
import React from "react";

const Community = () => {
  return (
    <SectionCard
      variant="primary"
      title="Community Partnership"
      subtitle={
        <>
          Builds local capacity in underserved areas.
          <br />
          Encourages economic growth through skill empowerment.
          <br />
          Fosters goodwill between the institute and grassroots communities.
          <br />
          Bridges the gap between tech knowledge and local development.
        </>
      }
      imgSrc="/community.svg"
    />
  );
};

export default Community;
