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
    const text = this.phrase;
    const dispArea = document.getElementById("phrase");
    const dispWord = document.getElementsByTagName("ul")[0];

    for (let char of text) {
      const newLi = document.createElement("li");
      newLi.classList.add("hide");
      if (char === " ") {
        newLi.classList.add("space");
      } else {
        newLi.classList.add("letter");
      }

      newLi.textContent = char;
      dispWord.appendChild(newLi);
    }
    dispArea.appendChild(dispWord);
    return dispArea;
  }
}
