import React from "react";

export default function Hero() {
  return <HeroSection />;
}

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="container mx-auto px-4 py-8 sm:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="group mb-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="relative mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400 px-6 py-3 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300">
                <span className="relative z-10">Event Registration Software</span>
              </p>
            </div>
          </div>

          <div className="relative mb-8">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-tight">
              <span className="inline-block bg-gradient-to-b from-white via-cyan-100 to-gray-400 bg-clip-text text-transparent hover:from-cyan-200 hover:via-white hover:to-cyan-300 transition-all duration-700 animate-fade-in">
                Run Events Like a Pro.
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Without the Stress.
              </span>
            </h1>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Sub-headline paragraph with better typography */}
          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-gray-300 hover:text-gray-200 transition-colors duration-300">
            Launch your event site & mobile app in 
            <span className="text-cyan-400 font-semibold"> minutes</span>—no code, no clutter, no stress. 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold"> Powerful tools</span> to 
            boost registrations, manage sessions, engage attendees, and simplify check-in, without the steep learning curve or enterprise price tag.
          </p>

          {/* Simple text indicators without button styling */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div>
              <span className="text-cyan-300 font-bold text-sm sm:text-base">Live Event Management</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-bold text-sm sm:text-base">Mobile Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};