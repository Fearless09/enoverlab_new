import Image from "next/image";

const Companies = () => {
  return (
    <section className="relative py-5">
      <section className="wrapper flex flex-nowrap items-center overflow-hidden px-4">
        {[...Array(5)].map((_, arrIdx) => (
          <main
            key={arrIdx}
            className="animate-marquee flex w-max flex-nowrap items-center gap-5 pl-5"
          >
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
        ))}
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
