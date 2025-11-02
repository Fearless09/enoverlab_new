import { StepsProps } from "./Step1";
import { Button } from "@/components/ui/Button";
import TextAreaGroup from "@/components/ui/TextAreaGroup";

const Step4: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <TextAreaGroup label="Brief Job Description" id="job_description" />
      <TextAreaGroup label="Key Responsibilities" id="responsibilities" />
      <TextAreaGroup label="Preferred Work Schedule" id="work_schedule" />

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

export default Step4;
