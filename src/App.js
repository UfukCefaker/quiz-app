// App.js
import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz/:questionNumber" element={<Quiz />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;


