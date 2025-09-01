import React from 'react';
import { PlaceholderIcon } from '../../helper/Icons';

export const featuresMenu = {
  items: [
  { 
    id: "platform-overview", 
    path: "/features/platform-overview", 
    icon: <PlaceholderIcon />, 
    title: "Platform Overview", 
    description: "Manage all your events in one place" 
  },
  { 
    id: "event-analytics", 
    path: "/features/event-analytics", 
    icon: <PlaceholderIcon />, 
    title: "Event Analytics", 
    description: "Track and analyze event performance" 
  },
  { 
    id: "quick-check-in", 
    path: "/features/quick-check-in", 
    icon: <PlaceholderIcon />, 
    title: "Quick Check-In", 
    description: "Fast and secure attendee check-in" 
  },
  { 
    id: "sell-tickets", 
    path: "/features/sell-tickets", 
    icon: <PlaceholderIcon />, 
    title: "Ticket Sales", 
    description: "Easily sell and manage attendee tickets" 
  },
  { 
    id: "smart-tickets", 
    path: "/features/smart-tickets", 
    icon: <PlaceholderIcon />, 
    title: "Smart Tickets", 
    description: "Offer intelligent, flexible ticketing options" 
  },
],
cta:null,}


export const categoryMenu = {
  items: [
    { id: "tech-meetups", path: "/category/tech-meetups", icon: <PlaceholderIcon />, title: "Tech Meetups", description: "Connect with the tech community" },
    { id: "workshops-training", path: "/category/workshops-training", icon: <PlaceholderIcon />, title: "Workshops & Training", description: "Enhance your skills" },
    { id: "open-mic-comedy", path: "/category/open-mic-comedy", icon: <PlaceholderIcon />, title: "Open Mic & Comedy", description: "Enjoy a night of laughter" },
    { id: "fitness-bootcamp", path: "/category/fitness-bootcamp", icon: <PlaceholderIcon />, title: "Fitness & Bootcamp", description: "Get active and healthy" },
  ],
  cta: null,
};

