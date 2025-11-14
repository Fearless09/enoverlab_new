import UiLink from "@/components/ui/UiLink";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";



const PartnershipProposal = () => {
  return (
    <>
      <div className="flex flex-row wrapper justify-center items-center gap-20 my-10">
        <div className="flex flex-col wrapper justify-center items-start gap-8">
          <div className="flex flex-col justify-start gap-6 text-left">
            <p className="text-xl text-[#404040] font-light font-plus-jakarta-sans">
              This proposal outlines a partnership with Enoverlab, an ACTD-accredited institute 
              specializing in product management training. Together, we will design tailored programs 
              that build practical skills, empower participants, and support your organization’s growth.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <UiLink 
              variant="primary" 
              href="/contact_us"
              className="font-medium"
            >
              See More
            </UiLink>
            <UiLink 
              variant="primary" 
              href="/contact_us"
              className="font-medium"
            >
              Download  <DownloadCloud />
            </UiLink>
          </div>
        </div>

        <div className=" w-[80%] ">
          <Image width={420.19} height={849.04} src="/Partnership/Iphone.png" alt="Iphone14" className="relative" />
          <div className="absolute right-45 top-190 text-[14px] text-center">
            <Image width={353} height={800} src="/Partnership/A4.png" alt="Iphone14" className="relative" />
            {/* <h1>Partnership Proposal</h1>
            <h3>WHO WE ARE:</h3>
            <p>Enoverlab – The Industry’s Leading Growth Catalyst</p>
            <ul>
              <li>
                <b>Proven Industry Leaders:</b> With a track record of transforming 
                corporate performance through innovative, results-driven training
              </li>
              <li>
                <b>Our Mission: </b>To turn every department into a high-output growth engine 
              </li>
              <li>
                <b>Our Edge: </b>A blend of proprietary frameworks, real-world insights, 
                and strategic rigour that sets us apart
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnershipProposal; 