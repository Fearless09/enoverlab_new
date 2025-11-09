import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const TrainingPrograms = () =>{
  return(
      <>
        <section className="mt-15 md:mt-25 bg-[#E0E9FE]">
          <div className="text-primary-400 text-center py-10">
            <h1 className="text-[32px] pb-3">Training Programs</h1>
            <p className="w-[600px] text-center mx-auto">
              Practical, hands-on learning in product management and digital 
              skills—designed to prepare participants for real-world success.
            </p>
          </div>
          <div className="wrapper grid grid-cols-2 grid-rows-3 gap-4">
            <div className="bg-white flex  justify-between gap-3 rounded-[5px] pb-10">
              <Image
                alt=""
                src={"/training-program/training1.png"}
                width={142.07}
                height={143.99}
                className="object-cover m-4"
              />
              <div className="flex flex-col justify-between my-4">
                <h2 className="text-[25.88px] text-[#3D3D3D]">Personal Training</h2>
                <p className="text-[17.28px] text-[#3D3D3D]">
                  Are you an aspiring product manager, a tech professional transitioning into product,
                   or a PM aiming to level up—our personalized training is built around you.
                </p>
              </div>
            </div>
            <div className="bg-white flex  justify-between gap-3 rounded-[5px] pb-10">
              <Image
                alt=""
                src={"/training-program/training2.png"}
                width={142.07}
                height={143.99}
                className="object-cover m-4"
              />
              <div className="flex flex-col justify-between my-4">
                <h2 className="text-[25.88px] text-[#3D3D3D]">Staff Training</h2>
                <p className="text-[17.28px] text-[#3D3D3D]">
                  We specialize in up-skilling teams through targeted, real-world Product Management 
                  training—designed to align with your business goals and product vision.
                </p>
              </div>
            </div>
            <div className="bg-white flex  justify-between gap-3 rounded-[5px] pb-10">
              <Image
                alt=""
                src={"/training-program/training3.png"}
                width={142.07}
                height={143.99}
                className="object-cover m-4"
              />
              <div className="flex flex-col justify-between my-4">
                <h2 className="text-[25.88px] text-[#3D3D3D]">StartUp Training</h2>
                <p className="text-[17.28px] text-[#3D3D3D]">
                  Empowering Nigerian businesses with cutting edge, strategic frameworks 
                  that drive measurable success in today’s competitive market
                </p>
              </div>
            </div>
            <div className="bg-white flex  justify-between gap-3 rounded-[5px] pb-10">
              <Image
                alt=""
                src={"/training-program/training4.png"}
                width={142.07}
                height={143.99}
                className="object-cover m-4"
              />
              <div className="flex flex-col justify-between my-4">
                <h2 className="text-[25.88px] text-[#3D3D3D]">Bussiness Growth Training</h2>
                <p className="text-[17.28px] text-[#3D3D3D]">
                  Battle-Tested Strategies: Developed from decades 
                  of experience with leading Medium Scale Businesses
                </p>
              </div>
            </div>
          </div>
          <div className="w-[64%] mx-auto pt-8 pb-12 text-center flex flex-col justify-center items-center gap-7">
            <p className="text-[20px] text-primary-400">
              If you’re interested in joining or participating in any of our training programs, 
              please reach out to us through our Contact Us page.
            </p>
            <UiLink 
              variant="primary" 
              href="/contact_us"
              className="font-medium"
            >
              Contact Us
            </UiLink>
          </div>
        </section>
      </>
)}

export default TrainingPrograms;