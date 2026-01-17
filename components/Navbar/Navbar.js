"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";
import { FaGithub } from "react-icons/fa";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const menuItems = [
  { title: "Introduction", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.1)] border-b border-gray-200 dark:border-gray-800 py-5">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between relative">
        {/* Left: @Gopal */}
        <Link
          href="/"
          className="text-black dark:text-white text-lg font-semibold"
        >
          @Gopal
        </Link>

        {/* Centered Nav Menu - only on sm+ */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8 items-center">
              {menuItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
            after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-black dark:text-white text-lg font-medium">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: ModeToggle, MobileMenu, GitHub (sm+) */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <MobileMenu />
          <a
            href=" https://github.com/gitcloud-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-400 transition-colors hidden sm:block"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
