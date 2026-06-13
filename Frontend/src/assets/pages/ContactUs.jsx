import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Have questions? Feel free to reach out to us.
      </p>

      {/* Contact Card */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6 md:p-10">

        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-8 text-gray-600 text-sm">
        📧 support@sms.com | 📞 +91 98765 43210
      </div>

    </div>
  );
};

export default ContactUs;