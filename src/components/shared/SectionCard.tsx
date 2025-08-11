import React, { FC, ReactNode } from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utilities/utils";

type Props = FC<{
  variant?: "primary" | "secondary";
  title: string;
  subtitle: ReactNode;
  imgSrc?: string;
  className?: string;
}>;
const SectionCard: Props = ({
  subtitle,
  title,
  variant = "primary",
  imgSrc,
  className,
}) => {
  return (
    <section className="mt-8 px-4">
      <section
        className={cn(
          "card flex-col px-4 py-8 md:flex-row md:p-10",
          {
            "from-[#E7ECFE] to-[#D9ECFF] md:pe-16": variant === "primary",
            "from-[#E8F5FC] to-[#FFEBDF] md:flex-row-reverse md:ps-16":
              variant === "secondary",
          },
          className,
        )}
      >
        <main
          className={cn(
            "mx-auto aspect-[4.16/5.3] w-full max-w-[416px] flex-1 md:mx-0",
            {
              "hidden md:inline-block": !imgSrc,
            },
          )}
        >
          {imgSrc && (
            <div className="relative aspect-[4.16/5.3] overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          )}
        </main>

        <main className="mx-auto w-full max-w-[477px] flex-1 text-center md:sticky md:top-10 md:mx-0 md:text-left">
          <h1 className="text-[24px] font-semibold md:max-w-[328px]">
            {title}
          </h1>

          <div className="my-10 text-left text-lg font-medium">{subtitle}</div>

          <Button className="w-[150px] rounded-full" variant="secondary">
            Explore
            <ArrowRight className="transition-300 size-5 group-hover:translate-x-0.5" />
          </Button>
        </main>
      </section>
    </section>
  );
};

export default SectionCard;
