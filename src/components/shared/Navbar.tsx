"use client";
import UiLink from "@/components/ui/UiLink";
import { Nav, navs } from "@/data/nav_data";
import { cn } from "@/utilities/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Navbar component that renders the navigation links and the logo.
 *
 * @returns {JSX.Element} The navbar component.
 */

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-2">
      <header className="wrapper flex items-center justify-between gap-10 rounded-[30px] bg-[#F9F9F9] py-2.5">
        <Link
          href={"/"}
          className="relative h-[42px] w-[145px] overflow-hidden"
        >
          <Image
            alt=""
            src={"/enoverlab_logo.png"}
            fill
            priority
            className="origin-center object-contain"
            sizes="100%"
          />
        </Link>

        <ul className="ipad:flex hidden items-center gap-7">
          {navs.map((item, index) => (
            <DesktopNavLink key={index} {...item} />
          ))}
        </ul>

        <UiLink size="sm" href="/contact_us" className="px-5">
          Contact Us
        </UiLink>
      </header>
    </nav>
  );
};

export default Navbar;

const DesktopNavLink = ({ href, name, dropdown }: Nav) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  if (dropdown) {
    return (
      <div className="relative">
        <button
          className={cn(
            "transition-300 flex cursor-pointer items-center justify-center gap-1",
            {
              "text-primary-400":
                pathname === href || pathname.startsWith(href + "/"),
            },
          )}
          onClick={() => setOpen(!open)}
        >
          {name}
          <ChevronDown
            className={cn("transition-300 size-4.5", { "rotate-180": open })}
          />
        </button>

        {open && (
          <ul className="border-primary-400/10 absolute top-[calc(100%+5px)] left-0 z-50 flex min-w-[120px] flex-col gap-3 rounded-xl border bg-white px-5 py-3">
            {dropdown.map(({ name, href }, idx) => (
              <Link
                key={idx}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "transition-300 hover:text-primary-400 text-base font-medium",
                  {
                    "text-primary-400":
                      pathname === href || pathname.startsWith(href + "/"),
                  },
                )}
              >
                {name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "transition-300 hover:text-primary-400 text-base font-medium",
        {
          "text-primary-400":
            pathname === href || pathname.startsWith(href + "/"),
        },
      )}
    >
      {name}
    </Link>
  );
};
