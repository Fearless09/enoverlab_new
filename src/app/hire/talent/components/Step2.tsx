import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import { StepsProps } from "./Step1";

const Step2: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <InputGroup
        label="Position Title"
        id="position_title"
        placeholder="Enter the position title"
      />
      <InputGroup
        label="Number of Talents Needed"
        id="no_talents"
        placeholder="Enter the number of talents needed"
      />
      <InputGroup
        label="Expected Start Date"
        id="start_date"
        type="date"
        placeholder="Enter the expected start date"
      />
      <InputGroup
        label="Duration (if applicable)"
        id="duration"
        placeholder="Enter the duration (if applicable)"
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

export default Step2;
