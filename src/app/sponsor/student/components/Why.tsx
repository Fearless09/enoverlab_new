import { Lightbulb, SquareStack, VectorSquare } from "lucide-react";
import Image from "next/image";

const Why = () => {
  return (
    <section className="mt-14 bg-[#E0E9FE] py-20">
      <section className="wrapper flex max-w-5xl items-center justify-center gap-10">
        <main className="relative aspect-[5.71/5.69] max-w-[570px] flex-1 overflow-clip rounded-xs">
          <Image alt="" src={"/sponsor_3.png"} fill sizes="100%" />
        </main>

        <main className="max-w-[400px] flex-1 text-pretty">
          <h1 className="text-primary-400 text-[40px]/[60px] font-semibold">
            Why Sponsor a <br />
            Student?
          </h1>

          <ul className="mt-8 ml-4 space-y-7">
            {reasons.map(({ Icon, description, title }, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex size-17 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Icon className="size-9" />
                </span>

                <span className="text-xl">
                  <h1 className="font-semibold">{title}</h1>
                  <p className="mt-2 font-light">{description}</p>
                </span>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </section>
  );
};

export default Why;

const reasons = [
  {
    Icon: Lightbulb,
    title: "Recognition",
    description: "Get acknowledged for your contribution",
  },
  {
    Icon: VectorSquare,
    title: "Empower Talent",
    description: "Support students who lack access to finance",
  },
  {
    Icon: SquareStack,
    title: "Community Impact",
    description: "Make a tangible difference in undeserved communities",
  },
];
