"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FcAbout } from "react-icons/fc";
import { Briefcase, Newspaper } from "lucide-react";

export default function Header() {
  // const [activeNav, setActiveNav] = useState("/");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // function handleScroll(id) {
  //   document
  //     .getElementById(id)
  //     .scrollIntoView({ behavior: "smooth", block: "end" });
  // }
  const pathName = usePathname();
  const navLinks = [
    {
      title: "Whats Clario?",
      link: "/",
      isActive: pathName === "/",
    },
    {
      title: "Who is It for?",
      link: "/who-is-it-for",
      isActive: pathName.endsWith("/who-is-it-for"),
    },
    // { title: "Blogs", link: "/blogs", isActive: pathName.endsWith("/blogs") },
    {
      title: "Use Case",
      link: "/#use-case",
      scroll: false,
      // isActive: window.location.hash === "#use-case",
      // onClick: () => handleScroll("use-case"),
    },
    {
      title: "Pricing",
      link: "/#pricing",
      scroll: false,
      // isActive: window.location.hash === "#pricing",
      // onClick: () => handleScroll("pricing"),
    },
    {
      title: "FAQ",
      link: "/#faq",
      // isActive: window.location.hash === "#faq",
      // onClick: () => handleScroll("faq"),
    },
  ];
  return (
    <>
      <header className="fixed w-full sm:w-[calc(100%-2rem)] top-8 self-center z-50 max-w-[1200px] px-5 ">
        <div className="flex items-center justify-between bg-white backdrop-blur-md border border-gray-200 shadow-md px-3 sm:px-4 py-3 sm:py-4 rounded-full">
          <Link href="/">
            <Image
              src="/images/Frame 5.png"
              alt="Clario.ai Logo"
              width={100}
              height={100}
              priority
              className="max-sm:h-9"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700 relative">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.title}
                href={navlink?.link}
                className={`relative flex items-center gap-1 hover:text-blue-500 ${
                  navlink.isActive ? "text-blue-500" : ""
                }`}
              >
                {navlink?.title}
              </Link>
            ))}
            <div className="relative group  inline-block">
              {/* Trigger */}
              <div className="cursor-pointer  flex items-center gap-1 hover:text-blue-500">
                About Clario
              </div>

              {/* Dropdown */}
              <div className="absolute group left-0 hidden group-hover:flex flex-col z-10">
                <div className="bg-slate-50 px-5 py-3 mt-3 rounded-md  shadow-md  w-36 flex flex-col gap-2">
                  <Link
                    className="hover:text-blue-500 flex gap-2 items-center"
                    href="
                    /about-us"
                  >
                    <FcAbout size={16} />
                    About us
                  </Link>
                  <Link
                    className="hover:text-blue-500 flex gap-2 items-center"
                    href="/jobs"
                  >
                    <Briefcase size={16} />
                    Jobs
                  </Link>
                  <Link
                    className="hover:text-blue-500 flex gap-2 items-center"
                    href="/blogs"
                  >
                    <Newspaper size={16} />
                    Blogs
                  </Link>
                </div>
              </div>
            </div>

            {/* <Link
              href="/"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/clario.ai" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/clario.ai")}
            >
              Whats Clario?
            </Link>

            <Link
              href="who-is-it-for"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/who-is-it-for" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/who-is-it-for")}
            >
              Who is It for?
            </Link>

            <Link
              href="blogs"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/blogs" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/blogs")}
            >
              Blogs
            </Link>

            <Link
              scroll={false}
              href="/"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/use-case" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("use-case")}
            >
              use-case/case use
            </Link>

            <Link
              href="/"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/pricing" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("use-case")}
            >
              Pricing
            </Link>

            <Link
              href="#faq"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/faq" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/faq")}
            >
              FAQ
            </Link> */}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/signin"
              className="px-5 py-2 rounded-full border border-gray-400 text-gray-700  hover:bg-gray-100 transition"
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

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="px-3 lg:hidden fixed top-[120px] left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-[1296px] bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg py-4 rounded-b-lg">
          <nav className="flex flex-col items-center space-y-4 font-medium text-gray-700 ">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.title}
                onClick={() => setIsMenuOpen(false)}
                href={navlink?.link}
                className={`relative flex items-center gap-1 hover:text-blue-500 ${
                  navlink.isActive ? "text-blue-500" : ""
                }`}
              >
                {navlink?.title}
              </Link>
            ))}
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-500 flex gap-2 items-center"
              href="
                    /about-us"
            >
              About us
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-500 flex gap-2 items-center"
              href="/jobs"
            >
              Jobs
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-500 flex gap-2 items-center"
              href="/blogs"
            >
              Blogs
            </Link>

            <div className="flex flex-col space-y-2 w-full mt-4">
              <Link
                href="/signin"
                className="w-full text-center px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="w-full text-center px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
