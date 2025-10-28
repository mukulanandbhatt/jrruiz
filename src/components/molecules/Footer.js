"use client";

import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FOOTER_DATA } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B002E] text-white py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/images/hero_back.svg')`,
        }}
      ></div>
      <div
        className="absolute w-[300px] h-[300px] bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('/images/wave.svg')`,
          bottom: "-180px",
          right: "10px",
          zIndex: 1,
        }}
      ></div>

      <div className="3xl:max-w-[1600px] max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full ">
        <div className="grid grid-cols-1  lg:grid-cols-5  gap-[max(6vw,1rem)] justify-items-center ">
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/images/logo.svg"
              alt="Clario.ai"
              width={150}
              height={150}
            />
            <p className="text-white text-lg leading-[30px] text-center">
              Clario.ai automates the most time-consuming legal tasks.
            </p>
          </div>
          {/* Quick Links */}
          <section>
            <h3 className="text-center font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-3 sm:mb-4">
              Quick Links
            </h3>
            {FOOTER_DATA.quickLinks.map((data) => (
              <UnorderedList>
                <li className="text-nowrap text-center">
                  <Link href={data.href}>{data.label}</Link>
                </li>
              </UnorderedList>
            ))}
            {/* <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori] flex items-center flex-col">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <Link href="/blog">V-Blog</Link>
              </li>
              <li>
                <Link href="/location">Location & Directions</Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul> */}
          </section>
          {/*    About & Policies */}

          <section>
            <h3 className="text-center font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-3 sm:mb-4">
              About & Policies
            </h3>
            {FOOTER_DATA.aboutAndPolicies.map((data) => (
              <UnorderedList>
                <li className="text-nowrap text-center">
                  <Link href={data.href}>{data.label}</Link>
                </li>
              </UnorderedList>
            ))}
          </section>

          {/* <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori] flex items-center flex-col">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/accessibility">Accessibility</Link>
              </li>
            </ul> */}
          {/*  Get Help */}

          <section>
            <h3 className="text-center font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-3 sm:mb-4">
              Get Help
            </h3>
            {FOOTER_DATA.getHelp.map((data) => (
              <UnorderedList>
                <li className="text-nowrap text-center">
                  <Link href={data.href}>{data.label}</Link>
                </li>
              </UnorderedList>
            ))}
            {/* <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori] flex items-center flex-col">
              <li>
                <Link href="/therapists">Therapists</Link>
              </li>
              <li>
                <Link href="/psychiatrists">Psychiatrists</Link>
              </li>
              <li>
                <Link href="/treatment-centers">Treatment Centers</Link>
              </li>
              <li>
                <Link href="/support-groups">Support Groups</Link>
              </li>
            </ul> */}
          </section>
          {/*    Contact Info */}

          <section>
            <h3 className="font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-3 sm:mb-4 text-center">
              Contact Info
            </h3>
            {FOOTER_DATA.contactInfo.map((data) => (
              <UnorderedList>
                <li className="text-nowrap text-center">
                  <Link href={data.href}>{data.label}</Link>
                </li>
              </UnorderedList>
            ))}
            {/* <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori] flex items-center flex-col">
              <li>📍 New York, MFT 43574, USA</li>
              <li>📍 Paseo Padre Parkway, Suite H, Fremont, CA 94539</li>
              <li className="text-nowrap">📞 (510) 612-6471</li>
              <li className="text-nowrap">📞 123456789</li>
            </ul> */}
          </section>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        {/* SOCIAL ICONS */}
        <section className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2025 by Clario.ai. All Rights Reserved</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Follow On :</span>
            <Link href="#">
              <FaInstagram className="w-5 h-5 hover:text-pink-500 transition" />
            </Link>
            <Link href="#">
              <FaYoutube className="w-5 h-5 hover:text-red-500 transition" />
            </Link>
            <Link href="#">
              <FaLinkedin className="w-5 h-5 hover:text-blue-500 transition" />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

function UnorderedList({ children }) {
  return (
    <ul className=" text-gray-300 text-[18px] leading-9 font-[PP_Mori] flex items-center flex-col">
      {children}
    </ul>
  );
}
