"use client";
import UiLink from "@/components/ui/UiLink";
import { Nav, navs } from "@/data/nav_data";
import { cn } from "@/utilities/utils";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
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
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="px-4 py-2">
      <header className="wrapper rounded-[30px] bg-[#F9F9F9]">
        <main className="flex items-center justify-between gap-10 py-2.5">
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

          <div className="flex items-center gap-2">
            <UiLink
              size="sm"
              href="/contact_us"
              className="px-5 max-[400px]:hidden"
            >
              Contact Us
            </UiLink>

            <button
              className="ipad:hidden block cursor-pointer [&_svg]:size-5"
              onClick={() => setOpen(!open)}
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </main>

        <MobileNavLink open={open} close={() => setOpen(false)} />
      </header>
    </nav>
  );
};

export default Navbar;

const MobileNavLink = ({
  open,
  close,
}: {
  open?: boolean;
  close: () => void;
}) => {
  const pathname = usePathname();

  const WOdropdown = navs.filter((nav) => !nav.dropdown);
  const Wdropdown = navs.flatMap((nav) => {
    if (!nav.dropdown) return [];
    return nav.dropdown.map(({ href, name }) => ({
      href,
      name: "Sponsor " + name,
    }));
  });

  return (
    <main
      className={cn("transition-300 ipad:hidden ms-3 block h-0 overflow-clip", {
        "h-[218px] pt-5 pb-7": open,
      })}
    >
      <ul className="inline-flex flex-col gap-3">
        {[...WOdropdown, ...Wdropdown].map(({ href, name }, index) => (
          <Link
            key={index}
            href={href}
            onClick={close}
            className={cn(
              "transition-300 hover:text-primary-300 text-base font-medium",
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
    </main>
  );
};

const DesktopNavLink = ({ href, name, dropdown }: Nav) => {
  const pathname = usePathname();

  if (dropdown) {
    return (
      <div className="group relative flex h-10 items-center">
        <button
          className={cn(
            "transition-300 hover:text-primary-300 flex cursor-pointer items-center justify-center gap-1",
            {
              "text-primary-400":
                pathname === href || pathname.startsWith(href + "/"),
            },
          )}
        >
          {name}
          <ChevronDown
            className={cn("transition-300 size-4.5 group-hover:rotate-180")}
          />
        </button>

        <ul className="border-primary-400/10 absolute top-[calc(100%-2px)] left-0 z-50 hidden min-w-[150px] flex-col gap-3 rounded-lg border bg-white px-5 py-3 group-hover:flex">
          {dropdown.map(({ name, href }, idx) => (
            <Link
              key={idx}
              href={href}
              className={cn(
                "transition-300 hover:text-primary-300 text-base font-medium",
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
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "transition-300 hover:text-primary-300 text-base font-medium",
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
