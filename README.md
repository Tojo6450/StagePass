# 🎟️ StagePass - Full-Stack Event Ticketing Platform


StagePass is an all-in-one platform for **creating** and **experiencing live events**.  
Organizers get a powerful dashboard with real-time analytics and a QR code scanner, while attendees enjoy **secure payments** with Razorpay and **instant digital tickets** for a seamless event experience.

---

## ✨ Features

### 🎭 For Attendees
- **Event Discovery**: Browse a list of all available events, grouped by category  
- **Search & Filter**: Quickly find events by title or location  
- **Secure Payments**: Seamlessly purchase tickets via **Razorpay**  
- **Instant Digital Tickets**: Receive a unique, scannable **QR code ticket** upon booking  
- **Personal Dashboard**: Manage upcoming and past bookings in “My Bookings”  
- **Role-Based Authentication**: Secure sign-up/login powered by **Clerk**, with role selection  

### 🎤 For Organizers
- **Full CRUD for Events**: Create, update, and manage events with RBAC  
- **Image Uploads**: Upload event banners directly to **Cloudinary**  
- **AI-Powered Content**: Generate compelling event descriptions using the **Gemini API**  
- **Comprehensive Dashboard**: Track upcoming, live, and past events  
- **Real-Time Analytics**: Visualize revenue, ticket sales, and metrics with **Recharts**  
- **Attendee Management**: View and manage event attendees  
- **QR Code Scanner**: Built-in scanner to verify tickets and manage check-ins  

---

## 🛠️ Tech Stack

StagePass is built with a **modern and scalable stack** to deliver a smooth experience:

| Category          | Technology / Service |
|-------------------|-----------------------|
| **Frontend**      | React, Vite, Tailwind CSS, React Router, Recharts |
| **Backend**       | Node.js, Express.js |
| **Database**      | MongoDB with Mongoose (hosted on MongoDB Atlas) |
| **Authentication**| Clerk |
| **Payments**      | Razorpay |
| **Image Hosting** | Cloudinary |
| **Deployment**    | Frontend: Vercel, Backend: Render |
| **API**           | Gemini API for AI-generated content |

---

## 🏗️ Architecture / Workflow

The workflow below explains how StagePass operates for both **attendees** and **organizers**.

```mermaid
flowchart TD
    A[Attendee / Organizer] -->|Login / Signup| B[Clerk Authentication]
    B --> C[React Frontend (Vite + Tailwind)]
    C -->|API Requests| D[Express.js Backend]
    D --> E[MongoDB Atlas Database]
    D --> F[Razorpay Payments]
    D --> G[Cloudinary Image Hosting]
    D --> H[Gemini API - AI Descriptions]
    D --> I[QR Code Generator]
    I --> J[Digital Ticket with QR]
    E --> K[Organizer Dashboard]
    F --> K
    J --> K
    K -->|Charts / Metrics| L[Recharts Analytics]


