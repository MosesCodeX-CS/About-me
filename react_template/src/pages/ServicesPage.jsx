import React from "react";
import ServicesSection from "../components/Home/ServicesSection";

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 text-white pt-20">
    <div className="container mx-auto py-12">
      <ServicesSection fullPage />
    </div>
  </div>
);

export default ServicesPage;
