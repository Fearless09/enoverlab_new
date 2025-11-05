import Image from "next/image";

const Companies = () => {
  return (
    <section className="relative py-5">
      <section className="wrapper overflow-hidden px-4">
        <main className="flex flex-nowrap items-center gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative aspect-[2.74/1.01] min-w-[179px] flex-1 shrink-0 overflow-clip"
            >
              <Image
                alt={company}
                src={company}
                fill
                className="object-contain object-center"
                sizes="100%"
              />
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Companies;

const companies = [
  "/company/msft.png",
  "/company/perxels.png",
  "/company/microvest.png",
  "/company/ulospaces.png",
  "/company/elite.png",
];
