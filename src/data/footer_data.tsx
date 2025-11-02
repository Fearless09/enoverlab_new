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

type FooterLink = {
  [key: string]: {
    name: string;
    href: string;
  }[];
};

export const footerLinks: FooterLink = {
  programs: [
    { name: "Basic Program", href: "/training_programs" },
    { name: "Advanced Program", href: "/training_programs" },
  ],
  ["free resource"]: [
    { name: "Internship", href: "" },
    { name: "Hiring", href: "" },
    { name: "Training", href: "" },
    { name: "Events", href: "" },
  ],
  company: [
    { name: "Community", href: "/contact_us" },
    { name: "Contact us", href: "/contact_us" },
  ],
};
