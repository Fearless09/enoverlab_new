import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mt-15 md:mt-25">
      <section className="wrapper flex items-center justify-between gap-x-10 gap-y-16">
        <main className="text-primary-400 max-w-[689px] flex-1 text-pretty">
          <h1 className="text-[60px] font-medium">
            Hire skilled and talented Product Managers
          </h1>
          <p className="mt-6 mb-8 text-xl font-light">
            Help talented individuals gain access to life-changing tech
            education
          </p>
          <UiLink variant="outline">
            Hire a Talent{" "}
            <MoveRight className="transition-300 size-4.5 group-hover:translate-x-1.5" />
          </UiLink>
        </main>

        <main className="relative max-w-[447px] flex-1">
          <div className="relative aspect-[4.47/4.39] overflow-clip rounded-lg">
            <Image
              alt=""
              src={"/hire_1.png"}
              fill
              className="object-cover object-center"
            />
          </div>
        </main>
      </section>
    </section>
  );
};

export default Hero;
