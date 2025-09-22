import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Star } from "lucide-react";
import globe from "../../../../public/globe.svg";
import WhyUs from "./WhyUs";
import Brands from "./Brands";
import Features from "./Features";
import Benefits from "./Benefits";
import UploadDocuments from "./UploadDocument/UploadDocuments";
import TargetAudience from "./TargetAudience";
import VideoPage from "./VideoPage";
import TrustSection from "./TrustSection";
import BusinessFeatures from "./BusinessFeatures";
import ClarioProcess from "./ClarioProcess";
import ClarioUse from "./ClarioUse";
import Testimonials from "./Testimonials";
import Connect from "../../atoms/Connect";
import Pricing from "../../atoms/Pricing";
import CTASection from "../../atoms/CTASection";
import FAQ from "../../atoms/FAQ";
import { Cover } from "../Button/Cover";

export default function HomePage() {
  return (
    <>
      <main className="bg-[#0B002E] min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden mt-20">
          <div
            className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center pt-20 pb-32"
            style={{
              backgroundImage: `url('/images/hero_back.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-6 mt-10">
              <div className="bg-[#1E1E2F] rounded-full px-4 py-2 flex items-center justify-between shadow-md gap-4 w-fit">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/HomePage/GoogleLogo.png"
                    alt="Google Logo"
                    style={{
                      width: "50",
                      height: "50",
                      viewBox: "0 0 48 48",
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-white text-[18px] font-medium leading-[23.4px]">
                    Google Rating
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-white text-sm">5.0</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-white text-white"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <Image
                      src="/images/HomePage/author-6.jpg.png"
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/HomePage/author-5.jpg.png"
                      alt="User 1"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/HomePage/author-2.jpg.png"
                      alt="User 2"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/HomePage/author-3.jpg.png"
                      alt="User 3"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/HomePage/author-1.jpg.png"
                      alt="User 4"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/HomePage/Background+Border.png"
                      alt="20K +"
                      width={32}
                      height={32}
                      className="rounded-full border-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Heading */}
            <h1 className="text-2xl md:text-5xl sm:text-3xl lg:text-6xl font-[PP_Mori] font-semibold leading-[1.2] max-w-4xl">
              Your Data, <span className="text-yellow-400">your Power,</span>{" "}
              <br />
              under your control
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
              Clario.ai is your smart contract assistant powered by artificial
              intelligence. Automate, understand, and manage your contracts –
              multilingual, secure, and completely stress-free.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="relative  dark:border-white px-8 py-3 flex items-center justify-center gap-2 text-lg font-medium transition cursor-pointer overflow-hidden">
                <Cover className="flex items-center gap-2">
                  <span>Discover Your New Power</span>
                  <FaArrowRight />
                </Cover>
              </button>
            </div>

            <p className="mt-10 text-[25px] leading-[35px] font-[PP_Neue_Montreal] font-medium text-white text-center md:text-left">
              Our Clario.AI key features will:
            </p>
            {/* Feature Buttons */}
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                <img src="/images/HomePage/Right tick.png" alt="Right tick" />
                Automatic summary Ai, <br /> tranlations Ai, riks indicator
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                <img src="/images/HomePage/Right tick.png" alt="Right tick" />
                Meet LExi.Ai our Legal Chatbot
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                <img src="/images/HomePage/Right tick.png" alt="Right tick" />
                Autofill, sign and Send documents
              </span>
            </div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute bottom-60 left-20 hidden md:block">
            <Image
              src="/images/HomePage/Star.png"
              alt="star decoration"
              width={92}
              height={92}
            />
          </div>

          <div className="absolute top-40 right-10 hidden md:block">
            <Image
              src="/images/HomePage/Star.png"
              alt="star decoration"
              width={92}
              height={92}
            />
          </div>
          <div className="absolute top-30 right-60 hidden md:block">
            <Image
              src="/images/HomePage/Property 1=Group.png"
              alt="decoration"
              width={110}
              height={110}
            />
          </div>
          <div className="absolute top-80 right-40 hidden md:block bg-transparent">
            <Image
              src="/images/HomePage/Gemini_Generated_Image_p21zalp21zalp21z-removebg-preview.png"
              alt="contracts decoration"
              width={170}
              height={300}
              className="bg-none"
            />
          </div>
          <div className="absolute bottom-80 right-70 hidden md:block">
            <Image
              src="/images/HomePage/Vector.png"
              alt="vector decoration"
              width={100}
              height={200}
            />
          </div>
          <div className="absolute bottom-10 right-10 hidden md:block">
            <Image
              src="/images/wave.svg"
              alt="wave decoration"
              width={300}
              height={400}
            />
          </div>
          <div className="absolute top-60 left-40 scale-x-[-1] hidden md:block">
            <Image
              src="/images/wave.svg"
              alt="wave decoration"
              width={300}
              height={400}
            />
          </div>
          <div className="absolute top-40 left-50 hidden md:block">
            <Image
              src="/images/HomePage/Property 2=Group.png"
              alt="Message decoration"
              width={60}
              height={60}
            />
          </div>
          <div className="absolute top-20 left-90 hidden md:block">
            <Image
              src="/images/HomePage/Emails.svg"
              alt=" Email decoration"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute top-95 left-40 hidden md:block">
            <Image
              src="/images/HomePage/Group 1597883996.svg"
              alt="invoices decoration"
              width={150}
              height={200}
            />
          </div>
          <div className="absolute bottom-60 left-60 hidden md:block">
            <Image
              src="/images/HomePage/Property 3=Group.png"
              alt="decoration"
              width={90}
              height={90}
            />
          </div>
        </section>
      </main>

      <WhyUs />
      <Brands />
      <Features />
      <Benefits />
      <UploadDocuments />
      <TargetAudience />
      <VideoPage />
      <TrustSection />
      <BusinessFeatures />
      <ClarioProcess />
      <ClarioUse />
      <Testimonials />
      <Connect />
      <Pricing />
      <CTASection />
      <FAQ />
    </>
  );
}
