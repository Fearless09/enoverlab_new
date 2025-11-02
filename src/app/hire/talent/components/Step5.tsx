import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import InputGroup from "@/components/ui/InputGroup";

const Step5: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <InputGroup label="Salary Range / Stipend (optional)" id="salary" />
      <InputGroup
        label="How soon do you want to begin the hiring process?"
        id="hiring_process"
      />

      <div className="mt-16">
        <Button
          className="w-[150px]"
          onClick={() => dispatcher({ type: "COMPLETED_STEP" })}
        >
          Next
        </Button>
      </div>
    </main>
  );
};

export default Step5;
