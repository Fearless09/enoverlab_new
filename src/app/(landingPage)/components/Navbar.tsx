"use client";
import { Button } from "@/components/ui/Button";
import { navs } from "@/data/nav_data";
import { cn } from "@/utilities/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-2 px-4">
      <header className="wrapper flex items-center justify-between gap-10 rounded-[30px] bg-[#F9F9F9] px-5 py-2.5">
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

        <ul className="flex items-center gap-7">
          {navs.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={cn(
                "transition-300 hover:text-primary-300 font-medium",
                {
                  "text-primary-400": pathname === item.href,
                },
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <Button size="sm">Contact Us</Button>
      </header>
    </nav>
  );
};

export default Navbar;
