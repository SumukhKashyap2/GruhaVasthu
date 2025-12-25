import React, { useState } from 'react';

function Gallery({ images, videoUrl }) {
  const [lightbox, setLightbox] = useState({ open: false, img: null });

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white group transition focus:outline-none"
            onClick={() => setLightbox({ open: true, img })}
            aria-label={`Open image ${idx + 1} in lightbox`}
          >
            <img
              src={img}
              alt={`Project Image ${idx + 1}`}
              className="w-full h-56 object-cover transform group-hover:scale-105 group-hover:shadow-2xl transition duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition"
          onClick={() => setLightbox({ open: false, img: null })}
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow focus:outline-none"
              onClick={() => setLightbox({ open: false, img: null })}
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={lightbox.img}
              alt="Enlarged project"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl transition"
            />
          </div>
        </div>
      )}

      {/* YouTube Video */}
      {videoUrl && (
        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl shadow-xl border border-blue-100 overflow-hidden bg-white aspect-video transition">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;