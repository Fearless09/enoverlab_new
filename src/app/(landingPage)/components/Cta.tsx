import UiLink from "@/components/ui/UiLink";
import { Mail, PhoneIncoming } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative bg-[#E0E9FE] py-16.5">
      <section className="wrapper flex items-center justify-between gap-10">
        <main className="text-primary-400 max-w-[500px] flex-1">
          <h1 className="text-[40px] font-semibold">
            Can't find what you need?
          </h1>
          <p className="mt-4 mb-8.5 max-w-[450px] text-xl font-light">
            Build a partnership tailored just for you. Speak to an advisor
          </p>

          <UiLink>Speak to an Advisor</UiLink>
        </main>

        <main className="shrink-0 space-y-4">
          {contacts.map(({ Icon, links }, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-md bg-white">
                <Icon className="size-7" />
              </span>

              <ul className="flex flex-col gap-px">
                {links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-lg font-light text-[#002A42]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default CTA;

const contacts = [
  { Icon: PhoneIncoming, links: ["+234 803 4567 890"] },
  { Icon: Mail, links: ["enoverlab@gmail.com", "programs@enoverlab.com"] },
];
