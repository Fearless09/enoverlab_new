"use client";

import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import UiLink from "@/components/ui/UiLink";

const Join = () => {
  return (
    <section className="bg- bg-primary-400 py-25 text-white">
      <section className="wrapper flex flex-col items-center justify-center gap-x-8 gap-y-16 md:flex-row md:justify-evenly">
        <main className="w-full max-w-[425px] flex-1 text-center md:text-left">
          <h1 className="text-max-40 mb-15 font-semibold">
            Join Our Journey & Get Early Access
          </h1>
          <p className="text-max-24 font-light">
            “Sponsoring participants through Enoverlab created real impact—many
            now have career-ready skills.”
          </p>
        </main>

        <form
          className="w-full max-w-[365px] flex-1 space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <InputGroup placeholder="Full Name" className="h-14" required />
          <InputGroup
            placeholder="E-mail"
            type="email"
            className="h-14"
            required
          />
          <Button
            variant="secondary"
            type="submit"
            className="text-primary-400 w-full hover:bg-[#e0e0e0] active:scale-98"
          >
            Contact Us
          </Button>
        </form>
      </section>
    </section>
  );
};

export default Join;
