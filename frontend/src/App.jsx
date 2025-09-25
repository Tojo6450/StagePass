import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './pages/navbar/Navbar';
import LandingPage from './pages/landingpage/LandingPage';
import OnboardingPage from './Auth/Onboardingpage';
import EventDetailPage from './components/attendee/Eventdetails';
import AllEvents from './components/attendee/AllEvents';
import Confirmationpage from './components/attendee/Confirmation';
import MyBookingsPage from './components/attendee/Dashboard';
import AuthCallback from './Auth/AuthCallback';
import EventForm from './components/organizer/EventForm';
import NotFoundPage from './helper/Notfound';
import ProtectedRoute from './Auth/ProtectedRoute';
import OrganizerDashboard from './components/organizer/Dashboard';
import ManageEventPage from './components/organizer/ManageEvent';
import AttendeeListPage from './components/organizer/AttendeeList';
import EventScannerPage from './components/organizer/EventScanner';
import EventPreviewPage from './components/organizer/Eventpreview';
import Footer from './pages/footer/Footer';
import Category from './components/attendee/Category';
import FeaturePage from './pages/features/Feature';
import WhyStagepass from './pages/WhyStagepass';
import SignInPage from './Auth/SignIn';
import SignUpPage from './Auth/SignUp';



const App = () => {
  return (
    <div className="pt-12">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/why-stagepass' element={<WhyStagepass />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
        <Route path='/auth-callback' element={<AuthCallback />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path='/allevents' element={<AllEvents />} />
        <Route path='/category/:categoryId' element={<Category />} />
        <Route path='/features/:featureId' element={<FeaturePage />} />
        <Route path='/events/:eventId' element={<EventDetailPage />} />
        <Route path='/confirmation' element={<Confirmationpage />} />
        <Route path='/my-bookings' element={
          <ProtectedRoute allowedRoles={['attendee']}>
            <MyBookingsPage />
          </ProtectedRoute>
        } />

        <Route path='/organizer-dashboard' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <OrganizerDashboard />
          </ProtectedRoute>
        } />
        <Route path='/newEvent' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <EventForm />
          </ProtectedRoute>
        } />
        <Route path='/create-success' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <EventPreviewPage />
          </ProtectedRoute>
        } />
        <Route path='/manage-event/:eventId' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <ManageEventPage />
          </ProtectedRoute>
        } />
        <Route path='/attendee-list/:eventId' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <AttendeeListPage />
          </ProtectedRoute>
        } />
        <Route path='/scanner/:eventId' element={
          <ProtectedRoute allowedRoles={['organizer']}>
            <EventScannerPage />
          </ProtectedRoute>
        } />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
