// src/pages/ContactPage.jsx
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
  <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
    <h2
      className="text-3xl font-extrabold text-blue-800 mb-2"
      style={{
        fontFamily: '"Plus Jakarta Sans", "Nunito Sans", system-ui, sans-serif'
      }}
    >
      Get in Touch with Us
    </h2>
    <p className="text-gray-600 mb-6 font-inter">
      Please fill out the form below and our team will contact you as soon as possible.
    </p>
<form onSubmit={handleSubmit} className="space-y-4">
  <div className="relative">
    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full border rounded-lg p-3 pl-10"
    />
  </div>
  <div className="relative">
    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full border rounded-lg p-3 pl-10"
    />
  </div>
  <div className="relative">
    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="tel"
      name="phone number"
      placeholder="Your Phone Number"
      required
      className="w-full border rounded-lg p-3 pl-10"
    />
  </div>
  <div className="relative">
    <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
    <textarea
      name="Place of Construction"
      placeholder="Place of Construction"
      required
      className="w-full border rounded-lg p-3 pl-10"
    />
  </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 font-inter"
        >
          Submit your details
        </button>
        </form>

        {status === "SUCCESS" && (
          <p className="text-green-600 mt-4">Thanks! Your message has been sent.
          we'll get back to you soon!</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 mt-4">Oops! Something went wrong.</p>
        )}
      </div>
    </div>
    
  );
}
