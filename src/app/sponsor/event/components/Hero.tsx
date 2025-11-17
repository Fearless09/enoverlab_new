import { Button } from "@/components/ui/Button";
import { cn } from "@/utilities/utils";

const Hero = () => {
  return (
    <section className="mt-8 overflow-clip px-5">
      <section
        className={cn(
          "wrapper relative flex flex-col items-center justify-center overflow-clip rounded-[10px] py-10 text-white sm:aspect-[12.4/5]",
          "before:absolute before:inset-0 before:bg-[url(/sponsor_1.png)] before:bg-cover before:bg-center before:bg-no-repeat",
          "after:bg-primary-400/40 after:absolute after:inset-0",
        )}
      >
        <main className="relative z-1 text-center text-pretty">
          <h1 className="text-max-40 font-medium">
            Join our +25,000 Community
          </h1>

          <p className="text-max-20/[160%] mx-auto mt-5 mb-12 w-full max-w-[550px]">
            Connect with a vibrant community of tech enthusiasts, product
            leaders, and organizations driving meaningful impact
          </p>

          <Button size="lg" className="w-full max-w-[200px]">
            Join Now
          </Button>
        </main>
      </section>
    </section>
  );
};

export default Hero;
