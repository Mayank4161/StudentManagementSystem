import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "hover:text-blue-400 transition";

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-white font-bold text-xl">
              StudentMS
            </h2>
            <p className="text-sm mt-2">
              Manage students easily and efficiently with modern UI.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-2">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/students" className={linkClass}>
                  Students
                </NavLink>
              </li>

              <li>
                <NavLink to="/aboutUs" className={linkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contactUs" className={linkClass}>
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-2">
              Contact
            </h3>

            <p className="text-sm">support@sms.com</p>
            <p className="text-sm">+91 1800 1800 201</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} StudentMS. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;