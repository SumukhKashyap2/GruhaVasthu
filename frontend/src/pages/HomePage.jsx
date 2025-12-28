import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ReviewBanner from "../components/ReviewBanner";
import { FaHammer, FaHome, FaClock, FaCompass } from "react-icons/fa";
import projects from "../data/projects";
import reviews from "../data/reviews";

export default function HomePage() {
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Soft glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Building <span className="text-blue-600">Dreams</span>,<br />
              Creating <span className="text-orange-500">Futures</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-10">
              Premium residential and commercial construction delivered with
              precision, Vasthu compliance, and over 25 years of trust.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                Get in Touch
              </Link>

              <Link
                to="#projects"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold border shadow hover:bg-blue-50 transition"
              >
                View Our Projects
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <TrustDot color="bg-green-500" text="25+ Years Experience" />
              <TrustDot color="bg-blue-500" text="Vasthu Compliant" />
              <TrustDot color="bg-orange-500" text="Turnkey Projects" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center">
            <div className="hero-image-mask">
              <img
                src="/images/hero-building.png"
                alt="Modern Home Construction"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 text-3xl animate-bounce">
          ↓
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="bg-white/80 backdrop-blur-lg py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <Stat icon={<FaClock />} label="25+ Years Experience" />
          <Stat icon={<FaHome />} label="120+ Projects Delivered" />
          <Stat icon={<FaCompass />} label="100% Vasthu Compliance" />
          <Stat icon={<FaHammer />} label="On-Time Delivery" />
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-4">Our Projects</h2>
            <p className="text-gray-600">
              Residential & Commercial excellence across Bengaluru
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/projects"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

{/* ================= HOW WE WORK ================= */}
<section className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative">

    {/* Header */}
    <div className="text-center mb-24">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
        How We Work
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A simple, transparent, and proven process that ensures quality,
        Vasthu compliance, and on-time delivery.
      </p>
    </div>

    {/* LEFT IMAGE */}
    <img
      src="/images/civil-engineer.png"
      alt="Civil Engineer"
      className="
        hidden md:block
        absolute
        left-0
        bottom-10
        w-[280px]
        object-contain
        drop-shadow-xl
      "
    />

    {/* RIGHT IMAGE */}
    <img
      src="/images/painter.png"
      alt="Painter at Work"
      className="
        hidden md:block
        absolute
        right-0
        bottom-10
        w-[280px]
        object-contain
        drop-shadow-xl
      "
    />

    {/* CENTER CARDS */}
    <div className="flex justify-center gap-12 relative z-10">
      <ProcessCard
        step="01"
        title="Plan"
        text="Understand requirements, site conditions, and Vasthu principles."
      />
      <ProcessCard
        step="02"
        title="Build"
        text="Execute construction with skilled teams and quality materials."
      />
      <ProcessCard
        step="03"
        title="Deliver"
        text="Timely handover with finishing, compliance checks, and peace of mind."
      />
    </div>

  </div>
</section>


{/* ================= REVIEWS ================= */}
<section className="relative py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
    {/* LEFT – Character */}
    <div className="hidden md:flex justify-center items-center">
      <img
        src="/images/reviews-guide.png"
        alt="Happy client guide"
        className="w-[480px] lg:w-[600px] drop-shadow-2xl"
      />
    </div>
    {/* RIGHT – Reviews */}
    <div className="md:col-span-2 flex flex-col">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-2 text-center md:text-left">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 max-w-xl mb-10 text-center md:text-left">
        Real experiences from homeowners who trusted us with their dream projects.
      </p>
      <ReviewBanner reviews={reviews} />
    </div>
  </div>
</section>
</div>
  )}


/* ---------------- COMPONENTS ---------------- */

function TrustDot({ color, text }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {text}
    </span>
  );
}

function Stat({ icon, label }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border">
      <div className="text-blue-600 text-4xl mb-4 flex justify-center">{icon}</div>
      <p className="font-semibold text-blue-900">{label}</p>
    </div>
  );
}

function ProcessCard({ step, title, text }) {
  return (
    <div
      className="
        bg-white
        w-[260px]
        h-[260px]
        rounded-2xl
        shadow-xl
        border
        hover:shadow-2xl
        transition
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >
      <div className="text-blue-600 font-extrabold text-5xl mb-4">
        {step}
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}



