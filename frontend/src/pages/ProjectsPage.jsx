import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaBuilding, FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* soft glows */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-orange-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-blue-600">Work</span> Portfolio
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of residential and commercial projects delivered with
            precision, Vasthu compliance, and long-term durability.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white/80 backdrop-blur-lg py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Stat
            icon={<FaBuilding />}
            label="60+ Projects Completed"
            gradient="from-blue-600 to-blue-500"
          />
          <Stat
            icon={<FaMapMarkedAlt />}
            label="Across Bengaluru"
            gradient="from-green-600 to-green-500"
          />
          <Stat
            icon={<FaCheckCircle />}
            label="100% Client Satisfaction"
            gradient="from-orange-600 to-orange-500"
          />
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ icon, label, gradient }) {
  return (
    <div
      className="
        bg-white/90 backdrop-blur-md
        rounded-2xl p-10
        shadow-xl border border-blue-100
        hover:-translate-y-1 hover:shadow-2xl transition
        text-center
      "
    >
      <div className="flex justify-center mb-6">
        <div
          className={`
            w-16 h-16 rounded-xl
            bg-gradient-to-br ${gradient}
            flex items-center justify-center
            text-white text-3xl
            shadow-md
          `}
        >
          {icon}
        </div>
      </div>

      <p className="font-semibold text-blue-900 text-lg">
        {label}
      </p>
    </div>
  );
}
