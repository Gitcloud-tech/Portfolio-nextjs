"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "build Flutter apps for Android/iOS",
  "convert design into modern UI",
  "build interactive UI using React",
  "develop websites using Next.js",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl">
        {/* LEFT COLUMN */}
        <div className="md:text-left">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Hi, I&apos;m <span className="text-blue-500">Gopal</span>, a{" "}
            <span className="text-blue-500">passionate</span> Software
            Developer.
          </motion.h2>

          {/* I + Changing Role */}
          <div className="flex justify-center md:justify-start mt-6 text-base sm:text-lg md:text-xl font-semibold h-8 text-black dark:text-white">
            <motion.span
              className="mr-1 shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              I
            </motion.span>
            <div className="relative h-full w-full max-w-xs overflow-hidden text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className="absolute whitespace-nowrap"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 mt-4 text-md sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Stick around to see some of my work.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-md px-4 py-3"
            >
              <Link href="/projects">See my latest projects</Link>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/images/techbackground.jpg"
            alt="Developer Illustration"
            width={600}
            height={600}
            className="rounded-xl object-contain dark:brightness-90"
          />
        </div>
      </div>
    </section>
  );
}
