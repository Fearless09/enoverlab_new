"use client";

import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";

const CTA = () => {
  return (
    <section className="mt-24 mb-20">
      <section className="wrapper text-primary-400 text-center text-pretty">
        <h1 className="text-max-40 font-medium">Sponsor our Tech Event</h1>
        <p className="text-max-20/[170%] mx-auto mt-3 max-w-[800px] font-light">
          We're currently preparing an exciting lineup of events to launch soon!
          <br />
          There are no active events at the moment, but once our programs
          officially roll out, you'll have the opportunity to sponsor impactful
          masterclasses, bootcamps, and community events across Africa.
          <br />
          Stay Updated — Join our newsletter to be the first to know when
          sponsorship opportunities open!
        </p>

        <form
          className="mx-auto mt-15 max-w-[450px] space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <InputGroup placeholder="Full Name" className="h-14" required />
          <InputGroup
            placeholder="E-mail"
            type="email"
            className="h-14"
            required
          />
          <Button type="submit" className="w-full text-lg">
            Submit
          </Button>
        </form>
      </section>
    </section>
  );
};

export default CTA;
