"use client";
import UiLink from "@/components/ui/UiLink";
import { navs } from "@/data/nav_data";
import { cn } from "@/utilities/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          />
        </Link>

        <ul className="ipad:flex hidden items-center gap-7">
          {navs.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={cn(
                "transition-300 hover:text-primary-400 text-base font-medium",
                {
                  "text-primary-400": pathname === item.href,
                },
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <UiLink size="sm" href="/contact" className="px-5">
          Contact Us
        </UiLink>
      </header>
    </nav>
  );
};

export default Navbar;
