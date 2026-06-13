import { Outlet } from "react-router-dom";
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <header className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;