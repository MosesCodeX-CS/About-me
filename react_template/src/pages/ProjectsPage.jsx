import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'wifi-billing',
    title: 'WiFi Billing Management System',
    description: 'Prepaid/postpaid WiFi billing platform with role-based access, usage tracking, and automated receipts.',
    impact: 'Streamlined revenue collection and reduced manual errors for local ISPs.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'supermarket-pos',
    title: 'Supermarket POS System',
    description: 'Retail POS with inventory control, cashier roles, receipt printing, and daily/weekly reports.',
    impact: 'Improved checkout speed and stock accuracy for supermarket and hospitality clients.',
    tech: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
    link: '#'
  },
  {
    id: 'phishing-detector',
    title: 'Kenyan Phishing Detector',
    description: 'Detection tool that scans Kenyan domains/URLs for phishing indicators using request analysis and pattern checks.',
    impact: 'Helps users and admins quickly flag suspicious links before compromise.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'JavaScript'],
    link: '#'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Responsive storefront with product management, cart/checkout, and secure user flows.',
    impact: 'Enables small businesses to sell online with minimal setup overhead.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    link: '#'
  }
];

const ProjectsPage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-950 text-white" id="projects">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              className="bg-gray-800/60 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-video bg-gray-900/60 flex items-center justify-center text-gray-500 text-sm">
                Project Preview
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-3">{project.description}</p>
                <p className="text-cyan-200 text-sm font-medium mb-4">Impact: {project.impact}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity font-semibold mt-auto"
                >
                  {project.link === '#' ? 'Case Study Coming Soon' : 'View Project'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
