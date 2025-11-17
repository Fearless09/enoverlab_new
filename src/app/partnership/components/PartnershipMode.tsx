import UiLink from "@/components/ui/UiLink";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const PartnershipMode = () => {
  return (
    <>
      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row items-center justify-between gap-25 p-5">
          <Image width={495} height={519} src={"/partnership/map.png"} alt="" />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">
              Government Training Proposal
            </h1>
            <p className="text-xl">
              We propose a partnership in which Enoverlab will provide
              customized training to government workers, focusing on product
              management principles, strategic thinking, and innovation tailored
              for the public sector. Our programs combine hands-on experience
              with practical knowledge, ensuring that participants gain skills
              they can immediately apply in their roles
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row-reverse items-center justify-between gap-25 p-5">
          <Image
            width={495}
            height={519}
            src={"/partnership/girlWithMic.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">Church Partnership</h1>
            <p className="text-[20px]">
              Empowers church youth and members with market-relevant skills.
              Aligns with church missions of equipping members for life and
              career. Offers faith-based communities an opportunity for
              professional development. Encourages value-driven tech talent
              rooted in strong moral principle.
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row items-center justify-between gap-25 p-5">
          <Image
            width={495}
            height={519}
            src={"/partnership/picnic.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">Community Partnership</h1>
            <p className="text-[20px]">
              Builds local capacity in underserved areas. Encourages economic
              growth through skill empowerment. Fosters goodwill between the
              institute and grassroots communities. Bridges the gap between tech
              knowledge and local development.
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="p=5 flex flex-row-reverse items-center justify-between gap-25">
          <Image
            width={495}
            height={519}
            src={"/partnership/lookingAtLaptop.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">
              Foundation Partnership (NGO)
            </h1>
            <p className="text-[20px]">
              Amplifies social impact goals by offering practical, scalable
              skills to beneficiaries. Attracts funding and donor interest
              through measurable outcomes like employment. Promotes sustainable
              development goals such as education, innovation, and employment.
              Shared platforms for awareness campaigns, events, and workshops.
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row items-center justify-between gap-25 p-5">
          <Image
            width={495}
            height={519}
            src={"/partnership/doubleScreen.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">Hire Tech Talents</h1>
            <p className="text-[20px]">
              Panel Sessions <br />
              Speaker Sessions <br />
              Profiling sessions where companies can profile talents <br />
              Workshops <br />
              Company Exhibitions <br />
              Networking Opportunities <br />
              Success Stories Exclusive <br />
              Job Opportunities <br />
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="-5 flex flex-row-reverse items-center justify-between gap-25">
          <Image
            width={495}
            height={519}
            src={"/partnership/event.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">Sponsor an Event</h1>
            <p className="text-[20px]">
              Enhances brand image and public trust by contributing to youth
              development and digital literacy. Fulfills Corporate Social
              Responsibility(CSR) objectives through skill-building and
              employment empowerment. Opportunities to co-host impactful tech
              events and social impact projects. Tax incentives or CSR-related
              recognitions from industry bodies.
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row items-center justify-between gap-25 p-5">
          <Image
            width={495}
            height={519}
            src={"/partnership/Girl.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">Sponsor an Student</h1>
            <p className="text-[20px]">
              Panel Sessions <br />
              Speaker Sessions <br />
              Profiling sessions where companies can profile talents <br />
              Workshops <br />
              Company Exhibitions <br />
              Networking Opportunities <br />
              Success Stories Exclusive <br />
              Job Opportunities <br />
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-[80%] rounded-2xl bg-[#D8E3FF]">
        <div className="flex flex-row-reverse items-center justify-between gap-25 p-5">
          <Image
            width={495}
            height={519}
            src={"/partnership/Gathering.png"}
            alt=""
          />
          <div className="mx-auto flex w-full flex-col items-start justify-between gap-10 text-black">
            <h1 className="text-[24px] font-bold">
              Organize A Masterclass with Us
            </h1>
            <p className="text-[20px]">
              Partner with us to host an intensive, hands-on masterclass
              designed to equip participants with practical product management
              and technology skills. Our expert-led sessions combine real-world
              case studies, interactive workshops, and actionable strategies
              that empower professionals, students, or community members to
              thrive in today's digital economy.
            </p>
            <UiLink
              variant="outline"
              href="/training_programs/waitlist"
              size="md"
              className="flex flex-row justify-between gap-7 rounded-4xl border-white bg-white text-[20px] text-[#00B7F8]"
            >
              <p>Contact Us</p>
              <MoveRight className="size-6" />
            </UiLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipMode;
