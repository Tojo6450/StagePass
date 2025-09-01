import React from "react";

const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LeftSectionPlaceholder = ({
  preTitle,
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <section className="bg-black text-white py-4  sm:py-4">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex justify-center animate-fade-in-left md:order-last">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-2xl shadow-black/50 max-w-sm w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/111827/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>

          <div className="text-left md:text-left animate-fade-in-right md:order-first">
            {preTitle && (
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-400 mb-3">
                {preTitle}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-200">
              {title}
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto md:mx-0 tracking-tight leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LeftSection({ preTitle, title, subtitle, imageUrl}) {
  return (
    <div className="bg-black py-16">
      <LeftSectionPlaceholder
        preTitle={preTitle}
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />
    </div>
  );
}
