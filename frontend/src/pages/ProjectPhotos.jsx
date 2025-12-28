import { useParams, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import projectPhotoDetails from "../data/projectPhotoDetails";

export default function ProjectPhotos() {
  const { id } = useParams();
  const project = projectPhotoDetails[id];
  const [modalImg, setModalImg] = useState(null);
// Find the index of the current modal image
  const currentIndex = modalImg ? project?.images.indexOf(modalImg) : -1;

  // Keyboard navigation for modal
  useEffect(() => {
    if (!modalImg) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalImg(null);
      } else if (e.key === "ArrowRight") {
        if (currentIndex < project.images.length - 1) {
          setModalImg(project.images[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          setModalImg(project.images[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalImg, currentIndex, project?.images]);

  if (!project) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Project not found
      </p>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900">
            {project.title} – Photos
          </h1>
          <Link to={-1} className="text-blue-700 font-semibold hover:underline">
            ← Back
          </Link>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project Photo ${i + 1}`}
              className="rounded-2xl shadow-xl w-full h-[260px] object-cover hover:scale-105 transition cursor-pointer"
              onClick={() => setModalImg(img)}
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              className="absolute left-8 text-white text-4xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/80 transition"
              onClick={e => {
                e.stopPropagation();
                setModalImg(project.images[currentIndex - 1]);
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
          )}
          <img
            src={modalImg}
            alt="Full Project"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          {/* Right Arrow */}
          {currentIndex < project.images.length - 1 && (
            <button
              className="absolute right-8 text-white text-4xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/80 transition"
              onClick={e => {
                e.stopPropagation();
                setModalImg(project.images[currentIndex + 1]);
              }}
              aria-label="Next"
            >
              &#8594;
            </button>
          )}
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/80 transition"
            onClick={() => setModalImg(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}