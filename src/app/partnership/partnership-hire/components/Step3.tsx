import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import Checkbox from "@/components/ui/Checkbox";

const hireType = [
  "Sponsorship/Support",
  "Co-creation of programs",
  "Implementation/Execution",
  "Talent recruitment",
];

const Step3: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <TextAreaGroup
        label="What are your main goals or expectations from this partnership?"
        id="proficiency"
      />

      <TextAreaGroup
        label="Who is your target audience or community for this partnership?"
        id="proficiency"
      />

      <div>
        <h6 className="text-lg text-black">What level of involvement do you prefer?</h6>
        <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
          {hireType.map((hire, index) => (
            <Checkbox key={index} label={hire} id={`hire_type_${index}`} />
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

export default Step3;
