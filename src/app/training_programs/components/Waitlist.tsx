import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Waitlist = () => {
  return (
    <section className="bg-primary-400 py-[68px] text-white">
      <section className="wrapper flex max-w-6xl flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <main className="relative aspect-square w-full max-w-[500px] flex-1 overflow-clip rounded-md">
          <Image
            fill
            src={"/training-program/waitlist.png"}
            alt=""
            className="object-cover object-center"
          />
        </main>

        <main className="max-w-[462px] flex-1 text-center text-pretty md:text-left">
          <h1 className="text-max-36 font-bold">
            Join the Sponsorship Waitlist
          </h1>
          <p className="text-max-20 mt-6 mb-5 font-light">
            Can&apos;t afford to fund your tech training right now? Join our
            sponsorship waitlist to get matched with generous partners who
            believe in your potential. Once selected, you&apos;ll receive full
            or partial funding to kickstart your journey into tech and
            innovation.
          </p>
          <UiLink
            variant="outline"
            href="/training_programs/waitlist"
            size="lg"
            className="gap-3 border-white font-light text-white"
          >
            <p>Join Waitlist</p>
            <MoveRight className="transition-300 size-4.5 group-hover:translate-x-1.5" />
          </UiLink>
        </main>
      </section>
    </section>
  );
};

export default Waitlist;
