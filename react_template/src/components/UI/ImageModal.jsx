import React from 'react';
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ImageModal = ({ isOpen, onClose, image, name, position, contact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={image} 
                alt={name}
                className="rounded-lg max-h-[60vh] object-contain"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
              <p className="text-cyan-300 mb-6">{position}</p>
              
              {contact && (
                <div className="space-y-4 mt-6">
                  <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                    Contact Information
                  </h4>
                  {contact.phone && (
                    <div className="flex items-center text-gray-300">
                      <FaPhone className="mr-3 text-cyan-400" />
                      <a href={`tel:${contact.phone}`} className="hover:text-cyan-400 transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                  {contact.email && (
                    <div className="flex items-center text-gray-300">
                      <FaEnvelope className="mr-3 text-cyan-400" />
                      <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors break-all">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.address && (
                    <div className="flex items-start text-gray-300">
                      <FaMapMarkerAlt className="mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                      <span>{contact.address}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
