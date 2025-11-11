import { Button } from "@/components/ui/Button";
import { StepsProps } from "./Step1";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import Checkbox from "@/components/ui/Checkbox";

const receiveEmails = [
  "No",
  "Yes",
  "Would you like to receive email updates about sponsorship opportunities?",
];

const Step3: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <div>
        <h6 className="text-base text-black md:text-lg">
          Would you like to receive email updates about sponsorship
          opportunities?
        </h6>
        <div className="items-left mt-3 flex flex-col justify-start gap-x-7 gap-y-5">
          {receiveEmails.map((receiveEmail, index) => (
            <Checkbox
              key={index}
              label={receiveEmail}
              id={`hire_type_${index}`}
            />
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
