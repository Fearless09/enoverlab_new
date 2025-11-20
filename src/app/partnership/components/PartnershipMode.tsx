import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const PartnershipMode = () => {
  return (
    <section className="wrapper mt-19 mb-25 text-pretty">
      <h1 className="text-max-40 mb-12 text-center font-semibold text-[#222222]">
        Partnership Modes
      </h1>

      <section className="space-y-8">
        {modes.map((item, index) => (
          <ModeCard key={index} {...item} />
        ))}
      </section>
    </section>
  );
};

export default PartnershipMode;

type Mode = {
  title: string;
  description: string;
  img: string;
};

const modes: Mode[] = [
  {
    title: "Government Training Proposal",
    description:
      "We propose a partnership in which Enoverlab will provide customized training to government workers, focusing on product management principles, strategic thinking, and innovation tailored for the public sector. Our programs combine hands-on experience with practical knowledge, ensuring that participants gain skills they can immediately apply in their roles",
    img: "/partnership/map.png",
  },
  {
    title: "Church Partnership",
    description:
      "Empowers church youth and members with market-relevant skills.\nAligns with church missions of equipping members for life and career.\nOffers faith-based communities an opportunity for professional development.\nEncourages value-driven tech talent rooted in strong moral principle.",
    img: "/partnership/girlWithMic.png",
  },
  {
    title: "Community Partnership",
    description:
      "Builds local capacity in underserved areas. Encourages economic growth through skill empowerment.\nFosters goodwill between the institute and grassroots communities.\nBridges the gap between tech knowledge and local development.",
    img: "/partnership/picnic.png",
  },
  {
    title: "Foundation Partnership (NGO)",
    description:
      "Amplifies social impact goals by offering practical, scalable skills to beneficiaries.\nAttracts funding and donor interest through measurable outcomes like employment.\nPromotes sustainable development goals such as education, innovation, and employment.\nShared platforms for awareness campaigns, events, and workshops.",
    img: "/partnership/lookingAtLaptop.png",
  },
  {
    title: "Hire Tech Talents",
    description:
      "Panel Sessions\nSpeaker Sessions\nProfiling sessions where companies can profile talents\nWorkshops\nCompany Exhibitions\nNetworking Opportunities\nSuccess Stories\nExclusive Job Opportunities",
    img: "/partnership/doubleScreen.png",
  },
  {
    title: "Sponsor an Event",
    description:
      "Enhances brand image and public trust by contributing to youth development and digital literacy.\nFulfills Corporate Social Responsibility (CSR) objectives through skill-building and employment empowerment.\nOpportunities to co-host impactful tech events and social impact projects.\nTax incentives or CSR-related recognitions from industry bodies.",
    img: "/partnership/event.png",
  },
  {
    title: "Sponsor a Student",
    description:
      "Panel Sessions\nSpeaker Sessions\nProfiling sessions where companies can profile talents\nWorkshops\nCompany Exhibitions\nNetworking Opportunities\nSuccess Stories\nExclusive Job Opportunities",
    img: "/partnership/Girl.png",
  },
  {
    title: "Organize A Masterclass with Us",
    description:
      "Partner with us to host an intensive, hands-on masterclass designed to equip participants with practical product management and technology skills. Our expert-led sessions combine real-world case studies, interactive workshops, and actionable strategies that empower professionals, students, or community members to thrive in today's digital economy.",
    img: "/partnership/Gathering.png",
  },
];

const ModeCard: FC<Mode> = ({ description, img, title }) => {
  return (
    <main className="flex flex-col-reverse items-center justify-center gap-x-6 gap-y-8 rounded-xl bg-[#D8E3FF] p-6 md:flex-row md:justify-between md:rounded-3xl md:even:flex-row-reverse lg:p-8">
      <div className="relative aspect-416/529 w-full max-w-[416px] flex-1 overflow-clip rounded-xl md:rounded-3xl">
        <Image
          alt={title}
          src={img}
          fill
          sizes="100%"
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-[497px] flex-1">
        <h1 className="text-max-24 mb-5 font-bold text-[#222222]">{title}</h1>
        <p className="text-max-20 mb-8 font-light whitespace-pre-line text-[#404040]">
          {description}
        </p>
        <UiLink
          variant="secondary"
          href="/contact_us"
          size="md"
          className="text-primary-400 w-full max-w-[180px] rounded-full"
        >
          Contact Us
          <MoveRight className="size-4.5" />
        </UiLink>
      </div>
    </main>
  );
};
