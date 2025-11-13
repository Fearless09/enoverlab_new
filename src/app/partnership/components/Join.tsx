"use client"

import { Button } from "@/components/ui/Button"
import InputGroup from "@/components/ui/InputGroup"
import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const companies = [
  "/partnership/Sachib_Logo.png",
  "/company/msft.png",
  "/company/microvest.png",
  "/company/ulospaces.png",
  "/company/elite.png",
];

const Join = () => {
  return (
    <>
      <div className="bg-[#003AD4] mb-8">
        <div className="wrapper w-[80%] mx-auto flex flex-row justify-center items-center py-10">
          <div className="w-[80%] mx-auto flex flex-col text-left gap-7 text-white px-15">
            <h1>Join Our Journey & Get Early Access</h1>
            <p>“Sponsoring participants through Enoverlab created real impact—many now have career-ready skills.”</p>
          </div>
          <form
            className="w-full space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup 
              placeholder="Full Name" 
              className="h-14" 
              required 
            />
            <InputGroup
              placeholder="E-mail"
              type="email"
              className="h-14"
              required
            />
            <UiLink 
              variant="primary" 
              href="/contact_us"
              className="font-medium"
            >
              Contact Us
            </UiLink>
          </form>
        </div>
      </div>

      
      <section className="relative py-5">
        <section className="wrapper overflow-hidden px-4">
          <main className="flex flex-nowrap items-center gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="relative aspect-[2.74/1.01] min-w-[179px] flex-1 shrink-0 overflow-clip"
              >
                <Image
                  alt={company}
                  src={company}
                  fill
                  className="object-contain object-center"
                  sizes="100%"
                />
              </div>
            ))}
          </main>
        </section>
      </section>
    </>
  )
}

export default Join;