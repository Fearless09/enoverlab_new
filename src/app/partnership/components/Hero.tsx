import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper my-10 flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between">
      {/* Text */}
      <main className="w-full max-w-[440px] flex-1 text-center text-pretty lg:text-left">
        <h1 className="text-max-45 text-primary-400 font-semibold">
          Partner with us
        </h1>
        <p className="text-max-20 mt-4.5 font-light text-[#404040]">
          Join force with the platform trusted by many important industries to
          provide reliable and accountable services.
        </p>
        <UiLink
          variant="primary"
          href="/contact_us"
          className="mt-7 w-full max-w-[170px]"
        >
          Contact Us
        </UiLink>
      </main>

      {/* Images */}
      <section className="grid w-full max-w-[720px] flex-1 grid-cols-3 gap-3.5">
        {/* Col 1 */}
        <main className="space-y-3.5">
          <div className="relative aspect-270/408 overflow-clip rounded-2xl lg:rounded-3xl">
            <Image
              src="/partnership/hero3.png"
              alt="hero3"
              fill
              sizes="100%"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-270/232 overflow-clip rounded-2xl bg-[#CDBCE6] lg:rounded-3xl">
            <span className="absolute -top-3.5 -right-5 block size-25">
              <Image
                src="/partnership/corner3.png"
                alt="corner3"
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </span>
          </div>
        </main>

        {/* Col 2 */}
        <main className="space-y-3.5">
          <div className="relative aspect-226/220 overflow-clip rounded-2xl bg-[#DFEED7] lg:rounded-3xl">
            <span className="absolute top-7 right-7 block aspect-76/59 w-[76px]">
              <Image
                src="/partnership/corner1.png"
                alt="corner1"
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </span>
          </div>
          <div className="relative aspect-226/316 overflow-clip rounded-2xl lg:rounded-3xl">
            <Image
              src="/partnership/hero2.png"
              alt="hero2"
              fill
              sizes="100%"
              className="object-cover object-center"
            />
          </div>
        </main>

        {/* Col 3 */}
        <main className="space-y-3.5">
          <div className="relative aspect-194/160 overflow-clip rounded-2xl lg:rounded-3xl">
            <Image
              src="/partnership/hero1.png"
              alt="hero1"
              fill
              sizes="100%"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-194/300 overflow-clip rounded-2xl bg-[#FFBA86] lg:rounded-3xl">
            <span className="absolute top-0 -right-2.5 block size-25">
              <Image
                src="/partnership/corner2.png"
                alt="corner2"
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </span>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Hero;
