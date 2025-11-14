import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import { StepsProps } from "./Step1";
import Checkbox from "@/components/ui/Checkbox";

const hireType1 = [
  "Training programs",
  "Event sponsorship",
  "CSR initiative",
  "Internship or talent placement ",
  "Masterclass or bootcamp hosting",
  "Other (please specify)",
];

const hireType2 = [
  "Short-term (1–3 months)",
  "Mid-term (3–12 months)",
  "Long-term (1 year or more)",
];

const Step2: StepsProps = ({ dispatcher }) => {
  return (
    <main className="w-full max-w-[600px] space-y-7">
      <div>
        <h6 className="text-lg text-black">What kind of collaboration are you seeking?</h6>
        <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
          {hireType1.map((hire, index) => (
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
        <h6 className="text-lg text-black">Type of Hire</h6>
        <div className="mt-3 flex flex-col items-start gap-x-7 gap-y-5">
          {hireType2.map((hire, index) => (
            <Checkbox key={index} label={hire} id={`hire_type_${index}`} />
          ))}
        </div>
      </div>

      <Button
        className="w-[150px]"
        onClick={() => dispatcher({ type: "NEXT_STEP" })}
      >
        Next
      </Button>
    </main>
  );
};

export default Step2;
