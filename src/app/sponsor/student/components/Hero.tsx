import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-8">
      <section className="wrapper flex justify-between">
        <main className="text-primary-400 max-w-[545px] flex-1 text-pretty">
          <h1 className="text-[60px] font-medium">
            Sponsor a Student and Change a Life
          </h1>

          <p className="mt-6 mb-9 text-2xl font-light">
            Help talented individuals gain access to life-changing tech
            education
          </p>

          <UiLink href="/sponsor/request" className="w-full max-w-[250px]">
            Become a Sponsor{" "}
            <MoveRight className="transition-300 size-4.5 group-hover:translate-x-1.5" />
          </UiLink>
        </main>

        <main className="relative aspect-[5.23/5.33] max-w-[520px] flex-1 overflow-clip rounded-xs">
          <Image alt="" src={"/sponsor_2.png"} fill sizes="100%" />
        </main>
      </section>
    </section>
  );
};

export default Hero;
