import Image from "next/image";

const PastEvents = () => {
  return (
    <section>
      <section className="wrapper text-primary-400 mt-25 text-center text-pretty">
        <h1 className="text-[40px] font-medium">Past Event</h1>
        <p className="text-max-20/[160%] mx-auto mt-5 max-w-[420px] font-light">
          Every event tells a story — of learning, growth, and connection.
          Here&apos;s a glimpse of how far we&apos;ve come together.
        </p>

        <main className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
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
