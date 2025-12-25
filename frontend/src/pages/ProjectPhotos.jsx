import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const projectDetails = {
  1: {
    title: "Saaligraama",
    images: [
      "/images/Konankunte/Konankunte_elevation.png",
      "/images/Konankunte/Konankunte_Outcome.png",
      "/images/Konankunte/Maindoor.png",
      "/images/Konankunte/KEntrance.png",
      "/images/Konankunte/KHall.png",
      "/images/Konankunte/KHall2.png",
      "/images/Konankunte/KHall3.png",
    ]
  },
  2: {
    title: "Kondenahalli",
    images: [
      "/images/Kondenahalli/KondenahalliElevation.jpg",
      "/images/Kondenahalli/Kondenahalli_after_construction.png",
      "/images/Kondenahalli/KondenahalliRoof.jpeg",
    ]
  },
  3: {
    title: "Ocean View",
    images: [
      "/images/rbi/RBI_ELEVATION.png",
      "/images/rbi/RBI_Building_outside.png",
      "/images/rbi/RBI_HALL.png",
      "/images/rbi/RBI_HALL2.png",
      "/images/rbi/RBI_Kitchen.png",
      "/images/rbi/RBI_HALL_ENTRANCE1.png",
      "/images/rbi/RBI_Bathroom.png",
      "/images/rbi/RBI_Bathroom2.png",
      "/images/rbi/RBI_Poojaroom.png",
      "/images/rbi/RBI_Poojaroom1.png",
    ]
  },
  4: {
    title: "Mountain Retreat",
    images: [
      "/images/mountainretreat1.jpg",
      "/images/mountainretreat2.jpg"
    ]
  }
};

export default function ProjectPhotos() {
  const { id } = useParams();
  const project = projectDetails[id];
  const [modalImg, setModalImg] = useState(null);

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
          <img
            src={modalImg}
            alt="Full Project"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
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
