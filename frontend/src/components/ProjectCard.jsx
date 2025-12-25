import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl shadow-2xl hover:shadow-blue-200 border hover:scale-105 transition cursor-pointer overflow-hidden relative"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <img
        src={project.previewImage}
        alt={project.name}
        className="w-full h-56 object-cover"
      />
      {/* Overlay for better text visibility */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.name}</h3>
        <p className="text-sm text-blue-100 font-semibold drop-shadow">{project.location}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
