import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import InputGroup from "@/components/ui/InputGroup";
import { Action } from "@/hooks/useSteps";
import { FC } from "react";

export type StepsProps = FC<{ dispatcher: (action: Action) => void }>;

const EducationalLevelType = [
  "Secondary",
  "UNdergraduate",
  "Graduate",
  "Others",
];

const Step1: StepsProps = ({ dispatcher }) => {
  return (
    <main>
      <main className="space-y-7 rounded-3xl px-6 py-8">
        <InputGroup
          label="Full Name"
          id="Full"
          required
          placeholder="Enter your Full name"
        />

        <div className="grid grid-cols-2 gap-10">
          <InputGroup
            label="Phone Number"
            id="Phone Number"
            required
            placeholder="Enter your Phone Number"
          />
          <InputGroup
            label="Gender"
            id="Gender"
            required
            placeholder="Enter your Gender"
          />
        </div>
        <InputGroup
          label="Email Address"
          id="Email Address"
          required
          placeholder="Enter your Email Address"
        />

        <div className="grid grid-cols-2 gap-10">
          <InputGroup
            label="Date Of Birth"
            id="Date Of Birth"
            required
            placeholder="Enter your Date Of Birth"
          />
          <InputGroup
            label="Current Location"
            id="Current Location"
            required
            placeholder="Current Location"
          />
        </div>
      </main>

      <main className="space-y-7 rounded-3xl px-6 py-8">      
        <div>
          <h6 className="text-lg text-black">Type of Hire</h6>
          <div className="mt-3 flex flex-col justify-start items-left gap-x-7 gap-y-5">
            {EducationalLevelType.map((educationalLevel, index) => (
              <Checkbox key={index} label={educationalLevel} id={`hire_type_${index}`} />
            ))}
          </div>
        </div>

        <Button
          className="w-[150px]"
          onClick={() => dispatcher({ type: "NEXT_STEP" })}
        >
          Next
        </Button>
      </main>
    </main>
  );
};

export default Step1;
