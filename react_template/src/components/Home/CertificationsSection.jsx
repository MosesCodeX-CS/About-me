import React from "react";

const certifications = [
  {
    title: "ICT National Competitions Certification",
    org: "KATTI",
    date: "2025",
    desc: "Recognized for gold and silver medals in national ICT competitions." 
  },
  {
    title: "Web Development Professional Skills Certification",
    org: "TVET / Professional Program",
    date: "Completed",
    desc: "Validated full-stack web development capabilities across PHP, Python, and JavaScript."
  },
  {
    title: "Linux System Administration Certification",
    org: "Certification Program",
    date: "Completed",
    desc: "Covers Linux setup, permissions, security hardening, and operational support."
  },
  {
    title: "Database Management Systems Certification",
    org: "Certification Program",
    date: "Completed",
    desc: "Proficiency in relational design, SQL, backup/restore, and optimization."
  }
];

const CertificationsSection = ({ homePreview }) => (
  <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
    <div className="container mx-auto">
      <h2 className="text-center mb-5 text-4xl font-extrabold text-white drop-shadow">Certifications & Courses</h2>
      <p className={`text-center text-lg mb-10 ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'}`}>
        Credentials that back my hands-on work in development, systems, and databases.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(homePreview ? certifications.slice(0, 2) : certifications).map((cert, idx) => (
          <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-800/70 text-white shadow-xl border border-gray-700'} rounded-2xl p-6 flex flex-col h-full relative`}>
            <h5 className={`font-bold text-xl mb-2 drop-shadow text-white`}>{cert.title}</h5>
            <p className={`mb-1 text-sm font-semibold text-cyan-300`}>{cert.org} <span className={`text-gray-400`}>({cert.date})</span></p>
            <p className={`text-gray-200 font-medium`}>{cert.desc}</p>
          </div>
        ))}
      </div>
      {homePreview && (
        <div className="text-center mt-10 z-20 relative">
          <a href="/certifications" className="btn btn-outline-primary btn-lg px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors font-bold shadow">View All Certifications</a>
        </div>
      )}
    </div>
  </section>
);

export default CertificationsSection;
