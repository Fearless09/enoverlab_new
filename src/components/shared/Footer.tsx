import {
  company,
  OtherLinksType,
  programs,
  resources,
  socialLinks,
} from "@/data/footer_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-100 font-plus-jakarta-sans px-4 py-20">
      <section className="wrapper">
        <section className="flex flex-wrap gap-16">
          {/* Enoverlab Image and Social Links */}
          <main className="w-[285px]">
            <Image
              src={"/enoverlab_logo.png"}
              width={225}
              height={0}
              alt="Enoverlab Logo"
              className="w-[138px] object-contain sm:w-[225px]"
            />
            <p className="text-secondary mt-4 text-base leading-[160%] font-light">
              Building impactful product managers for today, tomorrow and the
              future
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((socialLink, index) => (
                <Link
                  href={socialLink.href}
                  target="_blank"
                  className="transition-300 rounded-lg p-1 hover:opacity-85 active:translate-y-[2px]"
                  key={index}
                >
                  {socialLink.icon}
                </Link>
              ))}
            </div>
          </main>

          {/* Other Links */}
          <LinksComponent name="Programs" array={programs} />
          {/* Free Resource */}
          <LinksComponent name="Free Resource" array={resources} />
          {/* Company */}
          <LinksComponent name="Company" array={company} />

          <main className="flex flex-col gap-[18px] sm:w-[320px]">
            <h6 className="text-secondary w-[205px] text-base font-medium sm:w-max">
              Receive important PM info weekly
            </h6>
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
              <input
                type="text"
                name=""
                placeholder="Fullname"
                className="font-plus-jakarta-sans h-9 w-[152px] border-0 bg-white px-[18px] text-xs font-light ring-0 outline-0"
              />
              <input
                type="text"
                name=""
                placeholder="Email Address"
                className="font-plus-jakarta-sans h-9 w-[152px] border-0 bg-white px-[18px] text-xs font-light ring-0 outline-0"
              />
              <button className="bg-primary-200 font-plus-jakarta-sans hover:bg-primary-300/80 flex h-9 w-[152px] items-center justify-center text-xs font-light text-white active:scale-98">
                Subscribe
              </button>
            </div>
          </main>
          {/* </div> */}
        </section>

        <hr className="mt-36 border-[#727272]" />
        <p className="text-secondary mt-7 text-center text-base font-light">
          Copyright &copy; enoverlab {new Date().getFullYear()}. All Right
          Reserved.
        </p>
      </section>
    </footer>
  );
}

function LinksComponent({
  array,
  name,
}: {
  array: OtherLinksType[];
  name: string;
}) {
  return (
    <div className="flex w-max flex-col gap-5">
      <h6 className="text-secondary text-base font-medium">{name}</h6>
      <div className="flex flex-col gap-2">
        {array?.map((item, index) => (
          <Link
            href={item.href}
            className="text-secondary transition-300 text-left text-sm font-light hover:opacity-85 active:scale-98"
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
