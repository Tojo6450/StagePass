import React from "react";

// --- Reusable Card Component ---
const Card = ({ title, description, color, href }) => (
  <div
    className={`flex flex-col h-full p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${color.bg} ${color.border}`}
  >
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
    <div className="mt-8">
      <a
        href={href}
        className={`inline-block font-semibold text-white border-2 rounded-lg px-6 py-2 transition-colors duration-300 ${color.border} ${color.buttonHover} hover:text-black`}
      >
        Learn More
      </a>
    </div>
  </div>
);

// --- Main Section Component ---
const CardHighlights = ({categories}) => {
  return (
    <section className="bg-black text-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Made for Every Event
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardHighlights;
