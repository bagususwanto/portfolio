"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  return (
    <div className="flex flex-col items-center w-xs h-full py-4 rounded-xl shadow-xl backdrop-blur-3xl bg-white/10 dark:bg-gray-800/30 dark:shadow-black/40 border border-gray-200/20 dark:border-gray-700/30">
      <div className="flex justify-start w-full px-4">
        <Button
          size="sm"
          className="rounded-full"
          variant="ghost"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          aria-label="Toggle dark mode">
          {mounted ? (
            isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )
          ) : (
            <span className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="flex flex-col items-center w-full p-4">
        <motion.div
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}>
          <Avatar className="transition-transform duration-300 hover:scale-105">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
        <span className="flex space-x-1 pt-4 font-extrabold text-lg">
          <p className="text-primary">Bagus</p>
          <p>Uswanto</p>
        </span>
        <p className="text-sm font-bold">Full Stack Developer</p>
        <Button
          size={"sm"}
          className="mt-4"
          onClick={() => console.log("Download Resume")}>
          Download Resume
        </Button>

        <div className="flex flex-row w-full justify-evenly mt-4">
          <Link href="https://github.com/bagususwanto" target="_blank">
            <Button
              aria-label="Github"
              className="rounded-full"
              variant={"secondary"}>
              <FaGithub className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/bagus_uswanto" target="_blank">
            <Button
              aria-label="Instagram"
              className="rounded-full"
              variant={"secondary"}>
              <FaInstagram className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@bagus.usw11" target="_blank">
            <Button
              aria-label="Youtube"
              className="rounded-full"
              variant={"secondary"}>
              <FaYoutube className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-gray-100/30 dark:bg-gray-700/30 p-4">
        <div className="flex flex-row items-center">
          <FaLocationDot className="w-4 h-4 mr-2" />
          <p className="text-sm font-medium">Karawang, Indonesia</p>
        </div>
        <div className="flex flex-row items-center">
          <MdEmail className="w-4 h-4 mr-2" />
          <p className="text-sm font-medium">bagus_uswanto@outlook.com</p>
        </div>
      </div>
      <div className="w-full px-4 my-2">
        <Link href="mailto:bagus_uswanto@outlook.com" target="_blank">
          <Button variant={"secondary"} className="w-full">
            <MdEmail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </Link>
      </div>

      <div className="w-full px-4 mt-4">
        <p className="text-sm font-semibold mb-2">Quick Links</p>
        <div className="flex flex-col gap-2">
          <Link href="/about">
            <Button variant="ghost" className="w-full">
              About
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost" className="w-full">
              Projects
            </Button>
          </Link>
          <Link href="/resume">
            <Button variant="ghost" className="w-full">
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
