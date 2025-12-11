import React from "react";

const projects = [
  {
    title: "WiFi Billing Management System",
    description: "PHP/MySQL platform for prepaid and postpaid WiFi billing with role-based access, usage tracking, and receipt generation.",
    image: "/images/project1-thumb.jpg",
    link: "/projects#wifi-billing"
  },
  {
    title: "Supermarket POS System",
    description: "Python/Django + PostgreSQL POS with inventory, cashier roles, receipt printing, and daily sales reporting for supermarkets/hospitality.",
    image: "/images/project7-thumb.jpg",
    link: "/projects#supermarket-pos"
  },
  {
    title: "Kenyan Phishing Detector",
    description: "Python (BeautifulSoup/Requests) tool that flags suspicious Kenyan domains, scanning links for indicators of compromise.",
    image: "/images/project8-thumb.jpg",
    link: "/projects#phishing-detector"
  },
  {
    title: "E-Commerce Platform",
    description: "PHP/MySQL storefront with product management, cart/checkout, and responsive Bootstrap UI.",
    image: "/images/project3-thumb.jpg",
    link: "/projects#ecommerce"
  }
];

const FeaturedProjectsSection = ({ homePreview }) => (
  <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
    <div className="container mx-auto">
      <h2 className="text-center mb-5 text-4xl font-extrabold text-white drop-shadow">Featured Projects</h2>
      <p className={`text-center text-lg mb-10 ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'}`}>
        Real-world systems delivered for clients and competitions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(homePreview ? projects.slice(0, 3) : projects).map((project, idx) => (
          <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-100/90 text-gray-900 shadow-xl border border-cyan-800/40'} rounded-2xl overflow-hidden flex flex-col h-full relative`}>
            <div className={`${homePreview ? 'bg-gray-900/60' : 'bg-gray-300'} aspect-video flex items-center justify-center`}>
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" loading="lazy" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h5 className="font-bold text-xl mb-3 drop-shadow">{project.title}</h5>
              <p className={`mb-4 flex-1 font-medium ${homePreview ? 'text-gray-200' : 'text-gray-900'}`}>{project.description}</p>
              <a href={project.link} className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity mt-auto font-semibold shadow">Learn More</a>
            </div>
          </div>
        ))}
      </div>
      {homePreview && (
        <div className="text-center mt-10 z-20 relative">
          <a href="/projects" className="btn btn-outline-primary btn-lg px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors font-bold shadow">View All Projects</a>
        </div>
      )}
    </div>
  </section>
);

export default FeaturedProjectsSection;
