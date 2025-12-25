import { FaPhone, FaEnvelope, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-orange-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-0 px-4 py-20 items-center">
        {/* LEFT: Heading on top center */}
        <div className="lg:col-span-12 flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center">
            Let’s Build Something Exceptional
          </h2>
        </div>
        {/* MIDDLE: Features, Form, Reassurance, Contact */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Features Row */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full mb-10">
            <div className="flex items-center gap-2 bg-white/80 rounded-xl px-6 py-4 shadow">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="font-semibold text-gray-700">25+ years of construction expertise</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-xl px-6 py-4 shadow">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="font-semibold text-gray-700">Complete turnkey solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-xl px-6 py-4 shadow">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="font-semibold text-gray-700">Vasthu-compliant designs</span>
            </div>
          </div>
          {/* Contact Form */}
          <form className="bg-white rounded-3xl shadow-xl p-10 space-y-6 w-full max-w-lg mx-auto">
            <input
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Email"
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Phone"
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Project Location & Requirements"
              className="w-full border p-4 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:scale-105 transition">
              Request a Callback
            </button>
          </form>
          {/* Reassurance */}
          <p className="text-gray-600 mt-6 text-center">
            We typically respond within <b>24 hours</b>.
          </p>
         {/* Contact Info Section */}
        <div className="flex flex-col items-center w-full max-w-lg mx-auto mt-8">
          <span className="text-base text-gray-700 mb-2 text-center w-full">
            You can also reach out to us at:
          </span>
          <div className="flex flex-col gap-2 text-blue-800 font-semibold text-lg w-full items-center">
            <span className="flex items-center gap-2">
              <FaPhone className="text-blue-600" /> +91 79752 59383
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> vasthugruha2002@gmail.com
            </span>
          </div>
        </div>
        </div>
        {/* RIGHT: Blended Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0">
          <img
            src="/images/get-quote-illustration.png"
            alt="Get a Quote Illustration"
            className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
            style={{
              minHeight: "340px",
              mixBlendMode: "multiply",
              opacity: 0.92,
              filter: "blur(0.5px) brightness(1.08)"
            }}
          />
        </div>
      </div>
    </div>
  );
}