import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { LocationEdit, Mail, PhoneCallIcon } from "lucide-react";


const ContactPage = () => {
  return (
    <>
      <section className="wrapper my-19 flex justify-between gap-5">
        <main className="w-full max-w-[720px] flex flex-col justify-between gap-13">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#003AD4] text-6xl font-medium font-plus-jakarta-sans">Contact Us</h1>
            <p className=" text-[#003AD4] text-wrap text-[20px] font-plus-jakarta-sans">
              Reach out to Enoverlab for inquiries about training,<br /> partnerships, 
              sponsorships, or collaborations — our <br />team is always ready to help 
              you take the next step.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start gap-8">
              <PhoneCallIcon />
              <div className="flex flex-col justify-between gap-3">
                <p className="text-[20px] font-semibold font-poppins">+234 (813 489 7313)</p>
                <p className="text-[20px] font-semibold font-poppins">+234 (906 312 4595)</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-8">
              <LocationEdit />
              <div className="flex flex-wrap">
                <p className="text-[20px] font-semibold font-poppins">
                  EridanSpace, Oluwalogbon House, Plot A 
                  <br />Obafemi Awolowo Way, Alausa, Ikeja, 
                  <br />Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-8">
              <Mail />
              <div className="flex flex-col justify-between gap-3">
                <p className="text-[20px] font-semibold font-poppins">sarah@enoverlab.com</p>
                <p className="text-[20px] font-semibold font-poppins">info@enoverlab.com</p>
              </div>
            </div>
          </div>
        </main>

        <main className="flex flex-col gap-4 flex-1 justify-end">
          <InputGroup
            id="Full Name"
            required
            placeholder="Full name"
          />
          <InputGroup
            id="E-mail"
            required
            placeholder="E-mail"
          />
          <TextAreaGroup id="Message?" placeholder="Message" />
          <Button 
            variant="primary" 
            size="md"
            className="text-[20px] font-normal"
          >
            Speak  To An Advisor
          </Button>
        </main>
      </section>
    </>
  );
};

export default ContactPage;