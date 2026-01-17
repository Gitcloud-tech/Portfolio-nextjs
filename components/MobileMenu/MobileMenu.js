"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FaBars, FaGithub } from "react-icons/fa";

const menuItems = [
  { title: "Introduction", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="sm:hidden text-black dark:text-white">
          <FaBars className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent className="w-72 bg-white dark:bg-black p-0">
        <SheetHeader className="px-4 pt-14 pb-5 bg-blue-500 dark:bg-blue-700">
          <div className="flex items-center justify-between w-full">
            <SheetTitle className="text-white text-xl font-bold">
              @Gopal
            </SheetTitle>

            <a
              href="https://github.com/gitcloud-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold flex items-center gap-2"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </SheetHeader>

        {/* Menu Items */}
        <div className="mt-6 grid gap-2 px-4">
          {menuItems.map((item) => (
            <SheetClose asChild key={item.title}>
              <Link
                href={item.href}
                className="block px-2 py-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition font-semibold"
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
