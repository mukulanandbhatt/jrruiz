"use client";
import React, { useState } from "react";

const Star = () => (
  <img
    className="w-4 h-4"
    src="/images/HomePage/TestimonialStar.png"
    alt="Star"
  ></img>
);

const LeftArrow = () => (
  <img
    className="w-12 h-12"
    src="/images/Testimonials/LeftArrow.svg"
    alt="Left Arrow"
  ></img>
);

const RightArrow = () => (
  <img
    className="w-12 h-12"
    src="/images/Testimonials/RightArrow.svg"
    alt="Right Arrow"
  ></img>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-none w-80 lg:w-[21rem] px-6 py-10 backdrop-blur-3xl  bg-slate-300/10 rounded-xl border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex mb-4 gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed font-light mb-6">
          {testimonial.text}
        </p>
      </div>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-blue-500 font-light">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    rating: 5,
    text: "Clario.ai cut my contract review time from hours to seconds. No more worrying about hidden clauses — the AI explains it in plain Spanish!",
    name: "María López",
    title: "Freelance Designer, Spain",
    avatar: "images/Testimonials/0d7ec1e10a486760fb048cff54dd57f495b8b9fc.png",
  },
  {
    rating: 5,
    text: "I get so much official post in German. Clario translates, explains, and even answers for me — all in one click. It’s like having a personal legal assistant in my pocket.",
    name: "John Miller",
    title: "Retired Expat, Germany",
    avatar: "/images/Testimonials/36a86bf751d164418cef08ab2a8863c449abdf73.jpg",
  },
  {
    rating: 5,
    text: "I scan invoices with the portable scanner, and Clario takes care of the rest. No more piles of paper on my desk.",
    name: "David Ortega",
    title: "Restaurant Owner, UK",
    avatar: "/images/Testimonials/f3a549313a8c77a542d9239fdd18733c34787a69.png",
  },
  {
    rating: 5,
    text: "The multilingual summaries are perfect for my clients. English, German, French — all automatic.",
    name: "Julia Weber",
    title: "Translator, Austria",
    avatar: "/images/Testimonials/0639dffe95f6553ac4abc05da679ebd0df69a2cc.png",
  },
  {
    rating: 5,
    text: "Easy, secure, and friendly. Even my accountant uses it now to track contracts and invoices.",
    name: "Sophia Rossi ",
    title: "Small Retail Shop, Italy",
    avatar: "/images/Testimonials/bdd10399f99e7f40c287309d0996485c3c37e98c.png",
  },
  {
    rating: 5,
    text: "Clario alerted me to a clause in a tenant contract that could have cost me thousands. The AI summary was crystal clear.",
    name: "Carlos Ramirez",
    title: "Landlord, Spain",
    avatar: "/images/Testimonials/217e6468085d2d62272758cce71448a35607d699.jpg",
  },
  {
    rating: 5,
    text: "I used to ignore official letters because I didn’t understand them. Now I scan them and Clario handles the reply. Total peace of mind.",
    name: "Paul Nguyen",
    title: "Freelancer, Netherlands",
    avatar: "/images/Testimonials/ba159d3d3c5e13364f04fe1bfbbe98f8f41cb6f3.jpg",
  },
  {
    rating: 5,
    text: "The integration with WhatsApp is a game-changer. I forward a letter, and Clario tells me what it means and what to do.",
    name: "Hans Becker",
    title: "Freelancer, Germany",
    avatar: "/images/Testimonials/f3a549313a8c77a542d9239fdd18733c34787a69.png",
  },
  {
    rating: 5,
    text: "The risk flags and automatic claim templates saved us days of work when dealing with a service dispute.",
    name: "Fatima Al-Sayed ",
    title: "NGO Manager, Belgium",
    avatar: "/images/Testimonials/a57b4c870760aaf6ddf01d3659352275cfcc1fdb.png",
  },
  {
    rating: 5,
    text: "We manage 50+ supplier contracts. Clario’s renewal alerts saved us from paying €5,000 in accidental renewals.",
    name: "Lina Chen ",
    title: "Startup Founder, France",
    avatar: "/images/Testimonials/b1a461619dfce4f68046165f5e8d2aa133b89109.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const transformValue = `translateX(-${currentIndex * 24}rem)`;

  return (
    <>
      <section className=" bg-slate-50 relative overflow-hidden mx-5 rounded-3xl">
        <div className="z-0 h-full border-2 absolute right-0  w-1/2 bg-gradient-to-b from-10% mask-l-from-20% from-blue-300 to-purple-400 mask-t-from-70% mask-b-from-50%" />
        {/* <div
          className="absolute z-0 w-[500px] h-[250px] top-[300px] right-[200px]  bg-cover bg-center"
          style={{
            // backgroundImage: "url('/images/Testimonials/Vector.svg')",
            opacity: 0.7,
          }}
        /> */}
        {/* <div
          className="absolute z-0 w-[500px] h-[250px] top-[50px] right-[200px] bg-cover bg-center"
          style={{
            // backgroundImage: "url('/images/Testimonials/Vector1.svg')",
            opacity: 0.7,
          }}
        /> */}
        <div className="max-w-7xl pt-20 pb-10 mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="text-center mb-16  z-20">
            <h2 className="text-4xl font-bold text-gray-800  z-30">
              Customer testimonials
            </h2>
            <p className="mt-2 text-2xl sm:text-2xl md:text-4xl font-light  z-20 text-gray-600">
              Hear what our users have to say about Clario.AI
            </p>
          </div>

          <div className="relative">
            <div
              className="flex space-x-8 transition-transform duration-500 ease-in-out"
              style={{ transform: transformValue }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>

            {/* <div className="absolute top-0 right-0 w-80 h-full pointer-events-none bg-gradient-to-r from-transparent to-gray-50" /> */}
          </div>

          <div className="flex justify-end mt-8 space-x-2 z-30 ">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="cursor-pointer"
            >
              <LeftArrow />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - 4}
              className="cursor-pointer"
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
