import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Course } from './pages/Course';
import { Register } from './pages/Register';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso" element={<Course />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
