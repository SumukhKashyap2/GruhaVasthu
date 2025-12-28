import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPhotos from "./pages/ProjectPhotos";
import FunFactBubble from "./components/FunFactBubble";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="pt-20 flex flex-col">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/project/:id"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <ProjectDetails />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <ContactPage />
              </motion.div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id/photos" element={<ProjectPhotos />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-blue-900 mb-2">About Gruha Vasthu</h3>
          <p className="text-base mb-4">
            Gruha Vasthu is a leading construction company in Bengaluru, delivering residential and commercial projects with precision, trust, and innovation for over 25 years. Our commitment to quality and vasthu compliance sets us apart.
          </p>
          <div className="flex gap-4 mt-2">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-blue-600 hover:text-blue-800 text-xl transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:text-pink-700 text-xl transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-blue-700 hover:text-blue-900 text-xl transition" />
            </a> */}
            <a href="https://www.youtube.com/@GruhaVasthu" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube className="text-red-600 hover:text-red-800 text-xl transition" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Our Services</h4>
          <ul className="space-y-2 text-base">
            <li>Residential Construction</li>
            <li>Commercial Construction</li>
            <li>Turnkey Projects</li>
            <li>Vasthu Consultation</li>
            <li>Remodelling</li>
            <li>Interiors</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Contact & Location</h4>
          <div className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <span>
              Rajajinagara,<br />
              Bengaluru - 560010<br />
              Karnataka, India
            </span>
          </div>
            <div className="mt-2 flex flex-col gap-2 text-base">
              <a
                href="tel:+918861095921"
                className="flex items-center gap-2 hover:underline"
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp Us
              </a>

              <a
                href="mailto:vasthugruha2002@gmail.com"
                className="flex items-center gap-2 hover:underline"
              >
                <SiGmail className="text-red-500" />
                Email Us
              </a>
            </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Gruha Vasthu. All rights reserved.
      </div>
    </footer>
  );
}

function AppLayout() {
  const location = useLocation();

  const showFunFact =
    location.pathname === "/projects";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedRoutes />
      {showFunFact && <FunFactBubble />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}
