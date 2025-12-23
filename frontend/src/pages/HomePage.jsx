import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import ReviewBanner from '../components/ReviewBanner';

const reviews = [
  {
    projectImage: "/images/skyline.jpg",
    text: "Excellent service and quality!",
    client: "Priya S.",
    email: "priya.s@example.com"
  },
  {
    projectImage: "/images/greenvalley.jpg",
    text: "On-time delivery and great support.",
    client: "Rahul K.",
    email: "rahul.k@example.com"
  },
  {
    projectImage: "/images/oceanview.jpg",
    text: "Highly recommend Gruha Vasthu!",
    client: "Anjali M.",
    email: "anjali.m@example.com"
  }
  // Add more as needed
];
const projects = [
  { id: 1, name: "Konankunte", location: "Konankunte", previewImage: "/images/skyline.jpg" },
  { id: 2, name: "Jayanagara", location: "Jayanagara", previewImage: "/images/greenvalley.jpg" },
  { id: 3, name: "RBI Layout", location: "RBI Layout", previewImage: "/images/oceanview.jpg" },
  { id: 4, name: "ITI Layout", location: "ITI Layout", previewImage: "/images/citylights.jpg" },
];

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900"
          style={{
            fontFamily: '"Plus Jakarta Sans", "Nunito Sans", system-ui, sans-serif'
          }}
        >
          Building Dreams, Creating Futures
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl font-inter">
          Discover our premium construction projects designed for modern living. Quality, trust, and innovation—your vision, our expertise.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>
      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900 font-inter">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <ReviewBanner reviews={reviews} animate={true} />
    </div>
  );
}

export default HomePage;