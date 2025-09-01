import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import RightSection from "../reusable/RightSection";
import LeftSection from "../reusable/LeftSection";
import FAQSection from "../reusable/FAQsection";
export default function QuickCheckIn() {
  const heroData = {
    preTitle: "Simplify Your Event Day",
    title: "Intuitive Quick Check-Ins",
    subtitle:
      "Eliminate long queues and delight your attendees from the moment they arrive. Our QR code scanning solution turns your smartphone into a powerful, real-time ticket validator, making entry seamless and professional.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=QR+Code+Scanning",
    buttons: [
      { text: "Go to Dashboard", href: "#", primary: true },
      { text: "How it Works", href: "#", primary: false },
    ],
  };

  // --- Data for RightSection: Access the Scanner ---
const accessScannerData = {
  preTitle: "Step 1: Get Ready",
  title: "Access the Scanner in One Click",
  subtitle:
    "No extra apps to download. Simply navigate to your event in the Organizer Dashboard and click 'Open Scanner'. Your device's camera is now a secure check-in terminal.",
  imageUrl:
    "https://placehold.co/800x600/1a202c/FFFFFF?text=Scanner+Access",
};

// --- Data for LeftSection: Point, Scan, and Go ---
// const pointAndScanData = {
//   preTitle: "Step 2: The Action",
//   title: "Point, Scan, and Welcome",
//   subtitle:
//     "Point your camera at the attendee's QR code on their phone or a printout. Our system recognizes the code instantly, without needing to perfectly align it.",
//   imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Point+%26+Scan",
// };

// --- Data for RightSection: Instant Verification ---
const instantVerificationData = {
  preTitle: "Step 3: The Magic",
  title: "Instant Verification, Zero Fraud",
  subtitle:
    "Each scan is instantly verified against your database in real-time. This prevents duplicate or invalid tickets from ever getting through, ensuring a secure and fair entry process for everyone.",
  imageUrl:
    "https://placehold.co/800x600/1a202c/FFFFFF?text=Secure+Validation",
};

// --- Data for LeftSection: Real-Time Attendee List ---
const realTimeListData = {
  preTitle: "Live Data Sync",
  title: "Your Attendee List, Always Updated",
  subtitle:
    "Every successful check-in instantly updates the attendee's status in your dashboard. You always have a live, accurate count of who has arrived, accessible from any device.",
  imageUrl:
    "https://placehold.co/800x600/1a202c/FFFFFF?text=Live+Attendee+List",
};

// --- Data for RightSection: Clear Feedback ---
const clearFeedbackData = {
  preTitle: "Clarity at the Gate",
  title: "Unmistakable Visual Feedback",
  subtitle:
    "Get clear, color-coded, full-screen feedback for every scan. Green for success, yellow for warnings like a duplicate scan, and red for invalid tickets, eliminating any confusion.",
  imageUrl:
    "https://placehold.co/800x600/1a202c/FFFFFF?text=Scan+Results",
};

// --- Data for LeftSection: Post-Event Insights ---
const postEventInsightsData = {
  preTitle: "After the Event",
  title: "Gain Valuable Attendance Insights",
  subtitle:
    "Your check-in data provides powerful insights. Understand your show-up rate, analyze peak arrival times, and use this information to plan even better events in the future.",
  imageUrl:
    "https://placehold.co/800x600/1a202c/FFFFFF?text=Attendance+Analytics",
};

const faqData = [
  {
    question: "What equipment do I need to scan tickets?",
    answer:
      "You don't need any special hardware. Any modern smartphone, tablet, or laptop with a camera and an internet connection can be used as a secure ticket scanner through our platform.",
  },
  {
    question: "Does the scanner require an internet connection to work?",
    answer:
      "Yes, a stable internet connection (Wi-Fi or mobile data) is required. This allows the scanner to communicate with our servers in real-time to validate each ticket and prevent duplicates.",
  },
  {
    question: "Can multiple staff members scan tickets at the same time?",
    answer:
      "Absolutely. You can have multiple team members logged into the organizer account on different devices, all scanning tickets simultaneously at various entry points for faster check-ins.",
  },
  {
    question:
      "What happens if an attendee's phone screen is cracked or the battery is dead?",
    answer:
      "We always recommend having a manual check-in option as a backup. From your dashboard, you can quickly look up an attendee by their name or email and check them in manually.",
  },
  {
    question:
      "How does the system prevent the same ticket from being used twice?",
    answer:
      "The first time a QR code is successfully scanned, its status is instantly marked as 'Checked-In' in your database. If another person tries to use the same QR code, the scanner will show a 'Warning: Already Checked In' message.",
  },
];


  return (
    <div className="bg-black">
      <ReusableHero {...heroData} />
      <RightSection {...accessScannerData} />
      <LeftSection {...instantVerificationData} />
      <RightSection {...realTimeListData} />
      <LeftSection {...clearFeedbackData} />
      <RightSection {...postEventInsightsData} />
      <FAQSection faqData={faqData} />
    </div>
  );
}
