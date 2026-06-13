import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400 transition";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
          StudentMS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm items-center">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/aboutUs" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contactUs" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/students" className={linkClass}>
            Students
          </NavLink>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-gray-800">

          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/aboutUs" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contactUs" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          <NavLink to="/students" className={linkClass} onClick={() => setOpen(false)}>
            Students
          </NavLink>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;