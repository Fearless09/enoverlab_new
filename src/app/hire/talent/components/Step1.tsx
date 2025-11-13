import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import { Action } from "@/hooks/useSteps";
import { FC } from "react";

export type StepsProps = FC<{ dispatcher: (action: Action) => void }>;

const Step1: StepsProps = ({ dispatcher }) => {
  return (
    <main>
      <main className="space-y-7 rounded-3xl bg-[#D8E2FF] px-6 py-8">
        <InputGroup
          label="Organization Name"
          id="organization_name"
          required
          placeholder="Enter your organization name"
        />

        <div className="grid grid-cols-2 gap-5">
          <InputGroup
            label="Industry Field"
            id="industry_field"
            required
            placeholder="Enter your industry field"
          />
          <InputGroup
            label="Headquaters"
            id="headquaters"
            required
            placeholder="Enter your headquaters"
          />
        </div>
        <InputGroup
          label="Website/Social Media Link"
          id="website_social_media"
          required
          placeholder="Enter your social media or website link"
        />
      </main>

      <main className="mt-9 mb-10 space-y-7 rounded-3xl bg-[#D8E2FF] px-6 py-8">
        <InputGroup
          label=" Contact Person's Full Name"
          id="fullname"
          required
          placeholder="Enter your full name"
        />

        <div className="grid grid-cols-2 gap-5">
          <InputGroup
            label="Position/Role"
            id="position_role"
            required
            placeholder="Enter your position or role"
          />
          <InputGroup
            label="Phone Number"
            id="phone_number"
            required
            placeholder="Enter your phone number"
          />
        </div>
        <InputGroup
          label="E-mail Address"
          id="email_address"
          type="email"
          required
          placeholder="Enter your e-mail address"
        />
      </main>

      <Button
        className="w-[150px]"
        onClick={() => dispatcher({ type: "NEXT_STEP" })}
      >
        Next
      </Button>
    </main>
  );
};

export default Step1;
