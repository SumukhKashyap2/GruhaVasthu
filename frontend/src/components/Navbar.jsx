import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  // Handle keyboard navigation for hamburger menu
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') setOpen(!open);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center font-inter transition-all">
      {/* Logo + Company Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Gruha Vasthu Logo"
          className="h-16 w-14 object-cover bg-white rounded-lg"
          style={{ objectPosition: 'center' }}
        />
        <NavLink
          to="/"
          className="font-bold text-2xl text-gray-900 tracking-tight focus:outline-none"
          style={{
            fontFamily: '"Plus Jakarta Sans", "Nunito Sans", system-ui, sans-serif'
          }}
        >
          Gruha Vasthu
        </NavLink>
      </div>
      {/* Desktop Links + CTA */}
      <div className="hidden md:flex items-center gap-6">
        <NavLink to="/" className="hover:text-blue-700">
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Get Quote
        </NavLink>
      </div>
      {/* Hamburger Menu */}
      <button
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>
      {/* Mobile Menu Slide Down */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 top-16 w-full bg-white shadow-lg transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden flex flex-col items-center`}
        role="menu"
        aria-label="Mobile Navigation"
      >
        <NavLink
          to="/"
          className="w-full text-center py-3 text-lg transition-colors duration-200 focus:outline-none text-gray-700 hover:text-blue-700"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          role="menuitem"
        >
          Home
        </NavLink>
        {/* CTA in mobile menu */}
        <NavLink
          to="/contact"
          className="w-11/12 my-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition text-center"
          onClick={() => setOpen(false)}
          role="menuitem"
          tabIndex={open ? 0 : -1}
        >
          Get Quote
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;