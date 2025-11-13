"use client";

import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { LocationEdit, Mail, PhoneCallIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <section className="wrapper my-19 flex flex-col items-center justify-between gap-x-5 gap-y-12 md:flex-row md:items-start">
        <main className="max-w-[500px] flex-1 text-pretty">
          <h1 className="text-max-60 font-medium text-[#003AD4]">Contact Us</h1>
          <p className="text-max-20 mt-0.5 ml-2 font-light text-[#003AD4]">
            Reach out to Enoverlab for inquiries about training,
            <br /> partnerships, sponsorships, or collaborations — our <br />
            team is always ready to help you take the next step.
          </p>

          <div className="mt-10 space-y-7">
            {contacts.map((contact, index) => (
              <div key={index} className="flex gap-4.5">
                <contact.icon className="mt-2.5 size-6 shrink-0" />
                <div className="font-poppins text-max-20 space-y-0.5 font-medium">
                  {contact.lists.map((list, idx) => (
                    <p key={idx}>{list}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        <form
          className="flex w-full max-w-[480px] flex-1 flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputGroup id="full_name" required placeholder="Full name" />
          <InputGroup id="e_mail" required placeholder="E-mail" />
          <TextAreaGroup id="Message?" required placeholder="Message" />
          <Button type="submit" size="lg">
            Speak To An Advisor
          </Button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;

const contacts = [
  {
    icon: PhoneCallIcon,
    lists: ["+234 (813 489 7313)", "+234 (906 312 4595)"],
  },
  {
    icon: LocationEdit,
    lists: [
      "EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja, Lagos, Nigeria",
    ],
  },
  {
    icon: Mail,
    lists: ["sarah@enoverlab.com", "info@enoverlab.com"],
  },
];
