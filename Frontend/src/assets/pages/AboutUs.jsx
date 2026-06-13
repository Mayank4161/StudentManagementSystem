import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        About Us
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Learn more about our Student Management System
      </p>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-500">
            Who We Are
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            We are a simple and efficient Student Management System designed to
            help schools and colleges manage student data easily. Our platform
            allows you to add, update, and track student records in one place.
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Our goal is to make student data management fast, reliable, and
            user-friendly for everyone.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div className="bg-gray-100 rounded-lg p-10 text-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            System Overview
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Add an image or dashboard screenshot here
          </p>
        </div>

      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="text-blue-500 font-semibold">Easy to Use</h3>
          <p className="text-gray-600 text-sm mt-2">
            Simple interface for managing students
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="text-green-500 font-semibold">Fast Performance</h3>
          <p className="text-gray-600 text-sm mt-2">
            Quick data handling and updates
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="text-purple-500 font-semibold">Secure Data</h3>
          <p className="text-gray-600 text-sm mt-2">
            Safe and reliable student records
          </p>
        </div>

      </div>

    </div>
  );
};

export default AboutUs;