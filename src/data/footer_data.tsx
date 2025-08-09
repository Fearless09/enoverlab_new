import {
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  WhatsAppSVG,
  YoutubeSVG,
} from "@/components/shared/SVGs";

export type SocialLinksType = {
  icon: React.ReactNode;
  href: string;
};

export const socialLinks: SocialLinksType[] = [
  {
    icon: <FacebookSVG />,
    href: "/",
  },
  {
    icon: <LinkedInSVG />,
    href: "/",
  },
  {
    icon: <YoutubeSVG />,
    href: "/",
  },
  {
    icon: <InstagramSVG />,
    href: "/",
  },
  {
    icon: <WhatsAppSVG />,
    href: "/",
  },
];

export type OtherLinksType = {
  name: string;
  href: string;
};

export const programs: OtherLinksType[] = [
  {
    name: "Basic Program",
    href: "/",
  },
  {
    name: "Adanced Program",
    href: "/",
  },
  {
    name: "Executive Coaching",
    href: "/",
  },
  {
    name: "Corporate Training",
    href: "/",
  },
  {
    name: "Onsite Training",
    href: "/",
  },
];

export const resources: OtherLinksType[] = [
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "E-books",
    href: "/",
  },
  {
    name: "Product Sessions",
    href: "/",
  },
  {
    name: "Career Advisor",
    href: "/",
  },
];

export const company: OtherLinksType[] = [
  {
    name: "About us",
    href: "/",
  },
  {
    name: "Accreditation",
    href: "/",
  },
  {
    name: "Our Teams",
    href: "/",
  },
  {
    name: "Review",
    href: "/",
  },
  {
    name: "Community",
    href: "/",
  },
  {
    name: "Contact us",
    href: "/",
  },
];
