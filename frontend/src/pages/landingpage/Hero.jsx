import React from "react";

export default function Hero() {
  return <HeroSection />;
}

const HeroSection = () => {
  return (
    // Main container for the hero section
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Pre-heading text */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Event Registration Software
          </p>

          {/* Main headline with gradient text */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Run Events Like a Pro. Without the Stress.
            </span>
          </h1>

          {/* Sub-headline paragraph */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-gray-400">
            Launch your event site & mobile app in minutes—no code, no clutter,
            no stress. Powerful tools to boost registrations, manage sessions,
            engage attendees, and simplify check-in, without the steep learning
            curve or enterprise price tag.
          </p>

          {/* Container for static badges/indicators */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-semibold">Live Event Management</span>
            </div>
            
            <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-800 border border-gray-600">
              <span className="text-white font-semibold">✓ Mobile Ready</span>
            </div>
            
            <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-800 border border-gray-600">
              <span className="text-white font-semibold">✓ No Code Required</span>
            </div>
          </div>

          {/* Small text below the badges */}
          <p className="mt-6 text-sm text-gray-400">Trusted by thousands of event organizers worldwide</p>
        </div>
      </div>
    </div>
  );
};