"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import ClarioLogo from "@/public/logo.svg"; // replace with actual logo path
import nextLogo from "../../../public/next.svg"; // replace with actual logo path

export default function Header() {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[1296px]">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md border border-gray-200 shadow-md px-8 py-4 rounded-full">
          {/* Logo */}
          <Link href="/" onClick={() => setActiveNav("/")}>
            {/* <Image
            src={ClarioLogo}
            alt="Clario.ai Logo"
            width={120}
            height={40}
            priority
          /> */}
            <Image
              src={nextLogo}
              alt="Next.js Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/product" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/product")}
            >
              Product
              <span
                className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                  activeNav === "/product"
                    ? "border-blue-500"
                    : "border-gray-700 dark:border-gray-200"
                } rotate-45 transition-transform duration-300`}
              />
            </Link>
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/use-cases" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/use-cases")}
            >
              Use Cases
              <span
                className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                  activeNav === "/use-cases"
                    ? "border-blue-500"
                    : "border-gray-700 dark:border-gray-200"
                } rotate-45 transition-transform duration-300`}
              />
            </Link>
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/pricing" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/pricing")}
            >
              Pricing
              <span
                className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                  activeNav === "/pricing"
                    ? "border-blue-500"
                    : "border-gray-700 dark:border-gray-200"
                } rotate-45 transition-transform duration-300`}
              />
            </Link>
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/resources" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/resources")}
            >
              Resources
              <span
                className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                  activeNav === "/resources"
                    ? "border-blue-500"
                    : "border-gray-700 dark:border-gray-200"
                } rotate-45 transition-transform duration-300`}
              />
            </Link>
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/enterprise" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/enterprise")}
            >
              Enterprise
              <span
                className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                  activeNav === "/enterprise"
                    ? "border-blue-500"
                    : "border-gray-700 dark:border-gray-200"
                } rotate-45 transition-transform duration-300`}
              />
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/signin"
              className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
