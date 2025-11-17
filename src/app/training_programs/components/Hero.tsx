import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mt-15 md:mt-25">
      <section className="wrapper flex flex-col items-center justify-between gap-x-5 gap-y-16 md:flex-row">
        <main className="text-primary-400 max-w-[600px] flex-1 text-center text-pretty md:text-left">
          <h1 className="text-max-60/[1.3] font-medium">
            Learn from World Class Experts Anytime and Anywhere
          </h1>
          <p className="text-max-20 mx-auto mt-6 mb-8 max-w-[500px] md:mx-0">
            Learn from world-class experts: anytime, anywhere. Unlock expert-led
            lessons on your schedule, from any device.
          </p>
          <UiLink
            variant="outline"
            href="/contact_us"
            className="px-10 font-medium"
          >
            Contact Us
          </UiLink>
        </main>

        <main className="relative aspect-[5.32/3.95] w-full max-w-[540px] flex-1 overflow-clip rounded-lg">
          <Image
            alt=""
            src={"/training-program/hero1.png"}
            fill
            className="object-cover object-center"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
