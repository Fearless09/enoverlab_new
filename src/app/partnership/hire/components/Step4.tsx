import { StepsProps } from "./Step1";
import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";

const hireType = [
  "Yes (please specify)",
  "No, would like Enoverlab to propose",
];

const hireType1 = [
  "Yes",
  "No",
];

const hireType2 = [
  "Yes",
  "No",
];

const Step4: StepsProps = ({ dispatcher }) => {
  return (
    <>
      <main className="w-full max-w-[600px] space-y-7">
        <div>
          <h6 className="text-lg text-black"> Do you have a proposed budget or funding range?</h6>
          <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
            {hireType.map((hire, index) => (
              <Checkbox key={index} label={hire} id={`hire_type_${index}`} />
            ))}
          </div>
        </div>

        <InputGroup
          label="If Others please specify"
          id="If Others please specify"
          placeholder=""
        />
        
        <div>
          <h6 className="text-lg text-black"> Will this partnership be part of your CSR or social impact project?</h6>
          <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
            {hireType1.map((hire, index) => (
              <Checkbox key={index} label={hire} id={`hire_type_${index}`} />
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-lg text-black">Would you like to include certification for participants?</h6>
          <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
            {hireType2.map((hire, index) => (
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
    </>
  );
};

export default Step4;
