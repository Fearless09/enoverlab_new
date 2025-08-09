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
          "card p-10",
          {
            "from-[#E7ECFE] to-[#D9ECFF] pe-16": variant === "primary",
            "flex-row-reverse from-[#E8F5FC] to-[#FFEBDF] ps-16":
              variant === "secondary",
          },
          className,
        )}
      >
        <main className="aspect-[4.16/5.3] w-full max-w-[416px] flex-1">
          {imgSrc && (
            <div className="relative aspect-[4.16/5.3] overflow-hidden rounded-[30px] border-2 border-white">
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

        <main className="sticky top-10 w-full max-w-[477px] flex-1">
          <h1 className="max-w-[328px] text-[24px] font-semibold">{title}</h1>

          <div className="my-10 text-lg font-medium">{subtitle}</div>

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
