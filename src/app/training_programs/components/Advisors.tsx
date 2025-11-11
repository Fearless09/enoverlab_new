import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const Advisors = () => {
  return (
    <section className="wrapper my-25 flex max-w-6xl flex-col items-center justify-between gap-x-5 gap-y-12 md:flex-row">
      <main className="text-primary-400 max-w-[432px] text-center text-pretty md:text-left">
        <h1 className="text-max-40 font-bold">Speak to An Advisor</h1>
        <p className="text-max-20 my-6 font-light">
          Get personalized guidance from our experts. Whether you&apos;re
          exploring training options, partnerships, or custom programs, our
          advisors are here to help you make the best choice.
        </p>
        <UiLink href="/training_programs/advisor" size="md" className="px-8">
          Contact Advisor
        </UiLink>
      </main>

      <main className="relative aspect-square w-full max-w-[495px] overflow-clip rounded-lg">
        <Image
          fill
          src={"/training-program/advisor.png"}
          alt=""
          className="object-cover object-center"
        />
      </main>
    </section>
  );
};

export default Advisors;
