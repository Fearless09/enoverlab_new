import { Button } from "@/components/ui/Button";

const Feedback = () => {
  return (
    <section className="relative bg-[#E0E9FE] py-12">
      <section className="wrapper flex max-w-3xl flex-col items-center justify-between gap-10 sm:flex-row">
        <h1 className="text-primary-400 text-max-45/[1.4] max-w-[450px] text-center text-pretty sm:text-left">
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
