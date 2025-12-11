import React, { useState } from "react";
import { FaLaptopCode, FaCode, FaNetworkWired, FaPalette, FaChalkboardTeacher, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    category: 'development',
    icon: <FaCode className="text-green-500 text-4xl mb-3 mx-auto" />, 
    title: "Full-Stack Web & API Development",
    short: "Production-ready apps built with PHP, Python/Django, JavaScript, and REST APIs.",
    badges: ["PHP", "Python/Django", "JavaScript", "REST APIs"],
    details: [
      "Custom web applications with secure auth and role-based access",
      "RESTful APIs and integrations with third-party services",
      "Responsive frontends with Bootstrap and modern JS",
      "Database design and optimization (MySQL/PostgreSQL)",
      "Performance, security hardening, and testing before go-live"
    ]
  },
  {
    category: 'development',
    icon: <FaMobileAlt className="text-gray-400 text-4xl mb-3 mx-auto" />, 
    title: "POS & Billing Systems",
    short: "End-to-end billing, payments, and inventory for retail, hospitality, and WiFi services.",
    badges: ["POS", "Billing", "Inventory", "Reporting"],
    details: [
      "WiFi billing management with prepaid/postpaid options",
      "Supermarket and hotel POS with receipts, stock, and user roles",
      "Dashboarding and financial reporting for business insight",
      "Deployment, training, and post-launch support"
    ]
  },
  {
    category: 'support',
    icon: <FaLaptopCode className="text-primary text-4xl mb-3 mx-auto" />, 
    title: "Technical Support & Maintenance",
    short: "Keep systems healthy with proactive diagnostics, recovery, and upgrades.",
    badges: ["Troubleshooting", "Data Recovery", "Upgrades", "QA"],
    details: [
      "Workstation and server troubleshooting (Windows/Linux)",
      "OS installation, patching, and performance tuning",
      "Backup/restore routines and incident documentation",
      "Quality assurance checks to keep deployments 95%+ bug-free"
    ]
  },
  {
    category: 'support',
    icon: <FaNetworkWired className="text-cyan-400 text-4xl mb-3 mx-auto" />, 
    title: "Networking & Security",
    short: "Reliable connectivity with secure configurations and monitoring.",
    badges: ["WiFi", "VPN", "Backups", "Hardening"],
    details: [
      "Network setup, MiFi optimization, and VPN configuration",
      "Wireless security and access controls",
      "Data backup strategies with encryption",
      "Linux permissions and basic hardening"
    ]
  },
  {
    category: 'design',
    icon: <FaPalette className="text-yellow-400 text-4xl mb-3 mx-auto" />, 
    title: "UI/UX & Digital Presence",
    short: "Polished, responsive interfaces that reflect your brand and drive conversion.",
    badges: ["Responsive", "Branding", "Content", "SEO"],
    details: [
      "Landing pages, portfolios, and product sites",
      "Lightweight branding assets (logos, social media graphics)",
      "Content structure for clarity and trust",
      "Baseline SEO and performance hygiene"
    ]
  },
  {
    category: 'consulting',
    icon: <FaChalkboardTeacher className="text-red-500 text-4xl mb-3 mx-auto" />, 
    title: "Training & Mentorship",
    short: "Upskill teams on modern development, Git, and Linux fundamentals.",
    badges: ["Programming", "Web Dev", "Linux CLI", "Git/GitHub"],
    details: [
      "Programming fundamentals in Python, PHP, and JavaScript",
      "Web development foundations with hands-on labs",
      "Git/GitHub workflows and code review basics",
      "Linux command-line essentials for developers"
    ]
  }
];

const filters = [
  { label: 'All Services', value: 'all' },
  { label: 'Development', value: 'development' },
  { label: 'Tech Support', value: 'support' },
  { label: 'Design', value: 'design' },
  { label: 'Consulting', value: 'consulting' }
];

const ServicesSection = ({ homePreview }) => {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);
  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);
  const displayServices = homePreview ? filtered.slice(0,3) : filtered;

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2 text-white drop-shadow">My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span></h2>
          <p className={`text-lg ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'} `}>End-to-end solutions covering full-stack builds, infrastructure, and training.</p>
        </div>
        {/* Filters: Only show on full page */}
        {!homePreview && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`btn btn-outline-primary btn-lg ${filter === f.value ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-cyan-400 border-cyan-600'} transition font-semibold`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 service-container">
          {displayServices.map((service, idx) => (
            <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-700 text-white shadow-xl border border-cyan-800/40'} rounded-2xl p-8 flex flex-col h-full relative`}>
              {service.icon}
              <h5 className={`font-bold text-xl mb-2 drop-shadow ${homePreview ? 'text-white' : 'text-white'}`}>{service.title}</h5>
              <p className={`${homePreview ? 'text-gray-200 font-medium' : 'text-gray-100' } mb-3`}>{service.short}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.badges.map((badge, i) => (
                  <span key={i} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold shadow">{badge}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="btn btn-primary btn-sm" onClick={() => setModal(service)}>
                  <span className="mr-1">ℹ️</span> Details
                </button>
                <a href="/contact#contact" className="btn btn-success btn-sm">
                  <span className="mr-1">✉️</span> Request
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-900 rounded-xl shadow-xl max-w-lg w-full p-8 relative animate-fadeIn border border-cyan-600/40">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl" onClick={() => setModal(null)}>&times;</button>
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{modal.title}</h3>
              <p className="mb-4 text-gray-200">{modal.short}</p>
              <ul className="list-disc list-inside text-gray-100 space-y-2 mb-6">
                {modal.details.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="flex justify-end gap-2">
                <button className="btn btn-outline-primary" onClick={() => setModal(null)}>Close</button>
                <a href="/contact#contact" className="btn btn-success">Request Service</a>
              </div>
            </div>
          </div>
        )}
        {/* Call to Action */}
        <div className="text-center mt-16 p-8 md:p-12 bg-gradient-to-r from-cyan-700 to-blue-900 text-white rounded-2xl shadow-2xl border-2 border-cyan-400 z-30 relative flex flex-col items-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow animate-pulse">Ready to Get Your Project Started?</h3>
          <p className="mb-6 text-cyan-100 text-lg font-medium drop-shadow">Book a free consultation to align on scope, tech stack, and delivery milestones.</p>
          <a href="/contact#contact" className="btn btn-light btn-lg px-8 py-3 font-bold text-cyan-700 bg-white rounded-full shadow-lg hover:bg-cyan-100 transition-all text-lg animate-glow">Contact Now</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
