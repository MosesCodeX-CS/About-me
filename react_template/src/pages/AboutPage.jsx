import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Moses Mwangi";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const achievements = [
    {
      title: 'Gold Medal – ICT Web Development',
      org: 'KATTI National TVET Fairs & Competitions',
      year: '2025',
      details: '1st place nationally for an innovative, production-ready business solution.'
    },
    {
      title: 'Silver Medal – ICT Software Solutions for Business',
      org: 'KATTI Research & Innovation Competitions',
      year: '2025',
      details: '2nd place regionally for robust, real-world business software implementation.'
    }
  ];

  const experience = [
    {
      role: 'Freelance Software Developer',
      org: 'Self-Employed',
      period: '2023 – Present',
      bullets: [
        'Designed and shipped 5+ full-stack web applications from concept to deployment.',
        'Built WiFi billing and POS systems tailored to local business requirements.',
        'Managed end-to-end lifecycle: requirements, build, testing, deployment, and support.',
        'Advised clients on optimal architectures, delivering 95%+ bug-free releases.'
      ]
    },
    {
      role: 'ICT Technical Support Attachée',
      org: 'Kijabe Hospital',
      period: 'Jan 6, 2025 – Apr 6, 2025',
      bullets: [
        'Supported hospital systems, troubleshooting network and workstation issues.',
        'Documented incidents and streamlined recurring fixes for faster resolution.'
      ]
    }
  ];

  const skills = {
    programming: ['PHP', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    backend: ['Django', 'REST APIs'],
    frontend: ['Bootstrap', 'jQuery'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Git & GitHub', 'Docker', 'Linux (Ubuntu/ParrotOS)', 'Windows', 'VS Code', 'Vim/Neovim', 'XAMPP/Apache', 'Trello', 'Notion', 'Microsoft Office']
  };

  const leadership = [
    'Academic Secretary | Nachu Technical & Vocational College Student Council',
    'Chess Club Coordinator | Nachu Technical & Vocational College',
    'Technical Mentor | Peer-to-Peer Learning Initiative'
  ];

  const languages = [
    'English: Professional (Fluent)',
    'German: Intermediate (Conversational)',
    'Kiswahili: Native'
  ];

  const education = {
    school: 'Nachu Technical and Vocational College',
    program: 'Diploma in Internet Communication Technology (ICT)',
    period: '2023 – 2026 (Expected)'
  };

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Moses</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Software Developer and Full-Stack Web & Systems Specialist transforming complex problems into secure, efficient digital solutions.
            </p>
          </motion.div>

          <motion.section variants={itemVariants} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="text-gray-200 leading-relaxed">
              Innovative developer with hands-on wins at national competitions and a track record of production-ready systems. I blend analytical thinking, client collaboration, and rigorous testing to deliver reliable web apps, billing platforms, and POS solutions that stand up in real-world environments.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Experience</h3>
              <div className="space-y-5">
                {experience.map((item, idx) => (
                  <div key={idx} className="bg-gray-900/40 border border-gray-700 rounded-lg p-4">
                    <p className="text-white font-semibold text-lg">{item.role}</p>
                    <p className="text-cyan-300 text-sm mb-2">{item.org} · {item.period}</p>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 text-sm">
                      {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold">{education.school}</p>
                  <p className="text-gray-300">{education.program}</p>
                  <p className="text-cyan-300 text-sm">{education.period}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((a, i) => (
                    <div key={i} className="bg-gray-900/40 border border-gray-700 rounded-lg p-4">
                      <p className="text-white font-semibold">{a.title} ({a.year})</p>
                      <p className="text-cyan-300 text-sm">{a.org}</p>
                      <p className="text-gray-200 text-sm">{a.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
              <div>
                <p className="text-cyan-300 font-semibold mb-1">Programming</p>
                <p>{skills.programming.join(' · ')}</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold mb-1">Frameworks & APIs</p>
                <p>{[...skills.backend, ...skills.frontend].join(' · ')}</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold mb-1">Databases</p>
                <p>{skills.databases.join(' · ')}</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold mb-1">Tools & Platforms</p>
                <p>{skills.tools.join(' · ')}</p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Leadership & Volunteering</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm">
                {leadership.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm">
                {languages.map((lang, i) => <li key={i}>{lang}</li>)}
              </ul>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 border border-blue-800/50 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Download My CV</h3>
            <p className="text-gray-200 mb-6">Full details on experience, projects, certifications, and references.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/assets/cv/Moses_Mwangi_CV.pdf"
                download
                className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors"
              >
                Download CV (PDF)
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
