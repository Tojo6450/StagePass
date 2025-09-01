import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import RightSection from "../reusable/RightSection";
import LeftSection from "../reusable/LeftSection";
import FAQSection from "../reusable/FAQsection";
export default function EventAnalytics() {
  // Custom data for each section of this specific page
  const heroData = {
    preTitle: "Data-Driven Decisions",
    title: "Understand Your Event's Performance",
    subtitle:
      "Unlock powerful insights with our analytics suite. Track sales, understand your audience, and measure your event's success in real-time to make smarter decisions for future events.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Analytics+Dashboard",
    buttons: [
      { text: "View Demo Dashboard", href: "#", primary: true },
      { text: "Explore Features", href: "#", primary: false },
    ],
  };

  const salesTrackingData = {
    preTitle: "Real-Time Sales Tracking",
    title: "Monitor Your Revenue as It Happens",
    subtitle:
      "Never fly blind again. Our dashboard provides a live look at ticket sales, revenue streams, and discount code performance. Know exactly where you stand at any moment.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Sales+Charts",
  };

  const attendeeInsightsData = {
    preTitle: "Attendee Insights",
    title: "Know Your Audience Better Than Ever",
    subtitle:
      "Go beyond simple numbers. Understand attendee demographics, track registration sources, and view geographic data to tailor your marketing and event content for maximum impact.",
    imageUrl:
      "https://placehold.co/800x600/1a202c/FFFFFF?text=Audience+Demographics",
  };

  const checkinMonitoringData = {
    preTitle: "Check-in Monitoring",
    title: "Track On-Site Engagement",
    subtitle:
      "Get a live pulse of your event as it unfolds. Monitor check-in rates and track attendance by ticket type to understand traffic flow and session popularity at the venue.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Live+Check-ins",
  };

  const marketingPerformanceData = {
    preTitle: "Marketing Performance",
    title: "Measure Your Campaign ROI",
    subtitle:
      "Connect your marketing efforts to actual ticket sales. See which channels—social media, email campaigns, or referrals—are driving the most registrations and optimize your strategy.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=Marketing+ROI",
  };

  const postEventReportsData = {
    preTitle: "Post-Event Reports",
    title: "Comprehensive Summaries, Instantly",
    subtitle:
      "Once your event is over, instantly generate and download detailed PDF reports. Get a full summary of sales, attendance, and revenue to share with stakeholders and plan for the future.",
    imageUrl: "https://placehold.co/800x600/1a202c/FFFFFF?text=PDF+Report",
  };


  //FAQ section data
  const faqData = [
    {
      question: "What types of reports can I generate?",
      answer:
        "Our platform offers a range of custom reporting tools. You can generate detailed reports on attendee engagement, ticket sales, session popularity, and revenue, providing you with comprehensive insights into your event's performance.",
    },
    {
      question: "How does the platform integrate with Google Analytics?",
      answer:
        "You can easily add your Google Analytics Tracking ID in your event settings. This will automatically sync attendee and registration data, allowing you to track your marketing funnel and user behavior directly within your Google Analytics dashboard.",
    },
    {
      question: "Can I access real-time data during the event?",
      answer:
        "Absolutely. The organizer dashboard provides live data on check-ins, ticket sales, and on-site attendance. This allows you to monitor your event's pulse and make informed decisions as it happens.",
    },
    {
      question: "How can I track the ROI for my sponsors and exhibitors?",
      answer:
        "You can create unique tracking links and discount codes for each sponsor. Our analytics will show you exactly how many registrations and how much revenue each link or code generated, giving you clear data on their return on investment.",
    },
  ];

  return (
    <div className="bg-black">
      <ReusableHero {...heroData} />
      <RightSection {...salesTrackingData} />
      <LeftSection {...attendeeInsightsData} />
      <RightSection {...checkinMonitoringData} />
      <LeftSection {...marketingPerformanceData} />
      <RightSection {...postEventReportsData} />
      <FAQSection faqData={faqData}/>
    </div>
  );
}
