import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Vidyapeeth from './pages/Vidyapeeth';
import Upskilling from './pages/Upskilling';
import RealTest from './pages/RealTest';
import Classes from './pages/Classes';
import PowerBatch from './pages/PowerBatch';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Join from './pages/Join';
import EnrollmentPage from './pages/EnrollmentPage';
import StudentDashboard from './pages/StudentDashboard';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/vidyapeeth" element={<Vidyapeeth />} />
            <Route path="/upskilling" element={<Upskilling />} />
            <Route path="/real-test" element={<RealTest />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/power-batch" element={<PowerBatch />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/join" element={<Join />} />
            <Route path="/enroll/:courseId" element={<EnrollmentPage />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;