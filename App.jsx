import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Makharij from './pages/Makharij';
import TajweedLessons from './pages/TajweedLessons';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 text-blue-700 underline">
          <Link to="/">Home</Link>
          <Link to="/makharij">Makharij</Link>
          <Link to="/lessons">Lessons</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makharij" element={<Makharij />} />
          <Route path="/lessons" element={<TajweedLessons />} />
        </Routes>
      </div>
    </Router>
  );
}
