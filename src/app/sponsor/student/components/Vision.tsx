import { cn } from "@/utilities/utils";

const Vision = () => {
  return (
    <section className="mt-24">
      <section className="wrapper grid grid-cols-2 gap-8 text-pretty">
        {values.map((value, index) => (
          <div key={index}>
            <h1 className="text-primary-400 text-[40px] font-semibold">
              {value.title}
            </h1>

            <p
              className={cn(
                "mt-8 rounded p-6 text-lg/[35px] text-[#545454] shadow-[0_1px_5px_1px_#E0E9FE]",
                {
                  "bg-[#E0E9FE]": index === 1,
                },
              )}
            >
              {value.desccription}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Vision;

const values = [
  {
    title: "Our Vision",
    desccription:
      "To transform Africa one talent at a time by equipping a new generation of thinkers, builders, and innovators with the skills and mindset to lead the continent's digital and economic growth. Enoverlab envisions a future where African product professionals are globally recognized for creating solutions that shape industries, strengthen communities, and drive sustainable progress.",
  },
  {
    title: "Our Mision",
    desccription:
      "At Enoverlab, our mission is to discover, train, and empower product management talents who are ready to make a lasting impact in the world of technology and innovation. We strive to bridge the gap between potential and opportunity by providing world-class training, mentorship, and community support that prepare individuals for success — today, tomorrow, and in the future.",
  },
];
