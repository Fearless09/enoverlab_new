import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative px-4">
      <section className="card mt-[70px] from-[#DBEDFE] to-[#F4EFEC] py-24 ps-20 pe-10">
        <main className="w-full max-w-[360px] flex-1 ps-20">
          <h1 className="text-[48px] font-semibold">Partner with Enoverlab</h1>
          <p className="my-8 font-medium">
            Join force with the platform trusted by 100,000 industry to provide
            reliable and Accountable services
          </p>
          <Button variant="secondary">
            Apply Now
            <ArrowRight className="transition-300 size-5 group-hover:translate-x-0.5" />
          </Button>
        </main>

        <main className="sticky top-12 aspect-[6.2/3.4] max-w-[620px] flex-1 overflow-hidden rounded-[30px]">
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
