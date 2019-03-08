/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Declare Phrase class & create constructor method */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /* Display phrase on game board
  * Convert phrase string to individual letters using split("")
  * Somehow compare the phrase with the letters from "#qwerty or .keyrow"
  * Add those letters to the phrase div as li elements
  */

  addPhraseToDisplay() {
    const message = this.phrase;
    const dispWord = document.querySelector('ul');
    let text = '';

    for (let i = 0; i < message.length; i++) {
      if (message[i] == ' ') {
        text += "<li class='hide space'> </li>";
      } else {
        text += `<li class='hide letter ${message[i]}'>${message[i]}</li>`
      }
    }
    dispWord.innerHTML = text;
  }
}
