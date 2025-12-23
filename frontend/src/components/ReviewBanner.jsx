import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function ReviewBanner({ reviews, animate = true }) {
  // Duplicate reviews for seamless looping
  const marqueeReviews = animate ? [...reviews, ...reviews] : reviews;

  return (
    <div className="w-full bg-blue-50 border-t border-b border-blue-100 py-6 overflow-hidden">
      <div
        className={
          animate
            ? "animate-marquee gap-8"
            : "flex gap-8 justify-center flex-wrap"
        }
        style={animate ? { minWidth: "200%" } : {}}
      >
        {marqueeReviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[320px] max-w-xs bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border border-blue-200 p-6 mx-2 transition-transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />
            <img
              src={review.projectImage}
              alt="Project"
              className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-white shadow"
            />
            <p className="text-gray-800 font-semibold text-center mb-3 font-inter italic leading-relaxed">
              "{review.text}"
            </p>
            <span className="text-blue-700 font-bold mb-1 font-inter tracking-wide">
              {review.client}
            </span>
            <a
              href={`mailto:${review.email}`}
              className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold mt-1 hover:bg-blue-200 transition"
            >
              {review.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}