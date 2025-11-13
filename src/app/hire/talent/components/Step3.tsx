import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import Checkbox from "@/components/ui/Checkbox";

const levels = ["Entry-Level", "Mid-Level", "Advanced"];

const Step3: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <InputGroup
        label="Preferred Area(s) of Expertise"
        id="expertise"
        required
      />
      <InputGroup label="If Others please specify" id="expertise_others" />

      <div>
        <h6 className="text-base text-black md:text-lg">Experience Level</h6>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-5">
          {levels.map((level, index) => (
            <Checkbox key={index} label={level} id={`level_${index}`} />
          ))}
        </div>
      </div>

      <TextAreaGroup
        label="Technical/Tool Proficiency (if any)"
        id="proficiency"
      />

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
