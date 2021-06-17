import { fillQuestioner } from './handler.js';
import { random } from './randomizer.js';
import { review } from './data/review.js';

const randomNumber = random(review);
const score = prompt('Masukkan nilai (1-5): ', '4');
const suggestion = prompt('Masukkan saran: ', review[randomNumber]);
const inputElements = document.getElementsByTagName('input');

const start = () => {
  if (suggestion == null || suggestion == '') {
    alert('EASYSIAM terminated.');
  } else {
    fillQuestioner({ score, suggestion }, inputElements);
  }
};

start();
