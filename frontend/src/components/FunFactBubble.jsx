// import { useState } from "react";
// export default function FunFactBubble() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed top-50 right-6 z-50">
//       <div
//         className="relative"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//       >
//         {/* 💭 Icon */}
//         <button
//           onClick={() => setOpen(prev => !prev)}
//           className="
//             w-12 h-12
//             rounded-full
//             bg-white
//             border border-blue-200
//             shadow-lg
//             flex items-center justify-center
//             text-xl
//             hover:bg-blue-50
//             transition
//           "
//           aria-label="Fun fact"
//         >
//           🤔💭
//         </button>

//         {/* Tooltip / Card */}
//         <div
//           className={`
//             absolute top-16 right-0
//             w-[300px]
//             transform transition-all duration-300
//             ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
//           `}
//         >
//           <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5 text-sm text-gray-700">
//             <p className="leading-relaxed">
//               We’ve completed{" "}
//               <span className="font-bold text-blue-700">60+ projects</span> over{" "}
//               <span className="font-bold text-blue-700">25 years</span> —
//               averaging{" "}
//               <span className="font-bold text-orange-600">
//                 2.4 quality projects every year
//               </span>,
//               delivered with consistency and care.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function FunFactBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 translate-y-24 z-50">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* 💭 Bubble Icon */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="
            w-12 h-12
            rounded-full
            bg-white/90 backdrop-blur-md
            border border-blue-200
            shadow-lg
            flex items-center justify-center
            text-xl
            hover:bg-blue-50
            transition
          "
          aria-label="Did you know?"
        >
         🤔
        </button>

        {/* Popover */}
        <div
          className={`
            absolute right-14 top-1/2 -translate-y-1/2
            w-[320px]
            transition-all duration-300
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5 text-sm text-gray-700">
            <p className="leading-relaxed">
              We’ve completed{" "}
              <span className="font-bold text-blue-700">60+ projects</span> over{" "}
              <span className="font-bold text-blue-700">25 years</span> —
              averaging{" "}
              <span className="font-bold text-orange-600">
                2.4 quality projects every year
              </span>,
              delivered with consistency and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

