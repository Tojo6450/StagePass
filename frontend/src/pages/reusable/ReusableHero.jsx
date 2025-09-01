import React from "react";

/**
 * A reusable hero section component.
 * This component is designed to be used on multiple pages by passing different data as props.
 * It now correctly accepts and uses the `buttons` array from parent components.
 */
const ReusableHero = ({ preTitle, title, subtitle, imageUrl, buttons }) => {
  return (
    <section className="bg-black text-white pt-20 sm:pt-24 pb-28 sm:pb-32">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right Column on Desktop, Top on Mobile: Image */}
          <div className="flex justify-center animate-fade-in-left order-first md:order-last">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-2xl shadow-black/50 max-w-lg w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/111827/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Left Column on Desktop, Bottom on Mobile: Text Content */}
          <div className="text-center md:text-left animate-fade-in-right order-last md:order-first">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              {preTitle}
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0 tracking-tight">
              {subtitle}
            </p>

            {/* Buttons are rendered dynamically from the 'buttons' prop */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              {buttons &&
                buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={`inline-block font-bold rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105
                                    ${
                                      button.primary
                                        ? "bg-cyan-500 text-black hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
                                        : "bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-700"
                                    }`}
                  >
                    {button.text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableHero;
