import { cn } from "@/components/molecules/Button/CN";
import { ReactNode } from "react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col  h-full w-full p-5">
      {/* HEADER */}
      <section className="w-full  rounded-2xl bg-theme  h-[45vh] flex flex-col justify-center items-center text-white">
        <h6 className="sm:text-5xl text-4xl font-medium">About CLARIO.AI</h6>
        <p className="mt-5">Home/ About us</p>
      </section>

      {/* OUR MISSION SECTION */}
      <div className="pt-10 pb-20 max-w-[1000px] mx-auto ">
        <section>
          <h6 className="text-2xl font-medium sm:text-3xl">Our Mission</h6>
          <Para className="mt-4">
            We founded Clario AI because we believe that everyone—individuals,
            families, freelancers, and businesses—deserves clarity, security,
            and control over their documents.
          </Para>
          <Para className="mt-2">
            Contracts, invoices, insurance policies, tax files—these define our
            professional and personal lives, yet they are often confusing,
            time-consuming, and risky. Our mission is to change that.
          </Para>
          <Para className="mt-2">
            By combining artificial intelligence with a human-centered approach,
            we are building a platform that makes legal and bureaucratic
            documents:
          </Para>
          <ul className="list-disc list-inside pl-5">
            <li>Easier to understand</li>
            <li>Safer to manage</li>
            <li>Smarter to organize</li>
          </ul>
          <Para className="mt-2">
            We want to give people back their time, their peace of mind, and
            their freedom—while reducing the stress and cost of bureaucracy.
          </Para>
        </section>
        <hr className="w-full mt-8 mb-5" />
        {/* OUR MISSION SECTION */}
        <section>
          <Heading>Our Founders</Heading>
          <Para className="mt-4">
            Clario AI is led by two brothers who share the vision of
            transforming how people handle paperwork:
          </Para>
          <div className="mt-3">
            <p className="text-lg font-medium ">
              👤 Francisco Javier Rodríguez Ruiz
            </p>
            <p className="ml-7 text-text-primary text-sm">Co-Founder & CEO</p>
            <p>
              Drives the company’s mission, product vision, and strategy—focused
              on building the most user-friendly, intelligent assistant for
              documents.
            </p>
          </div>
          <div className="mt-3">
            <p className="text-lg font-medium">👤 Guillermo Rodríguez Ruiz</p>
            <p className="ml-7 text-text-primary text-sm">Co-Founder & COO</p>
            <p>
              Leads operations and ensures Clario AI delivers efficiency, trust,
              and seamless user experiences at every stage.
            </p>
          </div>
        </section>
        <hr className="w-full mt-8 mb-5" />
        <Heading>Our Team</Heading>
        <Para className="mt-3 text-base font-medium">
          Our talented, international team brings expertise from software,
          fintech, AI, and legal-tech industries.
        </Para>
        <Para className="mt-3 text-base font-medium">
          Together, we are dedicated to creating innovative solutions that solve
          real-world problems: from missed deadlines and misunderstood contracts
          to international bureaucracy and everyday family paperwork.
        </Para>
        <Para className="mt-3 text-base font-medium">
          We work in close collaboration with users—freelancers, families, SMEs,
          and expats—because the best solutions are built when they answer real
          needs.
        </Para>
        {/* <hr className="w-full mt-8 mb-5" /> */}
      </div>
    </div>
  );
}

function Para({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm text-text-primary sm:leading-5.5 tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
}

function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h6 className={cn("text-2xl font-medium sm:text-3xl", className)}>
      {children}
    </h6>
  );
}
