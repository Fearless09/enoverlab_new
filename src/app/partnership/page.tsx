import Companies from "@/components/shared/Companies";
import Hero from "./components/Hero";
import Join from "./components/Join";
import PartnershipMode from "./components/PartnershipMode";
import PartnershipProposal from "./components/PartnershipProposal";

const partnership = () => {
  return (
    <>
      <Hero />
      <PartnershipProposal />
      <PartnershipMode />
      <Join />
      <Companies />
    </>
  );
};

export default partnership;
