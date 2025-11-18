// src/LayoutRoutes.js (or src/LayoutRoutes.jsx)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';

// Import layout components
import Header from './components/header/Header'; // Assuming location
import Footer from './components/footer/Footer'; // Assuming location

function LayoutRoutes() {
  return (
    <Router>
      <Header /> {/* Your header component */}
      <Routes>
        {/* The first Route seems to be the base path */}
        <Route path='/' element={<Home />} />
        <Route path='/Web-Project' element={<Home />} />
        
        {/* This second Route is a common structure for GitHub Pages deployment */}
        <Route path='/edutech-react-web' element={<Home />} /> 
        
        <Route path='/about' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer /> {/* Your footer component */}
    </Router>
  );
}