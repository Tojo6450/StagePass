import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useAppUser } from "../hooks/useAppUser"; 

const TechLogo = () => ( <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /> );
const FitnessLogo = () => ( <path d="M20.57 14.86c.39-.39.39-1.02 0-1.41l-4.24-4.24c-.39-.39-1.02-.39-1.41 0L12 12.12 9.07 9.19c-.39-.39-1.02-.39-1.41 0l-4.24 4.24c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0L12 16.88l2.93 2.93c.39.39 1.02.39 1.41 0l4.23-4.24zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" /> );
const StartupLogo = () => ( <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> );

const DynamicGetStartedButton = ({ className, text = "Get Started" }) => {
    const { user, isLoading } = useAppUser();
  
    if (isLoading) {
      return (
        <span className={`${className} opacity-50 cursor-not-allowed`}>
          Loading...
        </span>
      );
    }
  
    let targetPath;
    if (user?.role === 'organizer') {
      targetPath = '/organizer-dashboard';
    } else if (user?.role === 'attendee') {
      targetPath = '/allevents';
    } else {
      targetPath = '/sign-in';
    }
  
    return (
      <Link to={targetPath} className={className}>
        {text}
      </Link>
    );
};

const ReusableHero = ({ preTitle, title, subtitle, imageUrl, buttons }) => (
    <section className="relative bg-black text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
            <Motion.div animate={{ x: [0, 20, 0], y: [0, -30, 0], rotate: [0, 5, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" ></Motion.div>
            <Motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" ></Motion.div>
        </div>
        <div className="container mx-auto px-4 pt-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-center order-first md:order-last">
                    <img src={imageUrl} alt={title} className="rounded-2xl shadow-2xl shadow-fuchsia-500/10 max-w-lg w-full h-auto object-cover" />
                </Motion.div>
                <Motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center md:text-left order-last md:order-first">
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">{preTitle}</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{title}</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0 tracking-tight">{subtitle}</p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        {buttons && buttons.map((button, index) => (
                            <DynamicGetStartedButton
                                key={index}
                                text={button.text}
                                className={`inline-block font-bold rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 ${
                                    button.primary ? "bg-cyan-500 text-black hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30" : "bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-700"
                                }`}
                            />
                        ))}
                    </div>
                </Motion.div>
            </div>
        </div>
    </section>
);

const RightSection = ({ preTitle, title, subtitle, imageUrl }) => ( <div className="py-16 sm:py-24 overflow-hidden"> <div className="container mx-auto px-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"> <div className="text-center md:text-left"> <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3"> {preTitle} </p> <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"> {title} </h2> <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0 tracking-tight"> {subtitle} </p> </div> <div className="flex justify-center"> <img src={imageUrl} alt={title} className="rounded-2xl shadow-2xl shadow-black/50 max-w-md w-full h-auto object-cover" /> </div> </div> </div> </div> );
const LeftSection = ({ preTitle, title, subtitle, imageUrl }) => ( <div className="py-16 sm:py-24 overflow-hidden"> <div className="container mx-auto px-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"> <div className="flex justify-center order-first md:order-last"> <img src={imageUrl} alt={title} className="rounded-2xl shadow-2xl shadow-black/50 max-w-md w-full h-auto object-cover" /> </div> <div className="text-center md:text-left order-last md:order-first"> <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3"> {preTitle} </p> <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"> {title} </h2> <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0 tracking-tight"> {subtitle} </p> </div> </div> </div> </div> );
const AnimatedSection = ({ children, className }) => ( <Motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className={className} > {children} </Motion.div> );
const DifferentiatorCard = ({ title, children }) => ( <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full transform transition-all duration-300 hover:border-fuchsia-500/50 hover:-translate-y-2"> <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3> <p className="text-gray-300">{children}</p> </div> );
const TestimonialCard = ({ quote, author, title, imageUrl }) => ( <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center h-full transform transition-all duration-500 hover:bg-white/10 hover:scale-105"> <img src={imageUrl} alt={author} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-cyan-500" /> <p className="text-lg italic text-gray-300">"{quote}"</p> <p className="mt-4 font-bold text-white">{author}</p> <p className="text-sm text-cyan-400">{title}</p> </div> );
const TrustedBySection = () => ( <div className="py-16 bg-black"> <div className="container mx-auto px-4"> <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gray-500 mb-8"> Trusted by leading creators in Jharkhand </h3> <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"> <div className="flex items-center gap-3 text-gray-400 font-semibold"> <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <TechLogo /> </svg> IIIT Ranchi </div> <div className="flex items-center gap-3 text-gray-400 font-semibold"> <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" > <FitnessLogo /> </svg> Ranchi Fitness Hub </div> <div className="flex items-center gap-3 text-gray-400 font-semibold"> <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <StartupLogo /> </svg> Startup Jharkhand </div> </div> </div> </div> );

const FinalCTA = () => (
  <div className="relative py-20 sm:py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black"></div>
      <Motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.3)_0,_rgba(217,70,239,0)_50%)]" ></Motion.div>
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"> Ready to Host Your Next Great Event? </span>
      </h2>
      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"> Join hundreds of creators and organizers who trust StagePass to bring their vision to life. </p>
      <DynamicGetStartedButton
        className="mt-10 inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold text-lg rounded-full px-10 py-4 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-fuchsia-500/40"
        text="Get Started for Free"
      />
    </div>
  </div>
);

export default function WhyStagepass() {
  const heroData = {
    preTitle: "BUILT FOR IMPACT",
    title: "More Than a Tool, It's Your Event Partner",
    subtitle: "We built StagePass to empower creators, organizers, and communities. Our platform handles the complex logistics of event management, so you can focus on what truly matters: creating memorable experiences.",
    imageUrl: "https://placehold.co/800x600/1a202c/c026d3?text=Connections",
    buttons: [{ text: "Get Started", primary: true }], 
  };
  const organizerData = { preTitle: "FOR ORGANIZERS", title: "From Idea to 'Sold Out' in Minutes", subtitle: "Stop juggling spreadsheets and multiple apps. With StagePass, you can create a professional event page, manage ticket sales, and track your success all from one intuitive dashboard. We handle the tech, you handle the magic.", imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Dashboard", };
  const attendeeData = { preTitle: "FOR ATTENDEES", title: "Discover and Access Events, Seamlessly", subtitle: "Attendees can find your event, purchase tickets in a few clicks, and receive a secure, QR-coded digital ticket instantly. Our system ensures a smooth journey from booking to a fast, hassle-free check-in.", imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Digital+Ticket", };

  return (
    <div className="bg-black text-white">
      <ReusableHero {...heroData} />
      <AnimatedSection><TrustedBySection /></AnimatedSection>
      <AnimatedSection><RightSection {...organizerData} /></AnimatedSection>
      <AnimatedSection><LeftSection {...attendeeData} /></AnimatedSection>
      <div className="py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-12"> What Makes <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"> StagePass </span> Different? </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedSection><DifferentiatorCard title="Focus on Micro-Events">We're built for the college fests in Ranchi, the local gym bootcamps, and the tech meetups. We provide powerful tools without the bloat of enterprise platforms.</DifferentiatorCard></AnimatedSection>
                <AnimatedSection><DifferentiatorCard title="Transparent & Fair Pricing">No hidden fees or complex contracts. Our pricing is simple and designed for small-scale events. Free events are always free.</DifferentiatorCard></AnimatedSection>
                <AnimatedSection><DifferentiatorCard title="An All-in-One Solution">From the first registration to the final check-in scan, every tool you need is integrated. Stop patching together different services and manage everything in one place.</DifferentiatorCard></AnimatedSection>
            </div>
        </div>
      </div>
      <div className="py-20 sm:py-24 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white tracking-tight mb-12"> Trusted by Creators Like You </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <TestimonialCard quote="StagePass made managing our annual college tech fest a breeze. The QR code check-in was a lifesaver!" author="Priya S." title="Event Lead, IIIT Ranchi" imageUrl="https://placehold.co/100/334155/FFFFFF?text=PS" />
            </AnimatedSection>
            <AnimatedSection>
              <TestimonialCard quote="I sold out my fitness bootcamp in a week. StagePass is incredibly user-friendly and the payment integration with Razorpay was seamless." author="Rohan K." title="Fitness Coach, Ranchi" imageUrl="https://placehold.co/100/334155/FFFFFF?text=RK" />
            </AnimatedSection>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
