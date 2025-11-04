"use client";
import { FC } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import UiLink from "../ui/UiLink";
import { socialLinks } from "@/data/footer_data";

type Prop = FC<{
  title?: string;
  description?: string;
}>;

const Success: Prop = ({
  title = "Thank You!",
  description = "Thank you for your request. One of our advisors will review your details and reach out shortly to schedule a call at a convenient time.",
}) => {
  return (
    <section className="text-primary-400 mx-auto max-w-[650px] text-center leading-[160%]">
      <div className="mx-auto w-full max-w-110">
        <DotLottieReact src="/success.lottie" autoplay />
      </div>

      <h1 className="mt-5 text-[45px] font-medium">{title}</h1>
      <p className="mt-8 mb-20 text-xl">{description}</p>
      <UiLink
        href={"/"}
        variant="ghost"
        className="text-primary-400 text-xl font-bold"
      >
        Back to homepage
      </UiLink>

      <div className="mt-4 flex items-center justify-center gap-4">
        {socialLinks.map((socialLink, index) => (
          <Link
            href={socialLink.href}
            target="_blank"
            className="transition-300 hover:opacity-85 active:translate-y-0.5 [&_svg]:size-7.5"
            key={index}
          >
            {socialLink.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Success;
