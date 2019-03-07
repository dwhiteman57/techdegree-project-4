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
       {phrase: 'Life is like a box of choclates'},
       {phrase: 'May the force be with you'},
       {phrase: 'I am the eggman'},
       {phrase: 'I am the walrus'},
       {phrase: 'Be awesome today'}
     ];
     return phrase;
   }

   /* Create random phrase method. Selects random phrase from the phrases property. Return object chosen to be used */
   getRandomPhrase() {
     let selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
     return selPhrase;
   };
 }
