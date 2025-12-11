import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Moses designed and implemented a robust WiFi hotspot system for our hotel that has significantly improved our guest experience. The system is reliable, easy to manage, and provides valuable analytics. His technical expertise and professionalism were evident throughout the project.",
    name: "Stellah Nyabute",
    position: "Bellamy Hotel Manager",
    image: "/images/image5.png",
    rating: 5
  },
  {
    text: "Working with Moses was a game-changer. The POS system he built for our hotel streamlined operations and boosted our revenue by 30%. His proactive communication and attention to detail made the entire process effortless. The system handles our high transaction volume with zero downtime.",
    name: "Stellah Nyabute",
    position: "Bellamy Hotel Manager",
    image: "/images/image5.png",
    rating: 5
  },
  {
    text: "Moses's menu design for our hotel restaurant was exceptional. He perfectly captured our brand's elegance while creating a menu that's both beautiful and highly functional. The new design improved order accuracy by 40% and received numerous compliments from our guests. His attention to detail and creative approach made all the difference.",
    name: "Stellah Nyabute",
    position: "Bellamy Hotel Manager",
    image: "/images/image5.png",
    rating: 5
  },
  {
    text: "Moses has been instrumental in building our digital presence at Primenova Technologies. From designing our website to creating eye-catching marketing materials, his work has helped us establish a strong brand identity. His attention to detail and creative approach to advertising has significantly boosted our market visibility.",
    name: "Primenova Technologies",
    position: "Marketing & Branding",
    image: "/images/profile/Profile.png",
    rating: 5
  }
];

const TestimonialsSection = ({ homePreview }) => (
  <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-cyan-400 text-lg font-semibold uppercase tracking-wide block mb-2">What Clients Say About Me</span>
        <h2 className="text-4xl font-extrabold mb-3 drop-shadow">Client Success Stories</h2>
        <p className={`text-lg ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'}`}>From technical solutions to creative design, see how I've helped businesses grow:</p>
        <div className="mt-6 bg-gray-800/50 p-4 rounded-lg max-w-3xl mx-auto">
          <p className="text-cyan-200 font-medium">Primenova Technologies</p>
          <p className="text-gray-300">Delivering comprehensive digital solutions including website development, marketing materials, and brand identity design.</p>
        </div>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {(homePreview ? testimonials.slice(0, 2) : testimonials).map((t, idx) => (
          <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-800/70 text-white shadow-xl border border-gray-700'} rounded-2xl p-8 flex flex-col items-center text-center h-full relative`}>
            <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
            <p className={`italic text-lg mb-4 ${homePreview ? 'text-gray-200 font-medium' : 'text-gray-300'}`}>"{t.text}"</p>
            <img src={t.image} alt={t.name} className="rounded-full w-16 h-16 mb-3 object-cover border-2 border-cyan-400" loading="lazy" />
            <h6 className={`font-bold text-lg mb-1 drop-shadow text-white`}>{t.name}</h6>
            <p className={`mb-2 font-semibold ${homePreview ? 'text-cyan-200' : 'text-cyan-200'}`}>{t.position}</p>
            <div className="flex justify-center mt-2 text-yellow-500">
              {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        ))}
      </div>
      {homePreview && (
        <div className="text-center mt-12 z-20 relative">
          <a href="/testimonials" className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition shadow">See More Testimonials</a>
        </div>
      )}
      {!homePreview && (
        <div className="text-center mt-12">
          <a href="/contact#contact" className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition shadow">Get Your Project Started</a>
        </div>
      )}
    </div>
  </section>
);

export default TestimonialsSection;
