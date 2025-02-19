// components/ResultPage.js
import React from 'react';

const ResultPage = () => {
  // Burada cevapların doğruluğu ve puan hesaplaması yapılabilir.
  // Örneğin, localStorage veya Context API ile cevaplar aktarılmış olabilir.
  return (
    <div style={styles.page}>
      <h1>Quiz Sonuçları</h1>
      {/* Puan ve seviyeyi hesaplayıp göster */}
      <p>Quiz tamamlandı!</p>
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
  }
};

export default ResultPage;
