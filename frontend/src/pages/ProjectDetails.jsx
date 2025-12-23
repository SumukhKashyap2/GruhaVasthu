import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ReviewBanner from '../components/ReviewBanner';

const projectReviews = {
  1: [
    {
      projectImage: "/images/skyline.jpg",
      text: "Excellent service and quality!",
      client: "Priya S.",
      email: "priya.s@example.com"
    }
  ],
  // ...other project reviews...
};
const projectDetails = {
  1: {
    images: ["/images/skyline1.jpg","/images/skyline2.jpg","/images/skyline3.jpg","/images/skyline4.jpg"],
    videoUrl: "https://www.youtube.com/embed/B9HCH2xKSJc?si=pN2kolxMMaFPF76G"
  },
  2: {
    images: ["/images/greenvalley1.jpg","/images/greenvalley2.jpg"],
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  },
  3: {
    images: ["/images/oceanview1.jpg","/images/oceanview2.jpg"],
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  } ,
  4:{
    images: ["/images/mountainretreat1.jpg","/images/mountainretreat2.jpg"],
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  }
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p className="text-center mt-10 text-red-600 font-semibold">Project not found</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Project Gallery</h1>
        <Gallery images={project.images} videoUrl={project.videoUrl} />
      </div>
       <ReviewBanner reviews={projectReviews[id] || []} animate={false} />
    </div>
  );
}

export default ProjectDetails;
