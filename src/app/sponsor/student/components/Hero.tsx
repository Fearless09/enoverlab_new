import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-8">
      <section className="wrapper flex flex-col items-center justify-between gap-x-5 gap-y-12 md:flex-row md:items-start">
        <main className="text-primary-400 max-w-[545px] flex-1 text-center text-pretty md:text-left">
          <h1 className="text-max-60/[1.4] font-medium">
            Sponsor a Student and Change a Life
          </h1>

          <p className="text-max-24 mt-6 mb-9 font-light">
            Help talented individuals gain access to life-changing tech
            education
          </p>

          <UiLink href="/sponsor/request" className="w-full max-w-[250px]">
            Become a Sponsor{" "}
            <MoveRight className="transition-300 size-4.5 group-hover:translate-x-1.5" />
          </UiLink>
        </main>

        <main className="relative aspect-[5.23/5.33] w-full max-w-[520px] flex-1 overflow-clip rounded-md">
          <Image
            alt=""
            src={"/sponsor_2.png"}
            fill
            sizes="100%"
            className="object-cover object-center"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
