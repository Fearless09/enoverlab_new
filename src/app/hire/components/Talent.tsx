import { Lightbulb, SquareStack, VectorSquare } from "lucide-react";
import Image from "next/image";

const Talent = () => {
  return (
    <section className="relative bg-[#E0E9FE] py-20">
      <section className="wrapper ipad:flex-row flex flex-col-reverse items-center justify-between gap-x-5 gap-y-12">
        <main className="relative aspect-[5.69/5] w-full max-w-[569px] flex-1 shrink-0 overflow-clip rounded-md">
          <Image
            alt=""
            src={"/hire_2.png"}
            fill
            className="object-cover object-center"
            sizes="100%"
          />
        </main>

        <main className="flex-1 text-pretty">
          <h1 className="text-primary-400 text-max-40/[60px] font-semibold">
            Hire our talent
          </h1>

          <ul className="mt-9 space-y-7">
            {benefits.map(({ Icon, description, title }, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex size-17 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Icon className="text-primary-400 size-9" />
                </span>

                <span className="text-max-20">
                  <h1 className="text-primary-400 font-semibold">{title}</h1>
                  <p className="mt-0.5 font-light">{description}</p>
                </span>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </section>
  );
};

export default Talent;

const benefits = [
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
