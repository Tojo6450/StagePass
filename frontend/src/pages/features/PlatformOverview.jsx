import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import RightSection from "../reusable/ReusableHero";
import LeftSection from "../reusable/ReusableHero";
import CardHighlights from "../reusable/ReusableHero";
export default function PlatformOverview() {
  // Custom data for each section of this specific page
  const heroData = {
    preTitle: "The All-in-One Platform",
    title: "Create, Manage & Grow Your Events",
    subtitle:
      "From college tech fests to professional fitness bootcamps, our platform provides everything you need to host successful events, engage your audience, and manage ticketing seamlessly.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Platform+Dashboard",
    buttons: [
      { text: "Create Your First Event", href: "#", primary: true },
      { text: "See Pricing", href: "#", primary: false },
    ],
  };

  const registrationData = {
    preTitle: "Effortless Registration",
    title: "Custom Forms & Secure Ticketing",
    subtitle:
      "Build beautiful event pages and custom registration forms in minutes. Offer multiple ticket types, handle payments securely with Razorpay, and automatically send QR-coded tickets to attendees.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Registration+Flow",
  };

  const managementData = {
    preTitle: "Seamless Management",
    title: "Your Event's Mission Control",
    subtitle:
      "Our organizer dashboard gives you a complete overview of your event's performance. Track sales in real-time, view attendee lists, and use our QR scanner for smooth, hassle-free check-ins at the venue.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Organizer+Dashboard",
  };

  const engagementData = {
    preTitle: "Attendee Engagement",
    title: "Build a Community, Not Just an Audience",
    subtitle:
      "Keep your attendees informed and excited. Our platform makes it easy to send updates, gather feedback, and create a memorable experience that lasts long after the event is over.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Community+Engagement",
  };

  const categories = [
    {
      title: "Conferences",
      description:
        "Our conference management software offers customizable registration experiences without coding. Perfect for aligning with your brand and engaging attendees, speakers, exhibitors, and sponsors.",
      color: {
        bg: "bg-indigo-900/40",
        border: "border-indigo-500",
        buttonHover: "hover:bg-indigo-500",
      },
      href: "#",
    },
    {
      title: "Webinars",
      description:
        "Switch to our virtual add-on for webinars and virtual events. Host, manage registrations, and promote seamlessly within the platform, powered by our all-in-one virtual event solution.",
      color: {
        bg: "bg-teal-900/40",
        border: "border-teal-500",
        buttonHover: "hover:bg-teal-500",
      },
      href: "#",
    },
    {
      title: "Trainings & Classes",
      description:
        "Enroll students effortlessly and save time and money. Customize registration forms easily to fit your needs. Stay connected with attendees through notifications and gather feedback with post-class surveys.",
      color: {
        bg: "bg-purple-900/40",
        border: "border-purple-500",
        buttonHover: "hover:bg-purple-500",
      },
      href: "#",
    },
  ];

  
const nicheData = {
  preTitle: "Built for Your Niche",
  title: "From Tech Meetups to Fitness Bootcamps",
  subtitle:
    "Whether you're a gym owner in Ranchi launching a new bootcamp or a local club hosting a workshop, our platform is built to be flexible. Create events that match your brand and reach your target audience effortlessly.",
  imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Fitness+Event",
};
  return (
    <div className="bg-black">
      <ReusableHero {...heroData} />
      <RightSection {...registrationData} />
      <LeftSection {...managementData} />
      <RightSection {...engagementData} />
      <LeftSection {...nicheData}/>
      <CardHighlights categories={categories}/>
    </div>
  );
}
