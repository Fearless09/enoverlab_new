const Values = () => {
  return (
    <section className="relative pt-25 pb-20">
      <section className="wrapper text-pretty">
        <h1 className="text-primary-400 text-center text-[40px] font-bold">
          Our Values
        </h1>

        <main className="mt-12 grid grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div
              className="rounded-xl border border-[#E0E9FE]/50 p-8 pt-10 shadow-[0_4px_6px_0_#E0E9FE]"
              key={index}
            >
              <h2 className="text-[28px]/[35px] font-bold text-black">
                {value.title}
              </h2>
              <p className="mt-6 text-xl/[35px] font-light text-[#545454]">
                {value.description}
              </p>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Values;

const values = [
  {
    title: "Excellence in Execution",
    description:
      "We deliver top-quality results through professionalism, expertise, and a deep commitment to meeting your goals.",
  },
  {
    title: "Collaboration & Trust",
    description:
      "Every engagement is built on transparency, teamwork, and lasting partnerships that create mutual growth.",
  },
  {
    title: "Innovation with Impact",
    description:
      "We bring creativity and technology together to design solutions that make real, measurable change.",
  },
];
