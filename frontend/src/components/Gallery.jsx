import React from 'react';

function Gallery({ images, videoUrl }) {
  return (
    <div className="space-y-6">
      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
            <img
        key={idx}
        src={img}
        alt={`Image ${idx + 1}`}
        className="w-full h-48 object-cover rounded-xl shadow border border-gray-200"
          />
        ))}
      </div>

      {/* YouTube Video */}
     {videoUrl && (
  <div className="mt-4 aspect-video">
    <iframe
      className="w-full h-full rounded shadow"
      src={videoUrl}
      title="Project Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
)}

    </div>
  );
}

export default Gallery;
