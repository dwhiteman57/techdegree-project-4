/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Declare Game class & create constructor method */
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }


    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
     const phrase = [
       {phrase: 'hey meow'},
       {phrase: 'i am the eggman'},
       {phrase: 'star wars'},
       {phrase: 'get me those tps reports'},
       {phrase: 'tact is the ability to describe others as they see themselves'},
       {phrase: 'from now on i will connect the dots my own way'}
     ];
     return phrase;
    }

    /**
    * Selects random phrase from phrases property
    * @return {object} Phras object chosen to be used
    */
    getRandomPhrase() {
     let selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
     return selPhrase;
    };


    /**
    * Begins game by selecting a random phrase and displaying it to the user
    */
    startGame() {
     this.resetGame();
     document.getElementById('overlay').style.display = "none";
     this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
     this.activePhrase.addPhraseToDisplay();
    }


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
     let win = false;
     let selected = document.querySelectorAll('.hide').length;

       if (selected === 0) {
         win = true;
       } else {
         win = false;
       }

     return win;
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
     this.missed += 1;
     let heart = document.querySelector("img[src='images/liveHeart.png']");
     heart.src = "images/lostHeart.png";

     if (this.missed === 5) {
       console.log('game over');
       this.gameOver();
     }
    }


    /**
    * Displays game over message
    * @param{boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
    let overlay = document.querySelector('#overlay');
    let msg = document.querySelector('#game-over-message');

    if (gameWon) {
      overlay.style.display = '';
      overlay.className = 'win';
      msg.textContent = 'Great job, you won!';

    } else {
      overlay.style.display = '';
      overlay.className = 'lose';
      msg.textContent = 'Sorry, better luck next time!';
    }

    }


    /**
    * Handles onscreen keyboard button clicks
    * @param {HTMLButtonElement} button - The clicked button element
    */
    handleInteraction(button) {
     button.setAttribute("disabled", "disabled");

     if (this.activePhrase.checkLetter(button.innerHTML) === false) {
       button.classList.add('wrong');
       this.removeLife();
     } else if (this.activePhrase.checkLetter(button.innerHTML) === true) {
       this.activePhrase.showMatchedLetter(button.innerHTML);
       button.classList.add('chosen');
       if (this.checkForWin() === true) {
         this.gameOver(true);
       };
     }
     // Logged output of button in console for testing/troubleshooting
     console.log(button);
    }


    /**
    * Resets game when start game button is clicked
    * Removes all li elements from the phrase ul element
    * Enables onscreen keyboard buttons and updates each to the 'key' CSS class
    * Rests all heart images
    * Resets the missed count
    */
    resetGame() {
    let li = document.querySelectorAll("ul li");
    for (let i = 0; i < li.length; i++) {
      li[i].remove();
    }

    let letter = document.querySelectorAll("button");
    for (let i = 0; i < letter.length; i++) {
       letter[i].removeAttribute('disabled');
       letter[i].className = 'key';
    }

    let rHeart = document.querySelectorAll(".tries img");
    for (let i = 0; i < rHeart.length; i++) {
      rHeart[i].src = "images/liveHeart.png";
      this.missed = 0;
    }

  }

}
