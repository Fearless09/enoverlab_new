import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mt-15 md:mt-25">
      <section className="wrapper flex flex-col items-center justify-between gap-x-5 gap-y-16 md:flex-row">
        <main className="text-primary-400 mx-auto max-w-[689px] flex-1 text-center text-pretty md:mx-0 md:text-left">
          <h1 className="text-max-60 font-medium">
            Hire skilled and talented Product Managers
          </h1>
          <p className="text-max-20/[35px] mx-auto mt-6 mb-8 max-w-[504px] font-light md:mx-0">
            Help talented individuals gain access to life-changing tech
            education
          </p>
          <UiLink variant="outline" href="/hire/talent">
            Hire a Talent{" "}
            <MoveRight className="transition-300 size-4.5 group-hover:translate-x-1.5" />
          </UiLink>
        </main>

        <main className="relative w-full max-w-[447px] flex-1">
          <span className="bg-primary-400 absolute top-10 right-0 z-1 flex items-center justify-center rounded-xs px-5 py-2 font-sans text-lg font-medium text-white min-[1335px]:-right-[10%]">
            Result driven
          </span>
          <span className="bg-primary-400 absolute bottom-15 left-0 z-1 flex items-center justify-center rounded-xs px-5 py-2 font-sans text-lg font-medium text-white min-[1335px]:-left-[10%]">
            Professional
          </span>
          <div className="relative aspect-[4.47/4.39] shrink-0 overflow-clip rounded-lg">
            <Image
              alt=""
              src={"/hire_1.png"}
              fill
              className="object-cover object-center"
              sizes="100%"
            />
          </div>
        </main>
      </section>
    </section>
  );
};

export default Hero;
