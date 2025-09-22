"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeNav, setActiveNav] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-[1296px] px-4 md:px-8">
        <div className="flex items-center justify-between bg-white backdrop-blur-md border border-gray-200 shadow-md px-4 py-4 rounded-full">

          <Link href="/" onClick={() => setActiveNav("/")}>
            <Image
              src="/images/Frame 5.png"
              alt="Clario.ai Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700 relative">
            <Link
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/clario.ai" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/clario.ai")}
            >
              Whats Clario.AI?
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1 hover:text-blue-500 ${
                  activeNav === "/usecases" ? "text-blue-500" : ""
                }`}
              >
                Use Cases
                <span
                  className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                    isDropdownOpen
                      ? "rotate-225 border-blue-500"
                      : "rotate-45 border-gray-700"
                  } transition-transform duration-300`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-[800px] bg-white border border-gray-200 shadow-lg rounded-xl p-6 grid grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-6">USE CASES</h3>
                    <ul className="space-y-6 text-sm text-gray-700 cursor-pointer">
                      <li>AI answering machine</li>
                      <li>AI Secretary</li>
                      <li>AI support staff</li>
                      <li>Appointments & FAQ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-6">INDUSTRIES</h3>
                    <ul className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm text-gray-700 cursor-pointer">
                      <li>Generally</li>
                      <li>Contact Center</li>
                      <li>Hotel</li>
                      <li>Lawyers</li>
                      <li>E-commerce</li>
                      <li>IT system houses</li>
                      <li>Car dealerships</li>
                      <li>Retailers</li>
                      <li>Recruitment</li>
                      <li>Doctors</li>
                      <li>Handyman</li>
                      <li>Self-employed</li>
                      <li>Beauty</li>
                      <li>Property Management</li>
                      <li>Tax advice</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#storytelling"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/storytelling" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/stortelling")}
            >
              Story Telling
            </Link>

            <Link
              href="#pricing"
              className={`relative flex items-center gap-1 hover:text-blue-500 ${
                activeNav === "/pricing" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveNav("/pricing")}
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
            </Link>
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
        <div className="lg:hidden fixed top-[90px] left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-[1296px] bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg py-4 rounded-b-lg">
          <nav className="flex flex-col items-center space-y-4 font-medium text-gray-700 ">
            <Link
              href="#"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/clario.ai" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/clario.ai");
                setIsMenuOpen(false);
              }}
            >
              What Clario.AI?
            </Link>

            <div className="w-full">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex justify-center items-center gap-2 py-2 px-4 hover:bg-gray-100 rounded-lg"
              >
                <span
                  className={`${
                    activeNav === "/usecases" ? "text-blue-500" : ""
                  }`}
                >
                  Use Cases
                </span>
                <span
                  className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
                    isMobileDropdownOpen
                      ? "rotate-225 border-blue-500"
                      : "rotate-45 border-gray-700"
                  } transition-transform duration-300`}
                />
              </button>

              {isMobileDropdownOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">USE CASES</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>AI answering machine</li>
                      <li>AI Secretary</li>
                      <li>AI support staff</li>
                      <li>Appointments & FAQ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">INDUSTRIES</h3>
                    <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-700">
                      <li>Generally</li>
                      <li>Contact Center</li>
                      <li>Hotel</li>
                      <li>Lawyers</li>
                      <li>E-commerce</li>
                      <li>IT system houses</li>
                      <li>Car dealerships</li>
                      <li>Retailers</li>
                      <li>Recruitment</li>
                      <li>Doctors</li>
                      <li>Handyman</li>
                      <li>Self-employed</li>
                      <li>Beauty</li>
                      <li>Property Management</li>
                      <li>Tax advice</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#storytelling"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/storytelling" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/storytelling");
                setIsMenuOpen(false);
              }}
            >
              Story telling
            </Link>

            <Link
              href="#pricing"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/pricing" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/pricing");
                setIsMenuOpen(false);
              }}
            >
              Pricing
            </Link>

            <Link
              href="#faq"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/faq" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/faq");
                setIsMenuOpen(false);
              }}
            >
              FAQ
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
