import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReviewBanner from '../components/ReviewBanner';

const projectReviews = {
  1: [
    {
      projectImage: "/images/skyline.jpg",
      text: "Excellent service and quality!",
      client: "Priya S.",
      location: "Bangalore"
    }
  ],
  2: [
    {
      projectImage: "/images/greenvalley.jpg",
      text: "Great support and timely delivery.",
      client: "Pramod",
      location: "Jayanagara"
    }
  ],
  3: [
    {
      projectImage: "/images/oceanview.jpg",
      text: "Beautiful design and finish.",
      client: "Manjunath",
      location: "RBI Layout"
    }
  ],
  4: [
    {
      projectImage: "/images/mountainretreat1.jpg",
      text: "Loved the Vasthu compliance!",
      client: "Hegde",
      location: "ITI Layout"
    }
  ]
};

const projectDetails = {
  1: {
    title: "Saaligraama",
    location: "Konankunte, Bangalore",
    area: "2000 sq.ft.",
    type: "Residential",
    Vasthu: "Yes",
    overview: "Saaligraama is a landmark residential project in Konankunte, designed to blend modern architecture with Vasthu principles. The project features spacious apartments, lush landscaping, and premium amenities for families seeking comfort and convenience.",
    approach: [
      "Collaborative design sessions with the client to understand their vision.",
      "Integrated Vasthu compliance into every stage of planning and execution.",
      "Used sustainable materials and smart construction techniques for durability."
    ],
    challenges: "The site had uneven terrain and strict municipal guidelines. Our team overcame these by using advanced surveying and modular construction, ensuring timely delivery and full compliance.",
    images: [
      "/images/Konankunte/Konankunte_elevation.png"
    ],
    videoUrl: "https://www.youtube.com/embed/B9HCH2xKSJc?si=pN2kolxMMaFPF76G"
  },
  2: {
    title: "Kondenahalli",
    location: "Chikkaballapura",
    area: "2400 sq.ft.",
    type: "Residential",
    Vasthu: "Yes",
    overview: "Green Valley is a serene residential enclave in Jayanagara, offering eco-friendly homes with contemporary design. The project emphasizes natural light, ventilation, and green spaces.",
    approach: [
      "Focused on maximizing natural light and airflow.",
      "Employed energy-efficient building methods.",
      "Maintained close communication with stakeholders throughout."
    ],
    challenges: "Limited plot size required creative space management. We used multi-functional layouts and vertical landscaping to optimize every square foot.",
    images: [
      "/images/Kondenahalli/KondenahalliElevation.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  },
  3: {
    title: "Ocean View",
    location: "RBI Layout, Bangalore",
    area: "1200 sq.ft.",
    type: "Commercial",
    Vasthu: "No",
    overview: "Ocean View is a premium commercial project in RBI Layout, designed for modern businesses. The building features open-plan offices, advanced security, and ample parking.",
    approach: [
      "Developed flexible office spaces for diverse business needs.",
      "Integrated smart security and automation systems.",
      "Ensured accessibility and compliance with commercial standards."
    ],
    challenges: "Tight deadlines and high client expectations. We adopted agile project management and regular progress reviews to stay on track.",
    images: [
      "/images/rbi/RBI_ELEVATION.png",
      "/images/rbi/RBI_HALL.png"
    ],
    videoUrl: "https://www.youtube.com/embed/sV3tuGV3P1Y?si=Lh9KCXuvjKmOB6zy"
  },
  4: {
    title: "Mountain Retreat",
    location: "ITI Layout, Bangalore",
    area: "1200 sq.ft.",
    type: "Residential",
    Vasthu: "Yes",
    overview: "Mountain Retreat is a tranquil residential project in ITI Layout, inspired by nature. The homes offer panoramic views and peaceful surroundings.",
    approach: [
      "Designed homes to maximize views and privacy.",
      "Used natural materials for harmony with the environment.",
      "Prioritized energy efficiency and low maintenance."
    ],
    challenges: "Remote location and logistics. We coordinated closely with suppliers and used prefabricated elements to streamline construction.",
    images: [
      "/images/mountainretreat1.jpg",
      "/images/mountainretreat2.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  }
};

function ProjectHighlights({ area, location, type, Vasthu }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-10">
      <div className="bg-white/80 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <span className="text-xs text-gray-500">Area</span>
        <span className="font-bold text-blue-900">{area}</span>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <span className="text-xs text-gray-500">Location</span>
        <span className="font-bold text-blue-900">{location}</span>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <span className="text-xs text-gray-500">Type</span>
        <span className="font-bold text-blue-900">{type}</span>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
        <span className="text-xs text-gray-500">Vasthu</span>
        <span className={`font-bold ${Vasthu === "Yes" ? "text-green-600" : "text-red-600"}`}>{Vasthu}</span>
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
            <h1 className="text-4xl font-extrabold text-blue-900 font-inter">{project.title}</h1>
            <p className="text-lg text-gray-500 mt-2">{project.location}</p>
          </div>
          {/* Highlights */}
          <ProjectHighlights
            area={project.area}
            location={project.location}
            type={project.type}
            Vasthu={project.Vasthu}
          />
          <SectionDivider />
          {/* Project Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Project Overview</h2>
            <p className="text-gray-700 text-base leading-relaxed">{project.overview}</p>
          </section>
          <SectionDivider />
          {/* Our Approach */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Approach</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {project.approach.map((step, idx) => (
                <li key={idx} className="pl-2">{step}</li>
              ))}
            </ol>
          </section>
          <SectionDivider />
          {/* Challenges & Solutions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Challenges & Solutions</h2>
            <p className="text-gray-700 text-base leading-relaxed">{project.challenges}</p>
          </section>
          <SectionDivider />
          {/* Main Project Image */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src={project.images[0]}
              alt="Main Project"
              className="rounded-2xl w-full max-w-xl object-cover mb-4"
            />
          </div>
          {/* Video Section */}
          {project.videoUrl && (
            <div className="flex justify-center mb-10 animate-fade-in">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden bg-white aspect-video">
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
            </div>
          )}
          {/* See More Photos Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => navigate(`/projects/${id}/photos`)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform"
            >
              See more photos of the project
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <SectionDivider />
      {/* Reviews */}
 {/* Reviews */}
<section className="container mx-auto px-4 pb-12">
  <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">What Our Client Says</h2>
  <DescriptiveReview review={projectReviews[id]?.[0]} />
</section>
    </div>
  );
}
function DescriptiveReview({ review }) {
  if (!review) return null;
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-8">
      <img
        src={review.projectImage}
        alt={review.client}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-lg mb-4 md:mb-0"
      />
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-900 font-bold text-lg">{review.client}</span>
          <span className="text-gray-500 text-sm">({review.location})</span>
        </div>
        <p className="text-gray-700 text-base leading-relaxed italic">
          <span className="text-3xl text-blue-300 align-top mr-2">“</span>
          {review.text}
          <span className="text-3xl text-blue-300 align-bottom ml-2">”</span>
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;