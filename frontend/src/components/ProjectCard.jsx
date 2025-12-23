import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform bg-white border border-gray-100"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={project.previewImage} alt={project.name} />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 via-transparent to-transparent w-full p-4 rounded-b-2xl">
          <h2 className="text-white font-bold text-lg" style={{ fontFamily: '"Plus Jakarta Sans", "Nunito Sans", system-ui, sans-serif' }}>{project.name}</h2>
          <p className="text-gray-200 text-sm">{project.location}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;