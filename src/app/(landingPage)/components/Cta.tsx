import { Gmail, Telephone } from "@/components/shared/SVGs";
import UiLink from "@/components/ui/UiLink";

const CTA = () => {
  return (
    <section className="relative bg-[#E0E9FE] py-16.5">
      <section className="wrapper flex flex-col items-center justify-between gap-10 md:flex-row">
        <main className="text-primary-400 max-w-[500px] flex-1 text-center md:text-left">
          <h1 className="text-max-40 font-semibold">
            Can't find what you need?
          </h1>
          <p className="text-max-20 mt-4 mb-8.5 max-w-[450px] font-light">
            Build a partnership tailored just for you. Speak to an advisor
          </p>

          <UiLink href="/training_programs/advisor">Speak to an Advisor</UiLink>
        </main>

        <main className="shrink-0 space-y-4">
          {contacts.map(({ Icon, links }, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-md bg-white">
                <Icon className="size-6.5" />
              </span>

              <ul className="flex flex-col gap-px">
                {links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-max-20 font-light text-[#002A42]"
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
  { Icon: Telephone, links: ["+234 803 4567 890"] },
  { Icon: Gmail, links: ["enoverlab@gmail.com", "programs@enoverlab.com"] },
];
