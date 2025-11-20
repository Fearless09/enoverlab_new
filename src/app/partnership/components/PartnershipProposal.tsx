import { Button } from "@/components/ui/Button";
import UiLink from "@/components/ui/UiLink";
import { Download } from "lucide-react";
import Image from "next/image";

const PartnershipProposal = () => {
  return (
    <section className="wrapper mt-25 text-pretty">
      <h1 className="text-max-40 mb-12 text-center font-semibold text-[#222222]">
        Partnership Proposal
      </h1>

      <section className="flex flex-col items-center justify-center gap-x-10 gap-y-20 md:flex-row md:justify-between">
        <main className="w-full max-w-[670px] flex-1">
          <p className="text-max-24 text-center font-light text-[#404040] md:text-left">
            This proposal outlines a partnership with Enoverlab, an
            ACTD-accredited institute specializing in product management
            training. Together, we will design tailored programs that build
            practical skills, empower participants, and support your
            organization's growth.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 min-[330px]:flex-row md:justify-start">
            <UiLink
              variant="outline"
              href="/contact_us"
              className="w-full max-w-[170px]"
            >
              See More
            </UiLink>
            <Button className="w-full max-w-[170px]">
              Download <Download />
            </Button>
          </div>
        </main>

        <main className="relative aspect-420/800 w-full max-w-105 flex-1 overflow-clip">
          <Image
            fill
            sizes="100%"
            src="/Partnership/A4.png"
            alt="Iphone14"
            className="top-10! left-1/2! w-[89%]! -translate-x-1/2 object-contain object-center"
          />
          <Image
            fill
            sizes="100%"
            src="/Partnership/Iphone.png"
            alt="Iphone14"
          />
        </main>
      </section>
    </section>
  );
};

export default PartnershipProposal;
