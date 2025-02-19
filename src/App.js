import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
      </Routes>
    </Router>
  );
}
// <Route path="/quiz/:questionNumber" element={<Quiz />} />
// <Route path="/result" element={<ResultPage />} />
export default App;

