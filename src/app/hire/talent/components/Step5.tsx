import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import InputGroup from "@/components/ui/InputGroup";
import Checkbox from "@/components/ui/Checkbox";

const shortlistOptions = ["No", "Yes"];

const Step5: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <InputGroup label="Salary Range / Stipend (optional)" id="salary" />

      <div>
        <h6 className="text-base text-black md:text-lg">
          Would you like Enoverlab to shortlist candidates for you?
        </h6>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-5">
          {shortlistOptions.map((option, index) => (
            <Checkbox
              key={index}
              label={option}
              type="radio"
              id={`shortlist_${index}`}
              name={`shortlist`}
            />
          ))}
        </div>
      </div>

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
