import { Button } from "@/components/ui/Button";
import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Waitlist = () =>{
  return(
    <>
      <div className="bg-primary-400">
        <div className="flex flex-row justify-between items-left gap-[70px] py-[68px] px-[175px]">
          <Image 
            width={495} 
            height={416} 
            src={"/training-program/waitlist.png"} 
            alt="" 
          />
          <div className="w-full mx-auto flex flex-col justify-between items-start gap-[14px] text-white">
            <h1 className="font-bold text-[36px]">Join the Sponsorship Waitlist</h1>
            <p>
              Can’t afford to fund your tech training right now? Join our sponsorship 
              waitlist to get matched with generous partners who believe in your potential. 
              Once selected, you’ll receive full or partial funding to kickstart your journey 
              into tech and innovation.
            </p>
            <UiLink 
              variant="outline" 
              href="/contact-us"
              size="md"
              className="flex flex-row justify-between gap-14 border-white text-white font-[300]"
            >
              <p>Join Waitlist</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Waitlist;