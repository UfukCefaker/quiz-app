import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';

const ResultPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState('');
  const [animation, setAnimation] = useState(false);

  // Correct answers array (you need to add your correct answers here)
  const correctAnswers = [
    "2011-2012",  // Example answer for question 1
    "Milan Baros",
    "Sol-Sağ",
    "10",
    "2019-2020",
    "Emre Aşık",
    "5",
    "Turgay Şeren",
    "3",
    "14",
    "Elvir Boliç",
    "6"
  ];

  useEffect(() => {
    // Get stored answers from localStorage
    const userAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    
    // Calculate score
    const totalQuestions = questions.length;
    let correctCount = 0;

    // Debug logging
    console.log('User Answers:', userAnswers);
    console.log('Correct Answers:', correctAnswers);

    // Compare answers
    Object.keys(userAnswers).forEach(questionIndex => {
      const userAnswer = userAnswers[questionIndex];
      const correctAnswer = correctAnswers[questionIndex];
      
      console.log(`Question ${parseInt(questionIndex) + 1}:`, {
        userAnswer,
        correctAnswer,
        isCorrect: userAnswer === correctAnswer
      });

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const percentage = (correctCount / totalQuestions) * 100;
    setScore(percentage);

    // Determine level based on percentage
    if (percentage === 100) {
      setLevel('C2 - Ultra Aslan');
    } else if (percentage >= 85) {
      setLevel('C1 - Düğününde bile telefondan maçı açıcaksın gibi kral');
    } else if (percentage >= 70) {
      setLevel('B2 - İcardi ve Drogba forması çekmişsin belli');
    } else if (percentage >= 55) {
      setLevel('B1 - Evde 1 adet 12 Numara Drogba forman var gibi');
    } else if (percentage >= 40) {
      setLevel('A2 - Az daha maç izle');
    } else {
      setLevel('A1 - Sg feneri tut');
    }

    // Trigger animation
    setAnimation(true);
  }, []);

  const handleRetry = () => {
    localStorage.removeItem('quizAnswers');
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Quiz Sonuçları</h1>
          
          <div style={styles.scoreContainer}>
            <div style={{
              ...styles.scoreCircle,
              background: `conic-gradient(#FFD700 ${score}%, #1a1a1a ${score}%)`
            }}>
              <div style={styles.scoreInner}>
                <span style={styles.scoreText}>{Math.round(score)}%</span>
              </div>
            </div>
          </div>

          <div style={styles.levelContainer}>
            <h2 style={styles.levelTitle}>Taraftar Seviyeniz</h2>
            <div style={styles.levelBadge}>{level}</div>
          </div>

          <div style={styles.statsContainer}>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Toplam Soru</span>
              <span style={styles.statValue}>{questions.length}</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Doğru Cevap</span>
              <span style={styles.statValue}>
                {Math.round((score / 100) * questions.length)}
              </span>
            </div>
          </div>

          <button onClick={handleRetry} style={styles.button}>
            Yeniden Dene
          </button>
        </div>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  container: {
    width: '100%',
    maxWidth: '800px',
    padding: '40px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  },
  content: {
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: '#FFD700',
    marginBottom: '40px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  scoreContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px'
  },
  scoreCircle: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 1s ease-in-out'
  },
  scoreInner: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FFD700'
  },
  levelContainer: {
    marginBottom: '40px'
  },
  levelTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '15px'
  },
  levelBadge: {
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '30px',
    backgroundColor: '#FFD700',
    color: '#000',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginBottom: '40px'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#999',
    marginBottom: '5px'
  },
  statValue: {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 'bold'
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#FF1919',
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

export default ResultPage;