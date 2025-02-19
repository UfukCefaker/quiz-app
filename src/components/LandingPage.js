// components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Quiz'e 1. sorudan başlamak için yönlendir
    navigate('/quiz/1');
  };

  return (
    <div className="landing-page" style={styles.page}>
      <h1>Galatasaray Quizine Hoşgeldiniz</h1>
      <button onClick={handleStartQuiz} style={styles.button}>Quiz’e Başla</button>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default LandingPage;
