import Image from "next/image";
import React from "react"

const TrainWithUs = () => {
  return(
    <>
      <section className="wrapper relative mt-15 md:mt-25 ">
        <div className="flex flex-col justify-center items-center font-[18px] gap-[15px] text-primary-400">
          <h1 className="text-[40px]">Why Train with Us</h1>
          <p className="w-[530px] text-center font-[400]">We don’t just teach product management—we shape future-ready product leaders.</p>
        </div>
        <div className="flex flex-row justify-between gap-[8px] text-center mb-10">
          <div className="">
            <div className="py-[30px] px-[10px] bg-[#E0E9FE] rounded">
              <div className="flex flex-col justify-center items-center gap-[13px]">
                <Image
                  alt=""
                  src={"/training-program/Vector.png"}
                  width={40}
                  height={40}
                  className="object-cover object-center m-0"
                />
                <p className="w-[410px] font-semibold text-[#323232] text-[23.38px]">Industry Relevant curriculum</p>
                <p className="w-[352px] text-[#3D3D3D] text-[17.28px]/160%">You will learn practical skills, tools, and frameworks that are used in the real world—not just theory.</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="pt-[30px] pb-[8px] px-[33px] bg-[#E0E9FE] rounded">
              <div className="flex flex-col justify-center items-center gap-[13px]">
                <Image
                  alt=""
                  src={"/training-program/_7-Result-test.png"}
                  width={30}
                  height={30}
                  className="object-cover object-center m-0"
                />
                <h2 className="w-[352px] font-semibold text-[#323232] text-[25.88px]">Career-Driven Outcomes</h2>
                <p className="w-[352px] text-[#3D3D3D] text-[17.28px]/160%">We focus on what matters: your career. we offer 1:1 career coaching, resume support, 
                  mock interviews, and direct access to hiring networks.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-[30px] px-[15px] bg-[#E0E9FE] rounded">
              <div className="flex flex-col justify-center items-center gap-[13px]">
                <Image
                  alt=""
                  src={"/training-program/Layer_1.png"}
                  width={40}
                  height={40}
                  className="object-cover object-center m-0"
                />
                <h2 className="font-semibold text-[#323232] text-[25.88px]">Certified</h2>
                <p className="w-[352px] text-[#3D3D3D] text-[17.28px]/160%">Join a thriving community of alumni, mentors, and hiring partners across industries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrainWithUs;