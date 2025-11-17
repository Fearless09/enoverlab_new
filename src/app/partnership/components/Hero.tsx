import UiLink from "@/components/ui/UiLink";

const Hero = () => {
  return (
    <>
      <div className="wrapper my-10 flex flex-row items-center justify-center">
        <div className="wrapper flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col justify-start gap-6 text-left">
            <h1 className="text-5xl font-semibold text-[#003AD4]">
              Partner with us
            </h1>
            <p className="text-xl font-light text-[#404040]">
              Join force with the platform trusted by many important industries
              to provide reliable and accountable services.
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

        <div className="grid w-full grid-cols-3 gap-4">
          <div className="flex h-[500px] flex-col justify-between gap-3 rounded-[5px]">
            <img
              src="/partnership/hero3.png"
              alt="hero1"
              className="h-[300px] w-full rounded-2xl bg-gray-300 object-cover"
            />
            <div className="relative col-span-1 row-span-1 h-[200px] rounded-4xl bg-[#CDBCE6]">
              <img
                src="/partnership/corner3.png"
                alt="corner1"
                className="absolute top-[-15px] right-[-19px]"
              />
            </div>
          </div>

          <div className="flex h-[500px] flex-col justify-between gap-3 rounded-[5px]">
            <div className="relative col-span-1 row-span-1 h-[200px] rounded-4xl bg-[#DFEED7]">
              <img
                src="/partnership/corner1.png"
                alt="corner2"
                className="absolute top-7 right-7"
              />
            </div>
            <img
              src="/partnership/hero2.png"
              alt="hero3"
              className="h-[300px] w-full rounded-2xl bg-gray-200 object-cover"
            />
          </div>

          <div className="flex h-[500px] flex-col justify-between gap-3 rounded-[5px]">
            <img
              src="/partnership/hero1.png"
              alt="hero2"
              className="h-[150px] w-full rounded-2xl bg-gray-200 object-cover"
            />
            <div className="relative col-span-1 row-span-1 h-[350px] rounded-4xl bg-[#FFBA86]">
              <img
                src="/partnership/corner2.png"
                alt="corner3"
                className="absolute top-0 -right-2.5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
