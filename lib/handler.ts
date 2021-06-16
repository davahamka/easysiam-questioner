import { DataObject } from './interface';

/**
 * Function for fill the main question
 *
 * @param Object
 * @param elements
 */
export const fillQuestioner = (
  { score, suggestion }: DataObject,
  elements: HTMLCollectionOf<HTMLInputElement>
) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('type') == 'radio') {
      if (elements[i].getAttribute('value') == score) {
        elements[i].checked = true;
      }
    }
  }

  document
    .getElementById('saran')
    .appendChild(document.createTextNode(suggestion));
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type.toLowerCase() == 'submit') {
      elements[i].scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      elements[i].scrollIntoView();
    }
  }
};
