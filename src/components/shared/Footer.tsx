import { socialLinks, footerLinks } from "@/data/footer_data";
import Image from "next/image";
import Link from "next/link";

/**
 * Footer component that renders the footer with links and copyright information.
 *
 * @returns {JSX.Element} The footer component.
 */

export default function Footer() {
  return (
    <footer className="font-plus-jakarta-sans bg-[#E0E9FE] px-4 pt-20 pb-10">
      <section className="wrapper">
        <section className="flex flex-wrap justify-between gap-x-10 gap-y-16">
          {/* Enoverlab Image and Social Links */}
          <main className="max-w-[300px] flex-1">
            <Image
              src={"/enoverlab_logo.png"}
              width={225}
              height={0}
              alt="Enoverlab Logo"
              className="h-auto w-[138px] object-contain sm:w-[225px]"
            />
            <p className="text-secondary mt-4 text-base leading-[160%] font-light text-pretty">
              Building impactful product managers for today, tomorrow and the
              future
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((socialLink, index) => (
                <Link
                  href={socialLink.href}
                  target="_blank"
                  className="transition-300 rounded-lg p-1 hover:opacity-85 active:translate-y-0.5"
                  key={index}
                >
                  {socialLink.icon}
                </Link>
              ))}
            </div>
          </main>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h6 className="text-secondary text-base font-medium capitalize">
                {title}
              </h6>

              <ul className="mt-5 space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-secondary transition-300 text-sm font-light hover:text-black active:scale-98"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <main className="flex flex-col gap-[18px] sm:w-[320px]">
            <h6 className="text-secondary w-[205px] text-base font-medium sm:w-max">
              Receive important PM info weekly
            </h6>
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
              <input
                type="text"
                name=""
                placeholder="Fullname"
                className="font-plus-jakarta-sans h-9 w-[152px] rounded border-0 bg-white px-4.5 text-xs font-light ring-0 outline-0"
              />
              <input
                type="text"
                name=""
                placeholder="Email Address"
                className="font-plus-jakarta-sans h-9 w-[152px] rounded border-0 bg-white px-4.5 text-xs font-light ring-0 outline-0"
              />
              <button className="bg-primary-400 font-plus-jakarta-sans hover:bg-primary-300 flex h-9 w-[152px] cursor-pointer items-center justify-center rounded text-xs font-medium text-white active:scale-98">
                Subscribe
              </button>
            </div>
          </main>
          {/* </div> */}
        </section>

        <hr className="mt-16 border-black/10" />
        <p className="text-secondary mt-7 text-center text-base font-light">
          Copyright &copy; enoverlab {new Date().getFullYear()}. All Right
          Reserved.
        </p>
      </section>
    </footer>
  );
}
