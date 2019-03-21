/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//Test code here



//App code
let game;
let startButton = document.getElementById('btn__reset');

let startGame = () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
}

startButton.addEventListener("click", startGame, false);




// Makes sure only button elements from <div> with id="qwerty" & a class of key fire. Prevents event listener from firing unintentionally

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
