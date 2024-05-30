import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import BookingForm from './components/BookingForm'; 
import ViewBookings from './components/ViewBookings'; 
import AdminDashboard from './components/AdminDashboard'; 
import RegisterPage from './components/RegisterPage';
// import ThemeTest from './components/ThemeTest';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/bookappointment" element={<BookingForm />} />
      <Route path="/viewbookings" element={<ViewBookings />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/register" element={<RegisterPage />} />


      {/* <Route path="/themetest" element={<ThemeTest />} /> */}
    </Routes>
  </div>
  );
}

export default App;
