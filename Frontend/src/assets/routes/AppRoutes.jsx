import { Route, Routes } from "react-router-dom";

import React from "react";

// All imports here
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

// layout import
import MainLayout from "../layouts/MainLayout";
import Student from "../pages/Student";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="students" element ={<Student />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
