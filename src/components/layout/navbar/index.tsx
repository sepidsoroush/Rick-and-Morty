"use client";

import Link from "next/link";

import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Logo } from "@/lib/logo";

const items: NavItem[] = [
  {
    title: "Characters",
    href: "/",
  },
  {
    title: "Locations",
    href: "/location",
  },
  {
    title: "Episodes",
    href: "/episode",
  },
  {
    title: "API",
    href: "https://rickandmortyapi.com/",
  },
];

export function Navbar() {
  return (
    <aside className="py-2 tracking-tight border-b border-[#e4e4e4] dark:border-[#262626] flex justify-between items-center sticky top-0 bg-white dark:bg-[#121212] z-20">
      <Link href="/" className="flex flex-row items-center justify-start gap-4">
        <Logo />
        <p className="font-semibold">Rick and Morty</p>
      </Link>
      <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 md:px-2 px-1 m-1 md:text-base text-sm"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
