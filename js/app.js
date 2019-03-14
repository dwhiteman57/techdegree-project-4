/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//Test code



//Step 8: Build Start Game Method
let game;
let startButton = document.getElementById('btn__reset');

let startGame = () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
}

startButton.addEventListener("click", startGame, false);
