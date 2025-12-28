import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReviewBanner from '../components/ReviewBanner';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaYoutube } from "react-icons/fa";
import projectReviews from '../data/projectReviews';
import projectDetails from '../data/projectDetails';

function ProjectHighlights({ area, location, type, Vasthu, year }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8 mb-10">
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <FaRulerCombined className="text-blue-600 text-2xl mb-1" />
        <span className="text-xs text-gray-500">Builtup Area</span>
        <span className="font-bold text-blue-900">{area}</span>
      </div>
      <div className="bg-gradient-to-br from-green-100 to-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <FaMapMarkerAlt className="text-green-600 text-2xl mb-1" />
        <span className="text-xs text-gray-500">Location</span>
        <span className="font-bold text-blue-900">{location}</span>
      </div>
      <div className="bg-gradient-to-br from-orange-100 to-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <FaHome className="text-orange-500 text-2xl mb-1" />
        <span className="text-xs text-gray-500">Type</span>
        <span className="font-bold text-blue-900">{type}</span>
      </div>
      <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        {Vasthu === "Yes" ? (
          <FaCheckCircle className="text-green-600 text-2xl mb-1" />
        ) : (
          <FaTimesCircle className="text-red-600 text-2xl mb-1" />
        )}
        <span className="text-xs text-gray-500">Vasthu</span>
        <span className={`font-bold ${Vasthu === "Yes" ? "text-green-600" : "text-red-600"}`}>{Vasthu}</span>
      </div>
      <div className="bg-gradient-to-br from-yellow-100 to-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <FaCalendarAlt className="text-yellow-500 text-2xl mb-1" />
        <span className="text-xs text-gray-500">Year</span>
        <span className="font-bold text-blue-900">{year}</span>
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-orange-100 to-blue-200 opacity-60 my-8 rounded-full"></div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];
  const review = projectReviews[id]?.[0];

  if (!project) return (
    <p className="text-center mt-10 text-red-600 font-semibold">
      Project not found
    </p>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm mb-4 font-inter">
          <Link to="/" className="text-blue-700 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Project Details</span>
        </nav>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-5xl mx-auto animate-fade-in">
          {/* Project Title & Location */}
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-extrabold text-blue-900 font-inter drop-shadow-lg">{project.title}</h1>
            <p className="text-lg text-gray-500 mt-2 flex items-center justify-center gap-2">
              {/* <FaMapMarkerAlt className="text-blue-400" /> {project.location} */}
            </p>
          </div>
          {/* Highlights */}
          <ProjectHighlights
            area={project.area}
            location={project.location}
            type={project.type}
            Vasthu={project.Vasthu}
            year={project.year}
          />
          <SectionDivider />
          {/* Project Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <FaHome className="text-blue-400" /> Project Overview
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">{project.overview}</p>
          </section>
          <SectionDivider />
          {/* Main Project Image */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src={project.images[0]}
              alt="Main Project"
              className="rounded-2xl w-full max-w-xl object-cover mb-4 shadow-2xl border-4 border-blue-100"
            />
          </div>
          {/* Video Section */}
          <div className="flex justify-center mb-10 animate-fade-in">
            {project.videoUrl ? (
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden bg-white aspect-video shadow-lg border-2 border-blue-100">
                <iframe
                  className="w-full h-full"
                  src={project.videoUrl}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full max-w-3xl h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-dashed border-blue-200 shadow-inner">
                <FaYoutube className="text-5xl text-red-400 mb-2" />
                <span className="text-blue-700 font-semibold text-lg">Project video coming soon!</span>
              </div>
            )}
          </div>
          {/* See More Photos Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => navigate(`/projects/${id}/photos`)}
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform"
            >
              See more photos of the project
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <SectionDivider />
      {/* Reviews */}
      {review && (
        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">What Our Client Says</h2>
          <DescriptiveReview review={review} />
        </section>
      )}
    </div>
  );
}

function DescriptiveReview({ review }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mt-8 border border-blue-100 relative">
      <p className="text-gray-700 text-base leading-relaxed italic text-center mb-8">
        <span className="text-3xl text-blue-300 align-top mr-2">“</span>
        {review.text}
        <span className="text-3xl text-blue-300 align-bottom ml-2">”</span>
      </p>
      <div className="absolute bottom-6 right-8 flex items-center gap-2">
        <span className="text-blue-900 font-bold text-lg">{review.client}</span>
        <span className="text-gray-500 text-sm">({review.location})</span>
      </div>
    </div>
  );
}

export default ProjectDetails;