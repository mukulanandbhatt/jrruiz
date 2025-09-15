// components/HiddenCard.jsx

"use client";

import React, { useEffect, useState, useRef } from "react";

const HiddenCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on whether the card is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // This means the callback will run when 50% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup function to stop observing when the component unmounts
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        bg-white 
        rounded-xl 
        shadow-lg 
        p-8 
        flex 
        flex-col 
        items-center 
        text-center 
        border border-gray-100 
        transition-all 
        duration-1000 
        ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="mb-6 p-4 rounded-full bg-white shadow-md">
        {/* You will need an icon here. Use a custom SVG or a react-icon */}
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Your personal AI assistant for bureaucracy in your app
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Easily upload your contracts or sync cloud storage. The AI recognizes
        contents, deadlines, and risks, and gives you clear, understandable
        explanations.
      </p>
    </div>
  );
};

export default HiddenCard;
