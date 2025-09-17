"use client";

import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

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

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="flex flex-col gap-6 max-w-[320px]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="Clario.ai"
                width={150}
                height={150}
              />
            </div>
            <p className="text-white text-[18px] leading-[30px]">
              Clario.ai automates the most time-consuming legal tasks.
            </p>
          </div>

          <div>
            <h3 className="font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori]">
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
            </ul>
          </div>

          <div>
            <h3 className="font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-4">
              About & Policies
            </h3>
            <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori]">
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
            </ul>
          </div>

          <div>
            <h3 className="font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-4">
              Get Help
            </h3>
            <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori]">
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
            </ul>
          </div>

          <div>
            <h3 className="font-[PP_Mori] font-semibold text-[18px] leading-[30px] text-blue-500 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-300 text-[18px] leading-[30px] font-[PP_Mori]">
              <li>📍 New York, MFT 43574, USA</li>
              <li>📍 Paseo Padre Parkway, Suite H, Fremont, CA 94539</li>
              <li>📞 (510) 612-6471</li>
              <li>📞 123456789</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
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
        </div>
      </div>
    </footer>
  );
}
