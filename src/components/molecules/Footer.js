"use client";

import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import nextLogo from "../../../public/next.svg";

export default function Footer() {
  return (
    <>
    <footer className="bg-[#0B002E] text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-22px w-[320px] h-[214.59px] left-79px top-74px">
            <div className="flex items-center gap-2 w-[320px] h-[132.59px]">
              <Image src={nextLogo} alt="Clario.ai" width={40} height={40} />
              <span className="text-xl font-semibold w-[219.09px] h-[48.43px] top-50.58px left-100.91px">Clario.ai</span>
            </div>
            <p className="text-white text-lg leading-[30px] max-w-[320px]">
              Clario.ai automates the most time-consuming legal tasks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-[180px] h-[300px] top-74px left-556px">
            <h3 className="font-semibold text-[18px] leading-[30px] tracking-[0%] text-blue-500">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/blog">V-Blog</Link></li>
              <li><Link href="/location">Location & Directions</Link></li>
              <li><Link href="/contact">Contact Me</Link></li>
            </ul>
          </div>

          {/* About & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About & Policies</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact info</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📍 New York, MFT 43574, USA</li>
              <li>📍 Paseo Padre Parkway, Suite H, Fremont, CA 94539</li>
              <li>📞 (510) 612-6471</li>
              <li>📞 123456789</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2025 by Clario.ai. All Rights Reserved</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Follow On :</span>
            <Link href="#"><FaInstagram className="w-5 h-5 hover:text-pink-500 transition" /></Link>
            <Link href="#"><FaYoutube className="w-5 h-5 hover:text-red-500 transition" /></Link>
            <Link href="#"><FaLinkedin className="w-5 h-5 hover:text-blue-500 transition" /></Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
