import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative mt-10 px-4 md:mt-[64px]">
      <section className="wrapper flex items-center justify-between gap-x-10 gap-y-16">
        <main className="text-primary-400 max-w-[541px] flex-1 text-pretty">
          <h1 className="text-[60px] font-medium">
            Empowering Tech Talents WorldWide
          </h1>
          <p className="mt-2 text-xl font-light">
            At Enoverlab, we equip aspiring innovators with the skills, mindset,
            and community they need to thrive in the global tech ecosystem.
          </p>

          <div className="mt-5.5 flex items-center gap-8">
            <UiLink variant="outline" href="/partnership">
              Partner with us
            </UiLink>
            <UiLink variant="outline" href="/training_programs">
              Join as a student
            </UiLink>
          </div>
        </main>

        <main className="relative aspect-[5.23/4.05] max-w-[523px] flex-1 overflow-clip rounded">
          <Image
            alt=""
            src={"/hero_1.png"}
            fill
            className="object-cover object-center"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
