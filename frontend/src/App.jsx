import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
     <footer className="text-center py-8 text-gray-500 text-base font-inter border-t border-gray-200 bg-white">
      &copy; {new Date().getFullYear()} Gruha Vasthu. All rights reserved.
    </footer>
    </Router>
  );
}

export default App;
