import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center font-inter">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        <Link
          to="/"
          className="font-bold text-2xl text-gray-900 tracking-tight"
          style={{
            fontFamily: '"Plus Jakarta Sans", "Nunito Sans", system-ui, sans-serif'
          }}
        >
          Gruha Vasthu
        </Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;