import Image from "next/image";

const TrainWithUs = () => {
  return (
    <section className="wrapper relative mt-15 md:mt-25">
      <header className="text-primary-400 mx-auto w-full max-w-[550px] text-center text-pretty">
        <h1 className="text-max-40 font-medium">Why Train with Us</h1>
        <p className="text-max-20/[160%] mt-3.5 font-light">
          We don&apos;t just teach product management—we shape future-ready
          product leaders.
        </p>
      </header>

      <main className="mt-16 grid grid-cols-1 gap-5 text-center text-pretty sm:grid-cols-2 md:grid-cols-3">
        {datas.map((data, index) => (
          <div key={index} className="rounded-md bg-[#E0E9FE] px-4 py-6">
            <span className="relative inline-block size-12 shrink-0">
              <Image
                alt={data.title}
                src={data.img}
                fill
                className="origin-center object-contain"
              />
            </span>
            <h5 className="text-secondary text-max-24 mt-1.5 font-semibold capitalize">
              {data.title}
            </h5>
            <p className="mt-1 text-base/[160%] text-[#3D3D3D] sm:text-lg/[160%]">
              {data.subtitle}
            </p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default TrainWithUs;

const datas = [
  {
    img: "/training-program/Vector.png",
    title: "Industry Relevant curriculum",
    subtitle:
      "You will learn practical skills, tools, and frameworks that are used in the real world—not just theory.",
  },
  {
    img: "/training-program/_7-Result-test.png",
    title: "Career-Driven Outcomes",
    subtitle:
      "We focus on what matters: your career. we offer 1:1 career coaching, resume support, mock interviews, and direct access to hiring networks.",
  },
  {
    img: "/training-program/Layer_1.png",
    title: "Certified",
    subtitle:
      "Join a thriving community of alumni, mentors, and hiring partners across industries.",
  },
];
