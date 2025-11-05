export type Nav = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};

export const navs: Nav[] = [
  { name: "Home", href: "/" },
  { name: "Training Programs", href: "/training_programs" },
  { name: "Hire", href: "/hire" },
  {
    name: "Sponsor",
    href: "/sponsor",
    dropdown: [
      { name: "Event", href: "/sponsor/event" },
      { name: "Students", href: "/sponsor/student" },
    ],
  },
  { name: "Partnership", href: "/partnership" },
];
