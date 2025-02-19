// components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions'; // soruları içeren bir JSON veya JS dosyası

const Quiz = () => {
  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const index = parseInt(questionNumber, 10) - 1; // soru dizisi sıfırdan başlar

  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState({}); // kullanıcının cevaplarını saklamak

  useEffect(() => {
    // Sayfa değiştiğinde önceki cevabı varsa onu set et
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
    // Cevabı kaydet
    setAnswers(prev => ({ ...prev, [index]: selectedOption }));
    if (index + 1 < questions.length) {
      navigate(`/quiz/${index + 2}`);
    } else {
      // Tüm sorular bittiyse sonuç sayfasına yönlendir
      navigate('/result');
    }
  };

  const handlePrevious = () => {
    // Cevabı kaydetmeden önceki sayfaya git
    setAnswers(prev => ({ ...prev, [index]: selectedOption }));
    if (index > 0) {
      navigate(`/quiz/${index}`);
    }
  };

  const currentQuestion = questions[index];

  if (!currentQuestion) {
    return <div style={{ color: '#fff', backgroundColor: '#000', minHeight: '100vh' }}>Soru bulunamadı!</div>;
  }

  return (
    <div className="quiz-page" style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.question}>{currentQuestion.question}</h2>
        {/* Soruya özel fotoğraf */}
        {currentQuestion.image && (
          <img src={currentQuestion.image} alt="Soru görseli" style={styles.image} />
        )}

        <div style={styles.options}>
          {currentQuestion.options.map((option, i) => (
            <label key={i} style={styles.optionLabel}>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
        <div style={styles.buttons}>
          {index > 0 && (
            <button onClick={handlePrevious} style={styles.button}>
              Önceki
            </button>
          )}
          <button onClick={handleNext} style={styles.button} disabled={!selectedOption}>
            Onayla ve {index + 1 === questions.length ? 'Bitir' : 'Sonraki'}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    maxWidth: '600px',
    padding: '20px'
  },
  question: {
    marginBottom: '20px'
  },
  image: {
    maxWidth: '100%',
    marginBottom: '20px'
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  optionLabel: {
    marginBottom: '10px',
    fontSize: '18px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default Quiz;