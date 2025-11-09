import UiLink from "@/components/ui/UiLink";

const Hero = () =>{
  return(
    <>
      <div className="flex flex-row wrapper justify-center items-center my-10">
        <div className="flex flex-col wrapper justify-center items-start gap-8">
          <div className="flex flex-col justify-start gap-6 text-left">
            <h1 className="font-semibold text-5xl font-plus-jakarta-sans text-[#003AD4]">Partner with us</h1>
            <p className="text-xl text-[#404040] font-light font-plus-jakarta-sans">
              Join force with the platform trusted by many 
              important industries to provide reliable and accountable services.
            </p>
          </div>
          <div>
            <UiLink 
              variant="primary" 
              href="/contact_us"
              className="font-medium"
            >
              Contact Us
            </UiLink>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="flex flex-col h-[500px] justify-between gap-3 rounded-[5px]">
            <img src="/partnership/hero3.png" alt="hero1" className="object-cover w-full h-[300px] bg-gray-300 rounded-2xl" />
            <div className="col-span-1 row-span-1 bg-[#CDBCE6] h-[200px] relative rounded-4xl">
              <img src="/partnership/corner3.png" alt="corner1" className="absolute top-[-15px] right-[-19px]" />
            </div>
          </div>


          <div className="flex flex-col h-[500px] justify-between gap-3 rounded-[5px]">
            <div className="col-span-1 row-span-1 bg-[#DFEED7] h-[200px] relative rounded-4xl">
              <img src="/partnership/corner1.png" alt="corner2" className="absolute top-7 right-7" />
            </div>
            <img src="/partnership/hero2.png" alt="hero3" className="object-cover w-full h-[300px] bg-gray-200 rounded-2xl" />
          </div>


          <div className="flex flex-col h-[500px] justify-between gap-3 rounded-[5px]">
            <img src="/partnership/hero1.png" alt="hero2" className="object-cover w-full h-[150px] bg-gray-200 rounded-2xl" />
            <div className="col-span-1 row-span-1 bg-[#FFBA86] h-[350px] relative rounded-4xl">
              <img src="/partnership/corner2.png" alt="corner3" className="absolute top-0 right-[-10px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
