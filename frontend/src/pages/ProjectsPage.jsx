import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaBuilding, FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 text-center pt-20">
        <h1 className="text-5xl font-extrabold mb-4">Our Work Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of residential and commercial projects delivered with
          precision, Vasthu compliance, and long-term durability.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-white/80 backdrop-blur-lg py-12 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Stat icon={<FaBuilding />} label="60+ Projects Completed" />
          <Stat icon={<FaMapMarkedAlt />} label="Across Bengaluru" />
          <Stat icon={<FaCheckCircle />} label="100% Client Satisfaction" />
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

    </div>
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
