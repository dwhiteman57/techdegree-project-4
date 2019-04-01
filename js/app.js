/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



 /**
 * Calls start game
 */
let game;
let startButton = document.getElementById('btn__reset');

let startGame = () => {
  game = new Game();
  game.startGame();

  // Logged phrase to console for troubleshooting purposes
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
}

startButton.addEventListener("click", startGame, false);


/**
* Ensures only butten elements from the <div> with id="qwerty" and a class of '.key' fire
* Prevents event listener from firing unintentionally on any other element
*/
document.getElementById("qwerty").addEventListener("click",function(e) {
if (e.target && e.target.nodeName == "BUTTON") {
  let classes = e.target.className.split(" ");

  if (classes) {
      for (let i = 0; i < classes.length; i++) {
          if (classes[i] == "key") {
              console.log("letter element clicked!");
              game.handleInteraction(e.target);
          }
      }
  }

}
});
