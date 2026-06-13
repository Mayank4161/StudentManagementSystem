import React, { useState, useEffect } from "react";
import API from "../services/api";

const Student = () => {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  // GET
  const getStudents = async () => {
    const res = await API.get("/");
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  // CREATE
  const addStudents = async () => {
    await API.post("/", form);
    setForm({ name: "", email: "", course: "", age: "" });
    getStudents();
  };

  // DELETE
  const deleteStudents = async (id) => {
    await API.delete(`/${id}`);
    getStudents();
  };

  return (
    <div className="max-w-6xl mx-auto p-4">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Student Management System
      </h1>

      {/* FORM */}
      <div className="bg-white shadow rounded p-4 mb-6">

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Course"
          value={form.course}
          onChange={(e) =>
            setForm({ ...form, course: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Age"
          value={form.age}
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <button
          onClick={addStudents}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Student
        </button>
      </div>

      {/* ===================== */}
      {/* DESKTOP TABLE VIEW */}
      {/* ===================== */}
      <div className="hidden sm:block bg-white shadow rounded-lg overflow-x-auto">

        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-t">

                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.course}</td>
                <td className="p-3">{s.age}</td>

                <td className="p-3">
                  <button
                    onClick={() => deleteStudents(s._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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

            <p><b>Name:</b> {s.name}</p>
            <p><b>Email:</b> {s.email}</p>
            <p><b>Course:</b> {s.course}</p>
            <p><b>Age:</b> {s.age}</p>

            <button
              onClick={() => deleteStudents(s._id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Student;