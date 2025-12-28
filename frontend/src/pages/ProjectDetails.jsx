import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaHome,
  FaRulerCombined,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaYoutube
} from "react-icons/fa";
import projectReviews from '../data/projectReviews';
import projectDetails from '../data/projectDetails';

/* ------------------ Highlight Cards ------------------ */
function ProjectHighlights({ area, location, type, Vasthu, year }) {
  const items = [
    {
      label: "Builtup Area",
      value: area,
      icon: <FaRulerCombined />,
      bg: "from-blue-500 to-blue-400"
    },
    {
      label: "Location",
      value: location,
      icon: <FaMapMarkerAlt />,
      bg: "from-green-500 to-green-400"
    },
    {
      label: "Type",
      value: type,
      icon: <FaHome />,
      bg: "from-orange-500 to-orange-400"
    },
    {
      label: "Vasthu",
      value: Vasthu,
      icon: Vasthu === "Yes" ? <FaCheckCircle /> : <FaTimesCircle />,
      bg: Vasthu === "Yes"
        ? "from-green-500 to-green-400"
        : "from-red-500 to-red-400"
    },
    {
      label: "Project Completed In",
      value: year,
      icon: <FaCalendarAlt />,
      bg: "from-yellow-500 to-yellow-400"
    }
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-12 mb-16">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            bg-white/90 backdrop-blur-md
            rounded-2xl p-6
            shadow-lg border border-blue-100
            flex flex-col items-center text-center
            hover:shadow-2xl hover:-translate-y-1 transition
          "
        >
          {/* ICON */}
          <div
            className={`
              w-12 h-12 rounded-xl mb-3
              bg-gradient-to-br ${item.bg}
              flex items-center justify-center
              text-white text-xl shadow-md
            `}
          >
            {item.icon}
          </div>

          <span className="text-xs text-gray-500">{item.label}</span>
          <span className="font-bold text-blue-900">{item.value}</span>
        </div>
      ))}
    </section>
  );
}

/* ------------------ Divider ------------------ */
function SectionDivider() {
  return (
    <div className="relative my-16">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-blue-100"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white px-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Review ------------------ */
function DescriptiveReview({ review }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-100 max-w-3xl mx-auto">
      <p className="text-gray-700 text-lg italic text-center mb-8">
        <span className="text-3xl text-blue-300 mr-2">“</span>
        {review.text}
        <span className="text-3xl text-blue-300 ml-2">”</span>
      </p>
      <div className="text-center">
        <span className="text-blue-900 font-bold text-lg">{review.client}</span>
        <span className="block text-gray-500 text-sm">{review.location}</span>
      </div>
    </div>
  );
}

/* ------------------ Main Page ------------------ */
function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];
  const review = projectReviews[id]?.[0];

  if (!project) {
    return <p className="text-center mt-10 text-red-600">Project not found</p>;
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm mb-6">
          <Link to="/" className="text-blue-700 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Project Details</span>
        </nav>
      </div>

      {/* HERO BANNER (FIXED) */}
      <div className="container mx-auto px-4">
        <div className="
          relative mb-16 rounded-3xl overflow-hidden
          shadow-[0_25px_60px_rgba(59,130,246,0.35)]
        ">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          <div className="relative py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-blue-50">{project.location}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 pb-16 max-w-6xl">

        <ProjectHighlights
          area={project.area}
          location={project.location}
          type={project.type}
          Vasthu={project.Vasthu}
          year={project.year}
        />

        <SectionDivider />

        {/* OVERVIEW */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 mb-16 relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-l-2xl" />
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <FaHome className="text-blue-400" /> Project Overview
          </h2>
          <p className="text-gray-700 text-lg">{project.overview}</p>
        </section>

        {/* IMAGE */}
        <div className="flex justify-center mb-20">
          <img
            src={project.images[0]}
            alt="Project"
            className="rounded-3xl w-full max-w-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* VIDEO */}
        <div className="flex justify-center mb-20">
          {project.videoUrl ? (
            <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-xl">
              <iframe className="w-full h-full" src={project.videoUrl} title="Project Video" />
            </div>
          ) : (
            <div className="h-64 w-full max-w-3xl flex flex-col items-center justify-center rounded-3xl bg-blue-100">
              <FaYoutube className="text-5xl text-red-400 mb-2" />
              <span className="text-blue-700 font-semibold">Video coming soon</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-20">
          <button
            onClick={() => navigate(`/projects/${id}/photos`)}
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 transition"
          >
            See more photos of the project
          </button>
        </div>

        {review && (
          <>
            <SectionDivider />
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
              What Our Client Says
            </h2>
            <DescriptiveReview review={review} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
