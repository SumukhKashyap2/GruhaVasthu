import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { handleSubmit } from "../components/handleSubmit";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); 
  // idle | submitting | success | error

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-orange-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 px-4 py-20 items-center">

        {/* Heading */}
        <div className="lg:col-span-12 flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center">
            Let’s Build Something Exceptional
          </h2>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-7 flex flex-col items-center">

          {/* Features */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full mb-10">
            {[
              "25+ years of construction expertise",
              "Complete turnkey solutions",
              "Vasthu-compliant designs",
            ].map(text => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/80 rounded-xl px-6 py-4 shadow"
              >
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="font-semibold text-gray-700">{text}</span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => handleSubmit(e, setStatus)}
            className="bg-white rounded-3xl shadow-xl p-10 space-y-6 w-full max-w-lg mx-auto"
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="phone"
              placeholder="Phone"
              className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Project Location & Requirements"
              className="w-full border p-4 rounded-lg min-h-[120px] focus:ring-2 focus:ring-blue-500"
            />

            {/* Formspree helpers */}
            <input type="hidden" name="_subject" value="New enquiry from Gruha Vasthu website" />
            <input type="hidden" name="_replyto" />
            <input type="text" name="_gotcha" className="hidden" />

            <button
              disabled={status === "submitting"}
              className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Get a Quote"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center font-semibold">
                Thanks! We’ll contact you within 24 hours.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center font-semibold">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>

          {/* Reassurance */}
          <p className="text-gray-600 mt-6 text-center">
            We typically respond within <b>24 hours</b>.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center w-full max-w-lg mx-auto mt-8">
            <span className="text-gray-700 mb-2">
              You can also reach out to us at:
            </span>
            <div className="flex flex-col gap-3 text-blue-800 font-semibold text-lg items-center">
              <a href="tel:+917975259383" className="flex items-center gap-2 hover:underline">
                <MdPhone className="text-blue-600" /> Call Us
              </a>
              <a href="mailto:vasthugruha2002@gmail.com" className="flex items-center gap-2 hover:underline">
                <SiGmail className="text-red-500" /> Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0">
          <img
            src="/images/get-quote-illustration.png"
            alt="Get a Quote Illustration"
            className="w-full max-w-[500px] object-contain rounded-2xl"
            style={{ mixBlendMode: "multiply", opacity: 0.92 }}
          />
        </div>
      </div>
    </div>
  );
}