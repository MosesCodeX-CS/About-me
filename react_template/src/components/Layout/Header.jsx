import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Moses
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`relative ${
                      location.pathname === item.to
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    } transition-colors`}
                  >
                    {item.label}
                    {location.pathname === item.to && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/assets/cv/Moses_Mwangi_CV.pdf"
              download
              className="hidden md:inline-flex px-4 py-2 rounded-full text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors border border-cyan-400/40"
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
