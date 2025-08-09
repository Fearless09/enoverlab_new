import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative mt-10 px-4 md:mt-[70px]">
      <section className="card ipad:flex-row ipad:py-24 flex-col from-[#DBEDFE] to-[#F4EFEC] px-4 py-10 md:px-10 lg:pl-20">
        <main className="ipad:mx-0 ipad:text-left mx-auto w-full max-w-[360px] flex-1 text-center xl:pl-20">
          <h1 className="text-[36px] font-semibold md:text-[48px]">
            Partner with Enoverlab
          </h1>
          <p className="my-8 font-medium">
            Join force with the platform trusted by 100,000 industry to provide
            reliable and Accountable services
          </p>
          <Button variant="secondary">
            Apply Now
            <ArrowRight className="transition-300 size-5 group-hover:translate-x-0.5" />
          </Button>
        </main>

        <main className="ipad:sticky ipad:top-12 ipad:mx-0 rounded- relative mx-auto aspect-[6.2/3.4] w-full max-w-[620px] flex-1 overflow-hidden md:rounded-[30px]">
          <Image
            alt=""
            src={"/hero.svg"}
            fill
            priority
            className="object-cover object-center"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
