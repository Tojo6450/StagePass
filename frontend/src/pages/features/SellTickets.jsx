import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import RightSection from "../reusable/ReusableHero";
import LeftSection from "../reusable/ReusableHero";
import FAQSection from "../reusable/ReusableHero";
export default function SellTickets() {
  const heroData = {
    preTitle: "Maximize Your Reach",
    title: "Sell Tickets Online, Hassle-Free",
    subtitle:
      "Go from setup to sales in minutes. Our platform gives you the tools to create a professional online box office, accept secure payments via Razorpay, and reach a wider audience for your college fest, workshop, or fitness bootcamp.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Online+Ticket+Sales",
    buttons: [
      { text: "Start Selling Now", href: "#", primary: true },
      { text: "Explore Features", href: "#", primary: false },
    ],
  };

  // --- Data for RightSection: Create a Branded Event Page ---
  const createPageData = {
    preTitle: "Your Brand, Your Event",
    title: "Launch a Stunning Event Page",
    subtitle:
      "No coding required. Customize your event page with your own branding, logos, and high-quality banners. Create a professional first impression that builds trust and excitement.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Custom+Event+Page",
  };

  // --- Data for LeftSection: Secure & Instant Payments ---
  const securePaymentsData = {
    preTitle: "Seamless Transactions",
    title: "Accept Payments with Razorpay",
    subtitle:
      "Integrate India's most trusted payment gateway effortlessly. Offer your attendees a smooth and secure checkout experience with support for UPI, credit/debit cards, and net banking.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Secure+Payments",
  };

  // --- Data for RightSection: Automated Ticketing & Delivery ---
  const automatedTicketingData = {
    preTitle: "Smart & Automated",
    title: "Instant QR-Coded Tickets",
    subtitle:
      "Forget manual ticketing. The moment a payment is successful, our system automatically generates a unique, secure QR-coded ticket and delivers it to the attendee's email, ready for digital check-in.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=QR+Code+Ticket",
  };

  // --- Data for LeftSection: Real-Time Sales Tracking ---
  const salesTrackingData = {
    preTitle: "Data at Your Fingertips",
    title: "Monitor Your Sales in Real-Time",
    subtitle:
      "Track your ticket sales and revenue as they happen from your organizer dashboard. Understand your audience, see your event fill up, and make data-driven decisions to maximize success.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Sales+Dashboard",
  };

  // --- Data for RightSection: Promote & Share with Ease ---
  const promotionData = {
    preTitle: "Amplify Your Reach",
    title: "Built-in Tools to Promote Your Event",
    subtitle:
      "Don't just sell tickets, build hype. Our platform makes it easy to share your event page on social media, create discount codes for early birds, and track where your attendees are coming from.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Social+Sharing",
  };

  // --- Data for LeftSection: Boost Attendance ---
  const engagementData = {
    preTitle: "Drive Engagement",
    title: "Increase Turnout with Automated Reminders",
    subtitle:
      "Reduce no-shows and keep your event top-of-mind. Set up automated email reminders to be sent to your registered attendees before the event, ensuring a packed house.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Email+Reminders",
  };

  const sellTicketsFaqData = [
    {
      question: "How customizable are the registration forms on TapIn?",
      answer:
        "Our forms are highly customizable. You can add custom fields to collect any information you need from attendees, such as their college ID for a fest, dietary restrictions for a workshop, or t-shirt size for a marathon.",
    },
    {
      question: "What types of tickets can I offer through TapIn?",
      answer:
        "You can offer a variety of ticket types, including free tickets for open mics, paid tickets for workshops, and tiered options like 'Early Bird' or 'VIP' passes to create different pricing levels for your event.",
    },
    {
      question: "Can TapIn handle automated waitlists for my event?",
      answer:
        "Yes. Once your event reaches capacity, our system can automatically enable a waitlist. If a registered attendee cancels, the first person on the waitlist will be notified that a spot has opened up.",
    },
    {
      question: "How does TapIn keep attendees engaged before the event?",
      answer:
        "You can use the platform to send out automated email reminders and event updates. The dedicated event page also serves as a central hub for all information, keeping your attendees informed and excited.",
    },
    {
      question: "What options does TapIn provide for on-site check-ins?",
      answer:
        "We provide a seamless on-site check-in experience. Every ticket has a unique QR code, and organizers can use our mobile-friendly scanner page to scan tickets directly from an attendee's phone for instant verification.",
    },
    {
      question: "How can I track ticket sales and attendance in real-time?",
      answer:
        "Your organizer dashboard provides a live, real-time view of all your key metrics. You can track ticket sales, monitor revenue, and see your attendee list grow as it happens, all in one place.",
    },
  ];


  return (
    <div className="bg-black">
      <ReusableHero {...heroData} />
      <RightSection {...createPageData} />
      <LeftSection {...securePaymentsData} />
      <RightSection {...automatedTicketingData} />
      <LeftSection {...salesTrackingData} />
      <RightSection {...promotionData} />
      <LeftSection {...engagementData} />
      <FAQSection faqData={sellTicketsFaqData} />
    </div>
  );
}
