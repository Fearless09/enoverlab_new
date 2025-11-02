import Image from "next/image";

const Partners = () => {
  return (
    <section className="relative my-20.5">
      <section className="wrapper text-pretty">
        <h1 className="text-primary-400 mb-9 text-center text-[40px] font-semibold">
          What our partners say
        </h1>

        <main className="grid grid-cols-3 gap-5">
          {partners.map(({ img, name, role, text }, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#E0E9FE] px-5 py-8 shadow"
            >
              <div className="relative size-15 overflow-clip rounded-full border-2 border-black/20">
                <Image
                  alt={name}
                  src={img}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h1 className="mt-4 text-[24px]/[160%] font-semibold text-black">
                {name}
              </h1>
              <h6 className="mt-2.5 text-xl/[160%] font-light">{role}</h6>
              <p className="mt-2 text-base/[160%] font-light">{text}</p>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Partners;

const partners = [
  {
    img: "/partners/p1.png",
    name: "Kunle Kasumu",
    text: `"Partnering with Enoverlab has been a game-changer for our CSR initiatives. Their programs are impactful and well-organized." - Kunle Kasumu, CSR Manager at XYZ Corp.”`,
    role: "Human Capital Director, FutureWorks ",
  },
  {
    img: "/partners/p2.png",
    name: "Nana Mensah,",
    text: `“Supporting Enoverlab programs has allowed us to contribute directly to workforce development. Their graduates bring value, creativity, and impact.”`,
    role: "Partnerships Lead, TechBridge Africa",
  },
  {
    img: "/partners/p3.png",
    name: "Tunde Bello",
    text: `“Enoverlab's commitment to quality training and mentorship aligns perfectly with our mission to drive innovation in Africa. We're proud to be part of their journey.”`,
    role: "CSR Manager, Zenith Impact ",
  },
];
