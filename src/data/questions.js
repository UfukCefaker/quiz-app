// data/questions.js
import question1 from './images/question1.jpg';
import question2 from './images/question2.jpg';
import question3 from './images/question3.jpg';
import question4 from './images/question4.jpg';
import question5 from './images/question5.jpg';
import question6 from './images/question6.jpg';
import question7 from './images/question7.webp';
import question8 from './images/question8.jpeg';
import question9 from './images/question9.jpg';
import question10 from './images/question10.webp';
import question11 from './images/question11.jpg';
import question12 from './images/question12.jpg';
const questions = [
    {
      id: 1,
      question: "Galatasarayımızın 3-1 kazandığı bu maç hangi sezonda oynanmıştır",
      options: ["2010-2011", "2011-2012", "2012-2013", "2013-2014"],
      image: question1 // public klasörüne eklediğin fotoğraf yolu
    },
    {
      id: 2,
      question: "Maçın son dakikasında fotodaki direkten dönen topa hangi efsane futbolcumuz vurmuştur?",
      options: ["Selçuk İnan", "Albert Riera", "Felipe Melo", "Milan Baros"],
      image: question2
    },
    {
        id: 3,
        question: "Wesley sniper sırasıyla bu maçta hangi köşelerden avlamıştır",
        options: ["Sol-Sol", "Sol-Sağ", "Sağ-Sol", "Sağ-Sağ"],
        image: question3
      },
      {
        id: 4,
        question: "İmparator teknik direktörlüğü boyunca fenere karşı kaç kez kazanmıştır?",
        options: ["8", "10", "12", "14"],
        image: question4
      },
      {
        id: 5,
        question: "Kadıköy lanetini bitirdiğimiz bu fotoğraftaki maç hangi sezondan?",
        options: ["2017-2018", "2018-2019", "2019-2020", "2020-2021"],
        image: question5
      },
      {
        id: 6,
        question: "Fb derbilerinde en fazla kırmızı kart yiyen futbolcumuz kimdir?",
        options: ["Emre Aşık", "Younes Belhanda", "Felipe Melo", "Sabri Sarıoğlu"],
        image: question6
      },
      {
        id: 7,
        question: "Son 10 derbide Galatasarayımız kaç kez galip gelmiştir?",
        options: ["3", "4", "5", "6"],
        image: question7
      },
      {
        id: 8,
        question: "Fb derbilerinde en fazla maça çıkan futbolcumuz kimdir?",
        options: ["Turgay Şeren", "Metin Oktay", "Fernando Muslera", "Cüneyt Tanman"],
        image: question8
      },
      {
        id: 9,
        question: "Can parçamız İcardi, fb derbilerinde totalde kaç kez fileleri sarsmıştır?",
        options: ["1", "2", "3", "4"],
        image: question9
      },
      {
        id: 10,
        question: "Muslera 32 Fb derbisinde görev almıştır, bunların kaçınca kalesini gole kapatmıştır?",
        options: ["8", "10", "12", "14"],
        image: question10
      },
      {
        id: 11,
        question: "İki takımda da forma giyen futbolcu hangisidir?",
        options: ["Turgay Şeren", "Saša Ilić", "Elvir Boliç", "Cüneyt Tanman"],
        image: question11
      },
      {
        id: 12,
        question: "30 cm lakaplı Shabani Nondanın golüyle kazandığımız bu derbi 2007-2008 sezonundan, sezonu Galatasarayımız kaç puan farkla şampiyon olarak bitirmiştir?",
        options: ["2","3","5","6"],
        image: question12
      },

    // Toplamda 20 soru ekle...
  ];
  
  export default questions;
  