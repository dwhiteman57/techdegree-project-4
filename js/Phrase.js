/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Declare Phrase class & create constructor method */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }


  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const message = this.phrase;
    const dispWord = document.querySelector('ul');
    let text = '';

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        text += "<li class='space'> </li>";
      } else {
        text += `<li class='hide letter ${message[i]}'>${message[i]}</li>`
      }
    }
    dispWord.innerHTML = text;
  }


  /**
  * Checks if passed letter is in phrase
  * @param {string} letter - Letter to check
  */
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
    if (this.phrase[i] === letter) {
        return true;
      }
    }
    return false;
  };


  /**
  * Displays passesd letter on screen after a match is found
  * @param {string} letter - Letter to display
  */
  showMatchedLetter(letter) {
    let selected = document.querySelectorAll('ul li');
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].textContent === letter) {
        selected[i].classList.remove('hide');
        selected[i].classList.add('show');
      }
    }
  };



}
