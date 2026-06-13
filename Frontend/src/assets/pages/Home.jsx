import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center py-10 px-4">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
        Welcome to Student Management System
      </h1>

      {/* Sub text */}
      <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
        Easily manage student records, add new students, update details, and
        keep everything organized in one place. This system helps you track
        student data efficiently and quickly.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-500">
            Add Students
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Quickly add new student records with complete details.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-500">
            Manage Data
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Edit or update student information anytime easily.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-500">
            Track Records
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Keep all student records organized and accessible.
          </p>
        </div>

      </div>

      {/* Button */}
      <button onClick={()=>navigate("/students")} className="mt-10 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>

    </div>
  );
};

export default Home;