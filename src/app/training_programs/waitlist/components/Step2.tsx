import { StepsProps } from "./Step1";
import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import TextAreaGroup from "@/components/ui/TextAreaGroup";


const AppliedBefore = [
  "No",
  "Yes",
];

const Step2: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <TextAreaGroup
        label="Why are you interested in joining this program?"
        id="Interested?"
      />
      <TextAreaGroup
        label="What impact do you hope this training will have on your career or future?"
        id="career_impact"
      />

      <div>
        <h6 className="text-base text-black md:text-lg">
          Have you applied for Enoverlab sponsorship before?
        </h6>
        <div className="items-left mt-3 flex flex-col justify-start gap-x-7 gap-y-5">
          {AppliedBefore.map((Applied, index) => (
            <Checkbox key={index} label={Applied} id={`hire_type_${index}`} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Button
          className="w-[150px]"
          onClick={() => dispatcher({ type: "NEXT_STEP" })}
        >
          Next
        </Button>
      </div>
    </main>
  );
};

export default Step2;
