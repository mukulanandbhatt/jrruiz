import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Star } from "lucide-react";
import globe from "../../../../public/globe.svg";
import WhyUs from "./WhyUs";
import Brands from "./Brands";
import Features from "./Features";
// import Benefits from "./Benefits"

export default function HomePage() {
  return (
    <>
      <main className="bg-[#0B002E] min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center pt-20 pb-32">
            {/* Google Rating Badge */}
            <div className="mb-6 mt-10">
              <div className="bg-[#1E1E2F] rounded-full px-4 py-2 flex items-center justify-between shadow-md gap-4 w-fit">
                {/* Left Side: Google Logo + Rating */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4285F4"
                      d="M23.49 12.27c0-.74-.06-1.46-.18-2.16H12v4.09h6.42c-.27 1.46-1.08 2.7-2.28 3.53v2.92h3.68c2.15-1.99 3.41-4.93 3.41-8.38z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.94-1.08 7.92-2.94l-3.68-2.92c-1.02.68-2.31 1.08-4.24 1.08-3.24 0-5.98-2.18-6.95-5.1H1.3v3.2C3.25 21.54 7.31 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.05 14.02A7.99 7.99 0 0 1 5 12c0-.74.12-1.46.3-2.12V6.68H1.3A12 12 0 0 0 0 12c0 1.88.45 3.64 1.25 5.18l3.8-3.16z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.77c1.75 0 3.29.6 4.51 1.75l3.37-3.37C17.91 1.17 15.2 0 12 0 7.31 0 3.25 2.46 1.3 6.68l3.8 3.16C6.02 6.95 8.76 4.77 12 4.77z"
                    />
                  </svg>
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

                {/* Right Side: Avatars + Count */}
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <Image
                      src={globe}
                      alt="User 1"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={globe}
                      alt="User 2"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={globe}
                      alt="User 3"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={globe}
                      alt="User 4"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="text-sm font-medium text-white bg-[#2C2C3E] rounded-full px-2 py-0.5">
                    20k+
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl md:text-6xl font-[PP_Mori] font-semibold leading-[1.2] max-w-4xl">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg font-medium transition">
                Discover Your New Power <FaArrowRight />
              </button>
            </div>

            <p className="mt-10 text-[25px] leading-[35px] font-[PP_Neue_Montreal] font-medium text-white text-center md:text-left">
              Our Clario.AI Assistant will:
            </p>
            {/* Feature Buttons */}
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                Answer emails & analyze documents
              </span>
              <span className="px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                Sign documents automatically
              </span>
              <span className="px-6 py-3 bg-[#1C1C1E] rounded-full text-sm md:text-base text-gray-200">
                Compare contracts with legal precision
              </span>
            </div>
          </div>

          {/* Decorative Background Gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="w-[1200px] h-[1200px] bg-gradient-radial from-[#1A0B3A] via-[#0B002E] to-[#0B002E] opacity-70 rounded-full blur-3xl mx-auto"></div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10">
            <Image src="/shape1.svg" alt="decoration" width={60} height={60} />
          </div>
          <div className="absolute bottom-32 right-16">
            <Image src="/shape2.svg" alt="decoration" width={60} height={60} />
          </div>
        </section>
      </main>
      <WhyUs />
      <Brands />
      <Features />
      {/* <Benefits /> */}
    </>
  );
}
