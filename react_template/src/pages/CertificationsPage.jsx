import React from "react";

const certifications = [
  {
    title: "ICT National Competitions Certification",
    org: "KATTI",
    date: "2025",
    desc: "Awarded after winning Gold (Web Development) and Silver (Software Solutions) at national competitions." 
  },
  {
    title: "Web Development Professional Skills Certification",
    org: "Professional Program",
    date: "Completed",
    desc: "Validated expertise across PHP, Python, JavaScript, and responsive front-end delivery." 
  },
  {
    title: "Linux System Administration Certification",
    org: "Certification Program",
    date: "Completed",
    desc: "Covers installation, permissions, security, and ongoing server operations." 
  },
  {
    title: "Database Management Systems Certification",
    org: "Certification Program",
    date: "Completed",
    desc: "Relational design, SQL proficiency, backup/restore, and performance tuning." 
  }
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 px-4 bg-gray-900 text-white">
    <div className="container mx-auto">
      <h2 className="text-center mb-5 text-4xl font-bold">Certifications & Courses</h2>
      <p className="text-center text-lg mb-10 text-gray-300">Evidence of disciplined learning that complements hands-on delivery.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-gray-800/70 rounded-xl shadow-md p-6 flex flex-col h-full border border-gray-700">
            <h5 className="font-bold text-xl mb-2">{cert.title}</h5>
            <p className="text-cyan-300 mb-1 text-sm">{cert.org} <span className="text-gray-400">({cert.date})</span></p>
            <p className="text-gray-300">{cert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
