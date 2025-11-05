import Image from "next/image";

const PastEvents = () => {
  return (
    <section>
      <section className="wrapper text-primary-400 mt-25 text-center text-pretty">
        <h1 className="text-[40px] font-medium">Past Event</h1>
        <p className="mx-auto mt-5 max-w-[420px] text-xl/[160%] font-light">
          Lorem ipsum dolor sit amet consectetur. Vitae massa accumsan pulvinar
          nunc.
        </p>

        <main className="mt-10 grid grid-cols-3 gap-5">
          {events.map((event, index) => (
            <div
              className="relative aspect-[3.57/3.6] overflow-clip rounded-xs"
              key={index}
            >
              <Image
                alt={"past event " + (index + 1)}
                src={event}
                fill
                sizes="100%"
              />
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default PastEvents;

const events = ["/events/pe_1.png", "/events/pe_2.png", "/events/pe_3.png"];
