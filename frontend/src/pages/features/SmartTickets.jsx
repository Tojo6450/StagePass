import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import RightSection from "../reusable/RightSection";;
import LeftSection from "../reusable/LeftSection";
import FAQSection from "../reusable/FAQsection";
export default function SmartTicketsPage() {
  const heroData = {
    preTitle: "Your Ticket, Reimagined",
    title: "The Smartest, Safest Way to Your Event",
    subtitle:
      "Say goodbye to paper tickets and endless email searches. Your ticket is a secure, digital pass that lives on your phone, providing instant access and a seamless event experience from start to finish.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Digital+Ticket",
    buttons: [
      { text: "Find Events", href: "#", primary: true },
      { text: "How It Works", href: "#", primary: false },
    ],
  };

  // --- Data for RightSection: Step 1 ---
  const findEventData = {
    preTitle: "Step 1: Discover",
    title: "Find Your Next Experience",
    subtitle:
      "Explore a curated list of local events, from tech workshops to fitness bootcamps. Our powerful search and filter tools help you find exactly what you're looking for in just a few clicks.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Event+Discovery",
  };

  // --- Data for LeftSection: Step 2 ---
  const bookTicketData = {
    preTitle: "Step 2: Book",
    title: "Secure Your Spot in Seconds",
    subtitle:
      "Once you've found your event, booking is simple and secure. Our streamlined checkout process, powered by Razorpay, ensures your payment is safe and your spot is confirmed instantly.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Secure+Booking",
  };

  // --- Data for RightSection: Step 3 ---
  const accessTicketData = {
    preTitle: "Step 3: Access",
    title: "Your Ticket, Always With You",
    subtitle:
      "No more printing or digging through emails. Your unique QR-coded ticket is instantly available in your personal dashboard and sent to your email, ready for the event day.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Digital+Ticket+Access",
  };

  // --- Data for LeftSection: Step 4 ---
  const checkInData = {
    preTitle: "Step 4: Check-In",
    title: "Skip the Queue with a Quick Scan",
    subtitle:
      "Forget long waiting lines. On event day, simply present the QR code on your phone at the entrance. A quick, one-second scan is all it takes to get you checked in and ready to enjoy the experience.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=QR+Code+Check-In",
  };

  // --- Data for RightSection: Post-Event ---
  const dashboardData = {
    preTitle: "Post-Event",
    title: "Keep Track of Your Adventures",
    subtitle:
      "Your personal dashboard is a record of your experiences. Revisit past events you've attended and easily manage all your upcoming bookings, all in one organized place.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Attendee+Dashboard",
  };

  // --- Data for LeftSection: Stay Connected ---
  const updatesData = {
    preTitle: "Stay Connected",
    title: "Get Updates Directly from Organizers",
    subtitle:
      "Receive timely notifications about any important event updates or schedule changes directly on the platform, ensuring you're always in the loop and have the best experience possible.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Event+Updates",
  };

  const faqData = [
    {
      question: "How do I find my ticket after booking?",
      answer:
        "Your ticket is automatically sent to your registered email address right after your booking is confirmed. You can also access it anytime by logging into your personal dashboard on our platform.",
    },
    {
      question: "Do I need to print my ticket?",
      answer:
        "No, printing is not necessary. Our system is fully digital. Simply show the QR code on your smartphone screen at the event entrance for scanning.",
    },
    {
      question: "Is my digital ticket secure?",
      answer:
        "Yes. Each ticket has a unique QR code that can only be scanned and checked in once. Our real-time verification system prevents any fraudulent or duplicate entries.",
    },
    {
      question: "What happens if my phone battery dies at the event?",
      answer:
        "We understand this can happen. The event organizer will have a manual check-in list. They can look you up by your name and email to verify your booking and grant you entry.",
    },
    {
      question: "Can I transfer my ticket to a friend?",
      answer:
        "Currently, tickets are non-transferable and are tied to the name and email used during booking to ensure security. Please check the specific event's policy for any exceptions.",
    },
    {
      question: "What if I accidentally delete the ticket email?",
      answer:
        "No problem at all. Your ticket is always safely stored in your dashboard on our platform. Just log in, and you'll find it under 'My Bookings' or 'Upcoming Events'.",
    },
  ];

  return (
    <div className="bg-black">
      <ReusableHero {...heroData} />
      <RightSection {...findEventData} />
      <LeftSection {...bookTicketData} />
      <RightSection {...accessTicketData} />
      <LeftSection {...checkInData} />
      <RightSection {...dashboardData} />
      <LeftSection {...updatesData} />
      <FAQSection faqData={faqData} />
    </div>
  );
}
