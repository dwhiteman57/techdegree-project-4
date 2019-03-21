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

   /* Create phrase method. Creates the phrases for the game and returns an array of phrases that can be used */
   createPhrases() {
     const phrase = [
       {phrase: 'and'},
       {phrase: 'bn'},
       {phrase: 'cn'},
       {phrase: 'dn'},
       {phrase: 'en'},
       {phrase: 'fn'}
     ];
     return phrase;
   }

   /* Create random phrase method. Selects random phrase from the phrases property. Return object chosen to be used */
   getRandomPhrase() {
     let selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
     return selPhrase;
   };

   startGame() {
     document.getElementById('overlay').style.display = "none";
     this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
     this.activePhrase.addPhraseToDisplay();
   }

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


   removeLife() {
     this.missed += 1;
     let heart = document.querySelector("img[src='images/liveHeart.png']");
     heart.src="images/lostHeart.png";

     if (this.missed === 5) {
       console.log('game over');
       this.gameOver();
     }
  }

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


   handleInteraction(button) {
     console.log(button);
   }


 }
