import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="bg-primary-400 relative py-20.5 text-white">
      <section className="wrapper flex items-center justify-between gap-10">
        <main className="relative aspect-[5.98/4.81] max-w-[598px] flex-1 overflow-clip rounded-[10px]">
          <Image
            alt=""
            src={"/hero_2.png"}
            fill
            className="object-cover object-center"
          />
        </main>

        <main className="max-w-[525px] flex-1 text-pretty">
          <h6 className="text-xl font-medium">SPONSORS</h6>
          <h1 className="mt-6 text-[36px] font-bold">
            Changing Lives,
            <br />
            Changing the World
          </h1>

          <p className="mt-5.5 text-xl mb-4 font-light">
            Through your support, we're transforming potential into purpose.
            Every sponsorship helps aspiring tech talents gain the skills,
            confidence, and opportunities to create lasting impact in their
            communities and beyond.
          </p>

          <UiLink
            variant="outline"
            className="hover:text-primary-400 border-white text-white hover:bg-white"
            href="/sponsor/student"
          >
            Sponsor a student <MoveRight className="size-6" />
          </UiLink>
        </main>
      </section>
    </section>
  );
};

export default Sponsors;
