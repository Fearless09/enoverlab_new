"use client";
import FAQ, { Faq } from "@/components/shared/FAQ";
import Success from "@/components/shared/Success";
import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { useState } from "react";

const AdvisorPage = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <>
      <section className="wrapper my-15 text-pretty">
        {!submitted ? (
          <section className="flex flex-col justify-between gap-x-7 gap-y-12 md:flex-row">
            <main className="mx-auto max-w-[630px] flex-1 text-center md:mx-0 md:text-left">
              <h1 className="text-max-40 font-medium text-[#003AD4]">
                Speak to an Advisor
              </h1>
              <p className="text-max-20 mx-auto mt-4 max-w-[600px] font-light text-[#3D3D3D] md:mx-0">
                Have questions about our training programs, partnerships, or
                custom solutions? Our advisors are ready to provide expert
                guidance, walk you through your options, and help you choose the
                best path for your organization or career goals.
              </p>

              <form
                className="mx-auto mt-15 flex max-w-[550px] flex-col gap-5 md:mx-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <InputGroup
                  id="organization_name"
                  placeholder="Name of Organization"
                  required
                />
                <InputGroup
                  id="organization_email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <TextAreaGroup id="Message" placeholder="Message" required />
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="mt-7"
                >
                  Speak To An Advisor
                </Button>
              </form>
            </main>

            <main className="grid flex-1">
              <FAQ faqs={faqs} />
            </main>
          </section>
        ) : (
          <Success />
        )}
      </section>
    </>
  );
};

export default AdvisorPage;

const faqs: Faq[] = [
  {
    question: "Why do you need my organization's information?",
    answer:
      "We collect basic details to understand your company's goals, structure, and culture — so we can match you with the best-fit talent.",
  },
  {
    question:
      "Can individuals or startups without a registered company hire a talent?",
    answer:
      "Yes! We work with startups, founders, and growing teams at all stages — formal registration isn't required to access talent.",
  },
  {
    question: "Will my company details remain confidential?",
    answer:
      "No problem. You can provide a social media handle, portfolio, or short description of your work instead.",
  },
  {
    question: "What if my organization doesn't have a website yet?",
    answer:
      "Absolutely. All shared information is handled securely and used only for matching and communication purposes.",
  },
  {
    question:
      "Can I update my organization's contact person after submitting the form?",
    answer:
      "Yes — simply contact our support team, and we'll update your records right away.",
  },
];
