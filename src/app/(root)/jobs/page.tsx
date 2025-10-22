import Heading from "@/components/atoms/Heading";
import Para from "@/components/atoms/Para";
import Separator from "@/components/atoms/Separator";
import { cn } from "@/components/molecules/Button/CN";

export default function page() {
  return (
    <div className="flex flex-col h-full w-full sm:p-5">
      {/* HEADER SECTION */}
      <section
        className={cn(
          "w-full  sm:rounded-2xl bg-theme h-[60vh] px-3 flex flex-col justify-center items-center pt-20 text-white",
          "bg-[radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[size:20px_20px]"
        )}
      >
        <h6 className="sm:text-5xl text-4xl font-medium text-center">
          Careers at Clario AI
        </h6>
        {/* <h6 className="sm:text-5xl text-4xl font-medium mt-3">
          Build The Future Together
        </h6> */}
        <p className="text-center max-w-xl mt-4 max-sm:text-sm">
          We’re not just simplifying documents — we’re building the future of
          trust in everyday life.
        </p>
        <p className="mt-5">Home/ Jobs</p>
      </section>

      {/*  */}
      <div className="pt-10 pb-20 max-w-[1000px] mx-auto px-5">
        {/* WHO WE ARE SECTION */}
        <section>
          <Heading>Who We Are</Heading>
          <Para className=" text-base">
            80% of people feel overwhelmed by paperwork, deadlines, and hidden
            contract clauses. Families, freelancers, and small businesses often
            lose money and time because of bureaucratic complexity.
          </Para>
          <Para className="mt-3 text-base">
            That’s why we created Clario AI: An intelligent assistant that makes
            documents understandable, safe, and easy to manage. From summaries
            and translations to risk scoring and deadline tracking, Clario AI
            gives people control back over their professional and personal
            lives.
          </Para>
          <Para className="mt-3 text-base">
            We’re on a mission to make paperwork stress-free — and we’d love you
            to be part of it.
          </Para>
        </section>
        <Separator />
        {/* LIFE AT CLARIO SECTION */}
        <section>
          <Heading>Life at Clario AI</Heading>
          <div className="space-y-2">
            <Para>
              👩‍💻 “Every day brings new challenges, and I’m constantly learning.
              Working here is never boring.” <br /> — Product Team
            </Para>
            <Para>
              📞 “I understand users’ struggles because I’ve lived them.
              Together, we build solutions that really matter.”
              <br /> — Customer Success
            </Para>
            <Para>
              👨‍💻 “Our ‘Nice People Only’ philosophy makes teamwork inspiring and
              fun. We celebrate wins together.”
              <br /> — Engineering
            </Para>
            <Para>
              🎉 “We work hard, but we also know how to enjoy success — whether
              at team events or spontaneous after-work moments.”
              <br /> — Sales
            </Para>
          </div>
        </section>
        <Separator />

        {/* OUR VALUES SECTION*/}
        <section>
          <Heading>Our Values</Heading>
          <div className="space-y-2">
            <Para>We design every feature to serve our users.</Para>
            <Para>
              ⚡ Start Small — Learn Fast <br />
              Experiment, learn, and grow quickly.
            </Para>
            <Para>
              🤝Team Over Ego <br />
              We celebrate wins together and support each other.
            </Para>
            <Para>
              😊Nice People Only
              <br /> We value respect, openness, and kindness.
            </Para>
            <Para>
              🚀 Less is More
              <br /> We keep solutions simple and impactful.
            </Para>
            <Para>
              🔥 Be Proactive <br />
              If you see something to improve, take the lead.s
            </Para>
          </div>
        </section>
        <Separator />
        {/* BENEFITS */}
        <section>
          <Heading>Benefits</Heading>
          <div className="space-y-2">
            <Para className="text-base">
              We want you to thrive, not just work:
            </Para>
            <Para>
              🚆 Mobility support — public transport ticket or bike subscription
            </Para>
            <Para> 💪 Urban Sports Club membership for a healthy balance </Para>
            <Para> 🎉 Monthly team events & seasonal celebrations</Para>
            🏡 Hybrid work model — office & remote flexibility
            <Para>
              🌴 Workation option — work up to 4 weeks from anywhere in Europe
            </Para>
            <Para>
              📈 A steep learning curve with real responsibility from day one
            </Para>
          </div>
        </section>
        {/* OPEN POSITIONS */}
        <Separator />
        <section>
          <Heading>Open Positions</Heading>
          <h4>Engineering</h4>
          <div className="space-y-3">
            <ul className="list-disc list-inside pl-5">
              <li>Senior AI Engineer</li>
              <li>(Senior) Fullstack Engineer (TypeScript)</li>
              <li>(Senior) Software Engineer (Rust)</li>
              <li>Engineering Manager</li>
            </ul>
            <h4>Product</h4>
            <ul className="list-disc list-inside pl-5">
              <li>Senior Product Manager</li>
            </ul>
            <h4>Sales & Marketing</h4>
            <ul className="list-disc list-inside pl-5">
              <li>Senior AI Engineer</li>
              <li>Event Marketing Manager</li>
              <li>Partner Sales Manager</li>
            </ul>
            <h4>Customer Success</h4>
            <ul className="list-disc list-inside pl-5">
              <li> Customer Support Manager</li>
            </ul>
            <p>…and more to come!</p>
          </div>
        </section>
      </div>
    </div>
  );
}
