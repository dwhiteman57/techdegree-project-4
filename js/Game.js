/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Declare Game class */
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   createPhrases() {
     const phrase = [
       {phrase: 'Life is like a box of choclates'},
       {phrase: 'If you can dodge a wrench you can dodge a ball'},
       {phrase: 'I am the eggman'},
       {phrase: 'I am the walrus'},
       {phrase: 'Be awesome today'}
     ];
     return phrase;
   }

   getRandomPhrase() {
     let selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
     return selPhrase;
   };
 }
