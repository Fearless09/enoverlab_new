import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";

const Step3: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <InputGroup
        label="Preferred Area(s) of Expertise"
        id="expertise"
        required
      />
      <InputGroup label="If Others please specify" id="expertise_others" />
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
