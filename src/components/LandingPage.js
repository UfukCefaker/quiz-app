// components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import gsLogo from '../data/images/gs-logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz/1');
  };

  return (
    <div className="landing-page" style={styles.page}>
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <img 
            src={gsLogo}
            alt="Galatasaray Logo" 
            style={styles.logo}
          />
        </div>
        <h1 style={styles.title}>Galatasaray Quizine Hoşgeldiniz</h1>
        <p style={styles.description}>
          Galatasaray hakkında bilgilerinizi test edin ve ne kadar gerçek bir taraftar olduğunuzu görün!
        </p>
        <button onClick={handleStartQuiz} style={styles.button}>
          Quiz'e Başla
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#000',
    backgroundImage: 'linear-gradient(45deg, #000 0%, #1a1a1a 100%)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  content: {
    maxWidth: '800px',
    textAlign: 'center',
    padding: '40px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  },
  logoContainer: {
    marginBottom: '30px'
  },
  logo: {
    width: '150px',
    height: 'auto',
    marginBottom: '20px'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#FFD700', // Galatasaray sarısı
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    lineHeight: '1.6',
    color: '#E6E6E6'
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#FF1919', // Galatasaray kırmızısı
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 25, 25, 0.3)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 25, 25, 0.4)'
    }
  }
};

export default LandingPage;
