// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [activeNav, setActiveNav] = useState("/");

//   return (
//     <>
//       <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[1296px]">
//         <div className="flex items-center justify-between bg-white/90 backdrop-blur-md border border-gray-200 shadow-md px-8 py-4 rounded-full">
//           {/* Logo */}
//           <Link href="/" onClick={() => setActiveNav("/")}>
//             <Image
//             src='/images/Frame 5.png'
//             alt="Clario.ai Logo"
//             width={120}
//             height={40}
//             priority
//           />
//           </Link>

//           <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
//             <Link
//               href="#"
//               className={`relative flex items-center gap-1 hover:text-blue-500 ${
//                 activeNav === "/product" ? "text-blue-500" : ""
//               }`}
//               onClick={() => setActiveNav("/product")}
//             >
//               Product
//               <span
//                 className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
//                   activeNav === "/product"
//                     ? "border-blue-500"
//                     : "border-gray-700 dark:border-gray-200"
//                 } rotate-45 transition-transform duration-300`}
//               />
//             </Link>
//             <Link
//               href="#"
//               className={`relative flex items-center gap-1 hover:text-blue-500 ${
//                 activeNav === "/use-cases" ? "text-blue-500" : ""
//               }`}
//               onClick={() => setActiveNav("/use-cases")}
//             >
//               Use Cases
//               <span
//                 className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
//                   activeNav === "/use-cases"
//                     ? "border-blue-500"
//                     : "border-gray-700 dark:border-gray-200"
//                 } rotate-45 transition-transform duration-300`}
//               />
//             </Link>
//             <Link
//               href="#"
//               className={`relative flex items-center gap-1 hover:text-blue-500 ${
//                 activeNav === "/pricing" ? "text-blue-500" : ""
//               }`}
//               onClick={() => setActiveNav("/pricing")}
//             >
//               Pricing
//               <span
//                 className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
//                   activeNav === "/pricing"
//                     ? "border-blue-500"
//                     : "border-gray-700 dark:border-gray-200"
//                 } rotate-45 transition-transform duration-300`}
//               />
//             </Link>
//             <Link
//               href="#"
//               className={`relative flex items-center gap-1 hover:text-blue-500 ${
//                 activeNav === "/resources" ? "text-blue-500" : ""
//               }`}
//               onClick={() => setActiveNav("/resources")}
//             >
//               Resources
//               <span
//                 className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
//                   activeNav === "/resources"
//                     ? "border-blue-500"
//                     : "border-gray-700 dark:border-gray-200"
//                 } rotate-45 transition-transform duration-300`}
//               />
//             </Link>
//             <Link
//               href="#"
//               className={`relative flex items-center gap-1 hover:text-blue-500 ${
//                 activeNav === "/enterprise" ? "text-blue-500" : ""
//               }`}
//               onClick={() => setActiveNav("/enterprise")}
//             >
//               Enterprise
//               <span
//                 className={`inline-block w-2 h-2 border-r-2 border-b-2 ${
//                   activeNav === "/enterprise"
//                     ? "border-blue-500"
//                     : "border-gray-700 dark:border-gray-200"
//                 } rotate-45 transition-transform duration-300`}
//               />
//             </Link>
//           </nav>

//           {/* Buttons */}
//           <div className="flex items-center space-x-3">
//             <Link
//               href="/signin"
//               className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//             >
//               Sign in
//             </Link>
//             <Link
//               href="/get-started"
//               className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
//             >
//               Get started
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeNav, setActiveNav] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-[1296px] px-4 md:px-8">
        <div className="flex items-center justify-between bg-white backdrop-blur-md border border-gray-200 shadow-md px-4 py-4 rounded-full">
          {/* Logo */}
          <Link href="/" onClick={() => setActiveNav("/")}>
            <Image
              src="/images/Frame 5.png"
              alt="Clario.ai Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Buttons - Hidden on small screens to make space for the menu */}
          <div className="hidden lg:flex items-center space-x-3">
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

          {/* Hamburger menu button for mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[90px] left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-[1296px] bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg py-4 rounded-b-lg">
          <nav className="flex flex-col items-center space-y-4 font-medium text-gray-700 dark:text-gray-200">
            <Link
              href="#"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/product" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/product");
                setIsMenuOpen(false);
              }}
            >
              Product
            </Link>
            <Link
              href="#"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/use-cases" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/use-cases");
                setIsMenuOpen(false);
              }}
            >
              Use Cases
            </Link>
            <Link
              href="#"
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
              href="#"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/resources" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/resources");
                setIsMenuOpen(false);
              }}
            >
              Resources
            </Link>
            <Link
              href="#"
              className={`w-full text-center py-2 hover:bg-gray-100 rounded-lg ${
                activeNav === "/enterprise" ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveNav("/enterprise");
                setIsMenuOpen(false);
              }}
            >
              Enterprise
            </Link>
            <div className="flex flex-col space-y-2 w-full mt-4">
              <Link
                href="/signin"
                className="w-full text-center px-5 py-2 rounded-full border border-gray-400 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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