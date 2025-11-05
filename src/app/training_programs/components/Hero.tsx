import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mt-15 md:mt-25">
      <section className="wrapper flex items-start justify-between gap-x-10 gap-y-16">
        <main className="text-primary-400 max-w-[689px] flex-1 text-pretty gap-2">
          <h1 className="text-[60px] font-medium">
            Learn from World Class Experts Anytime and Anywhere
          </h1>
          <p className="mt-6 mb-8 max-w-[504px] text-[20px] font-Plus Jakarta Sans">
            Learn from world-class experts : anytime, anywhere. Unlock expert-led lessons
            on your schedule, from any device.
          </p>
          <UiLink 
            variant="outline" 
            href="/contact-us"
            className="font-[500]"
          >
            Contact Us
          </UiLink>
        </main>

        <main className="relative max-w-[447px] flex-1 m-0">
          <div className="relative aspect-[4.47/4.39] overflow-clip rounded-lg m-0">
            <Image
              alt=""
              src={"/training-program/hero1.png"}
              fill
              className="object-cover object-center m-0 rounded "
            />
          </div>
        </main>
      </section>
    </section>
  );
};

export default Hero;
