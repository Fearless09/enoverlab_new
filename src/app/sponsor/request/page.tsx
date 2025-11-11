import { Button } from "@/components/ui/Button";
import { cn } from "@/utilities/utils";
import Image from "next/image";

const RequestPage = () => {
  const tableHeaders = Object.keys(requests[0]);

  return (
    <section className="my-12 md:mt-15">
      <section className="wrapper">
        <h1 className="text-primary-400 text-max-60 font-medium">
          Sponsorship Request
        </h1>

        <main className="mt-5 overflow-x-clip">
          <table className="w-full">
            <caption className="sr-only">Sponsorship Requests</caption>

            {/* Headers */}
            <thead className="max-md:hidden [&_th]:p-4">
              <tr className="text-primary-400 text-lg capitalize">
                <th>
                  <span className="sr-only">s/n</span>
                </th>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={cn("font-medium", {
                      "text-left": header.toLowerCase() === "name",
                    })}
                  >
                    {header}
                  </th>
                ))}
                <th>
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>

            <tbody
              className={cn(
                "text-center text-base font-light [&_td]:p-4",
                "max-md:[&_td]:grid max-md:[&_td]:grid-cols-[16ch_auto] max-md:[&_td]:items-center max-md:[&_td]:gap-2",
                "max-md:[&_td]:py-2 max-md:[&_td]:text-left max-md:[&_td]:capitalize max-md:[&_td]:last-of-type:pb-4 max-md:[&_td]:nth-of-type-[2]:pt-4",
                "max-md:[&_td]:before:font-bold max-md:[&_td]:before:content-[attr(data-cell)_':']",
              )}
            >
              {requests.map((request, index) => (
                <tr
                  key={index}
                  className={cn("bg-[#F6F6F9] even:bg-white", {
                    // "bg-white": index % 2,
                  })}
                >
                  <td className="max-md:hidden!">{index + 1}</td>
                  <td data-cell={tableHeaders[0]} className="text-left">
                    <span className="inline-flex flex-wrap items-center gap-3">
                      <span className="relative size-10 shrink-0 overflow-clip rounded-full">
                        <Image
                          fill
                          src={request.name.img}
                          alt={request.name.name}
                        />
                      </span>
                      {request.name.name}
                    </span>
                  </td>
                  <td data-cell={tableHeaders[1]}>{request.sponsorship}</td>
                  <td data-cell={tableHeaders[2]}>
                    {request["funding progress"]}
                  </td>
                  <td className="before:hidden">
                    <Button
                      size="sm"
                      className="min-h-auto px-5 py-2 max-md:col-span-2 max-md:max-w-[320px]"
                    >
                      Sponsor
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>
    </section>
  );
};

export default RequestPage;

const requests = [
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
  {
    name: { name: "Okeke Nneoma", img: "/sponsor_3.png" },
    sponsorship: "Partial",
    ["funding progress"]: "85% Funded",
  },
  {
    name: { name: "Oluwatobi Adeyemi", img: "/sponsor_3.png" },
    sponsorship: "Full",
    ["funding progress"]: "50% Funded",
  },
];
