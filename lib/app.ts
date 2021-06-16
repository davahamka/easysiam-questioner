import { fillQuestioner } from './handler.js';

const score = prompt('Masukkan nilai (1-5): ', '4');
const suggestion = prompt('Masukkan saran: ', 'Perbanyak tugas pak/bu!');
const inputElements = document.getElementsByTagName('input');

console.log('object');

const start = () => {
  if (suggestion == null || suggestion == '') {
    alert('EASYSIAM terminated.');
  } else {
    fillQuestioner({ score, suggestion }, inputElements);
  }
};

start();
