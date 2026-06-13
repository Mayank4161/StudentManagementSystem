import React, { useState, useEffect } from "react";
import API from "../services/api";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  // GET
  const getStudents = async () => {
    try {
      setFetching(true);
      const res = await API.get("/api/student");
      setStudents(res.data);
    } catch (error) {
      setMessage("Failed to load students");
      setIsError(true);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // VALIDATION
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s.'-]+$/;

    const name = form.name.trim();
    const email = form.email.trim();
    const course = form.course.trim();
    const age = form.age;

    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (name.length > 50) {
      newErrors.name = "Name must be under 50 characters";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!course) {
      newErrors.course = "Course is required";
    } else if (course.length < 2) {
      newErrors.course = "Course must be at least 2 characters";
    } else if (course.length > 30) {
      newErrors.course = "Course must be under 30 characters";
    }

    if (age === "" || age === null) {
      newErrors.age = "Age is required";
    } else if (isNaN(age)) {
      newErrors.age = "Age must be a number";
    } else if (Number(age) < 1 || Number(age) > 100) {
      newErrors.age = "Age must be between 1 and 100";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // CREATE
  const addStudents = async () => {
    if (!validate()) {
      setMessage("Invalid Details");
      setIsError(true);
      return;
    }

    try {
      setLoading(true);

      await API.post("/api/student", {
        name: form.name.trim(),
        email: form.email.trim(),
        course: form.course.trim(),
        age: Number(form.age),
      });

      setMessage("Student added successfully");
      setIsError(false);
      setErrors({});

      setForm({
        name: "",
        email: "",
        course: "",
        age: "",
      });

      getStudents();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage(
        error?.response?.data?.message || "Something went wrong. Please try again."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const deleteStudents = async (id, name) => {
    if (!window.confirm(`Delete ${name || "this student"}? This cannot be undone.`)) {
      return;
    }
    try {
      await API.delete(`/api/student/${id}`);
      setMessage("Student deleted");
      setIsError(false);
      getStudents();
      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      setMessage("Failed to delete student");
      setIsError(true);
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const inputClass = (field) =>
    `border p-2 w-full rounded focus:outline-none focus:ring-2 transition ${
      errors[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-gray-300 focus:ring-blue-300"
    }`;

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Student Management System
      </h1>

      {message && (
        <div
          className={`mb-4 p-3 rounded font-medium border ${
            isError
              ? "bg-red-100 text-red-700 border-red-400"
              : "bg-green-100 text-green-700 border-green-400"
          }`}
        >
          {message}
        </div>
      )}

      {/* FORM */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Add New Student
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              className={inputClass("name")}
              placeholder="e.g. abc xyz"
              value={form.name}
              type="text"
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              className={inputClass("email")}
              placeholder="e.g. xyz@example.com"
              value={form.email}
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Course
            </label>
            <input
              className={inputClass("course")}
              placeholder="e.g. Computer Science"
              value={form.course}
              type="text"
              onChange={(e) => handleChange("course", e.target.value)}
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Age
            </label>
            <input
              className={inputClass("age")}
              placeholder="e.g. 21"
              value={form.age}
              type="number"
              min={1}
              max={100}
              onChange={(e) => handleChange("age", e.target.value)}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>
        </div>

        <button
          onClick={addStudents}
          disabled={loading}
          className={`mt-5 w-full sm:w-auto px-6 py-2 rounded font-medium text-white transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Student"}
        </button>
      </div>

      {/* LOADING STATE */}
      {fetching ? (
        <p className="text-center text-gray-500">Loading students...</p>
      ) : students.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <>
          {/* ===================== */}
          {/* DESKTOP TABLE VIEW */}
          {/* ===================== */}
          <div className="hidden sm:block bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s) => (
                  <tr
                    key={s._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium text-gray-800">{s.name}</td>
                    <td className="p-3 text-gray-600">{s.email}</td>
                    <td className="p-3 text-gray-600">{s.course}</td>
                    <td className="p-3 text-gray-600">{s.age}</td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteStudents(s._id, s.name)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===================== */}
          {/* MOBILE CARD VIEW */}
          {/* ===================== */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {students.map((s) => (
              <div
                key={s._id}
                className="border rounded-lg p-4 shadow bg-white"
              >
                <p className="font-semibold text-gray-800 mb-1">{s.name}</p>
                <p className="text-sm text-gray-600">
                  <b>Email:</b> {s.email}
                </p>
                <p className="text-sm text-gray-600">
                  <b>Course:</b> {s.course}
                </p>
                <p className="text-sm text-gray-600">
                  <b>Age:</b> {s.age}
                </p>

                <button
                  onClick={() => deleteStudents(s._id, s.name)}
                  className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Student;