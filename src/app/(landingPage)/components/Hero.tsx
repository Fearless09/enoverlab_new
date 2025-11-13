import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative mt-10 md:mt-16">
      <section className="wrapper flex flex-col items-center justify-between gap-x-10 gap-y-16 overflow-clip lg:flex-row">
        <main className="text-primary-400 max-w-[541px] flex-1 text-center text-pretty lg:text-left">
          <h1 className="text-max-60 font-medium">
            Empowering Tech Talents WorldWide
          </h1>
          <p className="text-max-20 mt-2 font-light">
            At Enoverlab, we equip aspiring innovators with the skills, mindset,
            and community they need to thrive in the global tech ecosystem.
          </p>

          <div className="mt-5.5 flex items-center justify-center gap-8 lg:justify-start">
            <UiLink variant="outline" href="/partnership">
              Partner with us
            </UiLink>
            <UiLink variant="outline" href="/training_programs">
              Join as a student
            </UiLink>
          </div>
        </main>

        <main className="relative aspect-[5.23/4.05] w-full max-w-[523px] flex-1 overflow-clip rounded">
          <Image
            alt=""
            src={"/hero_1.png"}
            fill
            className="object-cover object-center"
            sizes="100%"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
