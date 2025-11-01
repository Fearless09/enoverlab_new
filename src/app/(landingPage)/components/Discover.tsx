import Image from "next/image";

const Discover = () => {
  return (
    <section id="discover" className="relative mt-35 bg-[#E0E9FE] py-22">
      <section className="wrapper text-pretty">
        <header className="text-primary-400 text-center">
          <h1 className="text-[40px] font-medium">Discover Our Focus Areas</h1>
          <p className="mx-auto mt-3.5 max-w-[400px] text-xl font-light">
            Explore how Enoverlab is driving innovation and impact through tech
            education
          </p>
        </header>

        <main className="mt-15 grid grid-cols-4 gap-6 text-[#323232]">
          {discovers.map(({ img, subtitle, title }, index) => (
            <div
              className="transition-300 min-h-[370px] rounded-xl bg-white p-2.5 hover:shadow-md"
              key={index}
            >
              <div className="relative aspect-[2.74/1.47] overflow-clip rounded-[8px]">
                <Image
                  alt={title}
                  src={img}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <h1 className="mt-8 text-[24px] font-medium">{title}</h1>
              <p className="mt-3 text-base/[160%]">{subtitle}</p>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Discover;

const discovers = [
  {
    img: "/discover/d1.png",
    title: "Training Programs",
    subtitle:
      "We offer cutting-edge training programs to equip individuals with in-demand tech skills.",
  },
  {
    img: "/discover/d2.png",
    title: "Event Sponsorships",
    subtitle:
      "Sponsor  our tech events to drive innovation and community impact.",
  },
  {
    img: "/discover/d3.png",
    title: "Partner With Us",
    subtitle:
      "Join hands with Enoverlab to empower Africa's next generation of product leaders.",
  },
  {
    img: "/discover/d3.png",
    title: "Hiring Tech Talent",
    subtitle: "Access a pool of skilled tech talent trained by Enoverlab.",
  },
];
