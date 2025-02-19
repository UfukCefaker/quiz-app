// components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions';

const Quiz = () => {
  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const index = parseInt(questionNumber, 10) - 1;

  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (answers[index]) {
      setSelectedOption(answers[index]);
    } else {
      setSelectedOption('');
    }
  }, [index, answers]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    const updatedAnswers = { ...answers, [index]: selectedOption };
    setAnswers(updatedAnswers);
    
    // Save to localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
    
    if (index + 1 < questions.length) {
      navigate(`/quiz/${index + 2}`);
    } 
    else {
      // Before navigating to results, make sure all answers are saved
      localStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
      navigate('/result');
    }
  };

  const handlePrevious = () => {
    setAnswers(prev => ({ ...prev, [index]: selectedOption }));
    if (index > 0) {
      navigate(`/quiz/${index}`);
    }
  };

  const currentQuestion = questions[index];

  if (!currentQuestion) {
    return <div style={styles.errorPage}>Soru bulunamadı!</div>;
  }

  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="quiz-page" style={styles.page}>
      <div style={styles.progressBarContainer}>
        <div style={{...styles.progressBar, width: `${progress}%`}} />
      </div>
      <div style={styles.container}>
        <div style={styles.questionHeader}>
          <h2 style={styles.questionNumber}>Soru {index + 1}/{questions.length}</h2>
        </div>

        <div style={styles.questionContent}>
          <h3 style={styles.question}>{currentQuestion.question}</h3>
          
          {currentQuestion.image && (
            <div style={styles.imageContainer}>
              <img src={currentQuestion.image} alt="Soru görseli" style={styles.image} />
            </div>
          )}

          <div style={styles.options}>
            {currentQuestion.options.map((option, i) => (
              <label 
                key={i} 
                style={{
                  ...styles.optionLabel,
                  ...(selectedOption === option ? styles.selectedOption : {})
                }}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  style={styles.radioInput}
                />
                <span style={styles.optionText}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={styles.buttons}>
          {index > 0 && (
            <button onClick={handlePrevious} style={styles.buttonSecondary}>
              ← Önceki
            </button>
          )}
          <button 
            onClick={handleNext} 
            style={{
              ...styles.buttonPrimary,
              ...(selectedOption ? {} : styles.buttonDisabled)
            }} 
            disabled={!selectedOption}
          >
            {index + 1 === questions.length ? 'Bitir' : 'Sonraki →'}
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
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  progressBarContainer: {
    width: '100%',
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    transition: 'width 0.3s ease'
  },
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  },
  questionHeader: {
    marginBottom: '30px',
    textAlign: 'center'
  },
  questionNumber: {
    color: '#FFD700',
    fontSize: '1.2rem',
    fontWeight: '500'
  },
  questionContent: {
    marginBottom: '30px'
  },
  question: {
    fontSize: '1.5rem',
    marginBottom: '25px',
    lineHeight: '1.4',
    color: '#fff'
  },
  imageContainer: {
    width: '100%',
    height: '300px', // Fixed height for all images
    marginBottom: '25px',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)' // Background for images that don't fill container
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // This will maintain aspect ratio
    display: 'block'
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  optionLabel: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
  },
  selectedOption: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    borderColor: '#FFD700'
  },
  radioInput: {
    marginRight: '15px'
  },
  optionText: {
    fontSize: '1.1rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    gap: '15px'
  },
  buttonPrimary: {
    padding: '12px 25px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    backgroundColor: '#FF1919',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 25, 25, 0.3)',
    flex: 1
  },
  buttonSecondary: {
    padding: '12px 25px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    flex: 1
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  errorPage: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem'
  }
};

export default Quiz;