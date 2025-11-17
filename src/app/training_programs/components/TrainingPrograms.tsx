import UiLink from "@/components/ui/UiLink";
import Image from "next/image";

const TrainingPrograms = () => {
  return (
    <>
      <section className="mt-15 bg-[#E0E9FE] py-13 md:mt-25">
        <header className="text-primary-400 mx-auto max-w-[600px] text-center text-pretty">
          <h1 className="text-max-36">Training Programs</h1>
          <p className="text-max-20 mt-3.5">
            Practical, hands-on learning in product management and digital
            skills—designed to prepare participants for real-world success.
          </p>
        </header>

        <main className="wrapper mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 rounded-md bg-white px-4 pt-6 pb-10 md:flex-row md:justify-between"
            >
              <div className="relative aspect-square w-full max-w-[140px] shrink-0 rounded-md">
                <Image alt={program.title} src={program.img} fill />
              </div>

              <div>
                <h2 className="text-secondary text-max-24">{program.title}</h2>
                <p className="mt-3.5 text-base text-[#3D3D3D]">
                  {program.subtitle}
                </p>
              </div>
            </div>
          ))}
        </main>

        <main className="mx-auto mt-9 max-w-[620px] px-4 text-center text-pretty">
          <p className="text-primary-400 text-max-20 mb-7 font-light">
            If you&apos;re interested in joining or participating in any of our
            training programs, please reach out to us through our Contact Us
            page.
          </p>
          <UiLink variant="primary" href="/contact_us" className="font-medium">
            Contact Us
          </UiLink>
        </main>
      </section>
    </>
  );
};

export default TrainingPrograms;

const programs = [
  {
    img: "/training-program/training1.png",
    title: "Personal Training",
    subtitle:
      "Are you an aspiring product manager, a tech professional transitioning into product, or a PM aiming to level up—our personalized training is built around you.",
  },
  {
    img: "/training-program/training2.png",
    title: "Staff Training",
    subtitle:
      "We specialize in up-skilling teams through targeted, real-world Product Management training—designed to align with your business goals and product vision.",
  },
  {
    img: "/training-program/training3.png",
    title: "StartUp Training",
    subtitle:
      "Empowering Nigerian businesses with cutting edge, strategic frameworks that drive measurable success in today's competitive market",
  },
  {
    img: "/training-program/training4.png",
    title: "Bussiness Growth Training",
    subtitle:
      "Battle-Tested Strategies: Developed from decades of experience with leading Medium Scale Businesses",
  },
];
