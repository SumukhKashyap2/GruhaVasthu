import { FaStar, FaQuoteLeft } from "react-icons/fa";
export default function ReviewBanner({ reviews }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="text-3xl font-extrabold text-center mb-12">
          What Our Clients Say
        </h2> */}

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-8 border hover:scale-105 transition"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
              <p className="italic text-gray-700 mb-6">"{r.text}"</p>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="font-bold text-blue-900">{r.client}</p>
              <p className="text-sm text-gray-500">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
