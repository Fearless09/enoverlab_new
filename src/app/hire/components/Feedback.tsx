import { Button } from "@/components/ui/Button";

const Feedback = () => {
  return (
    <section className="relative bg-[#E0E9FE] py-12">
      <section className="wrapper flex max-w-3xl items-center justify-between">
        <h1 className="text-primary-400 max-w-[450px] text-[45px]/[160%] text-pretty">
          We appreciate your feedback
        </h1>

        <Button size="lg" className="px-10 py-3">
          Review Us
        </Button>
      </section>
    </section>
  );
};

export default Feedback;
