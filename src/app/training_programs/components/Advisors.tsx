import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Advisors = () => {
  return(
    <>
      <div className="bg-white">
        <div className="flex flex-row justify-between items-left gap-[70px] py-[68px] px-[175px]">
          <div className="w-full mx-auto flex flex-col justify-center items-start gap-[34px] text-primary-400  ">
            <h1 className="font-bold text-[36px]">Speak to An Advisor</h1>
            <p>
              Get personalized guidance from our experts. Whether you’re exploring training options, 
              partnerships, or custom programs, our advisors are here to help you make the best choice.
            </p>
            <UiLink 
              variant="outline" 
              href="/contact-us"
              size="md"
              className="bg-primary-400 flex flex-row justify-between gap-14 border-white text-white font-[300]"
            >
              Contact Advisor
            </UiLink>
          </div>
          <Image 
            width={495} 
            height={416} 
            src={"/training-program/advisor.png"} 
            alt="" 
          />
        </div>
      </div>
    </>
  )
}

export default Advisors;