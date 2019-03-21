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
// Get the parent DIV, add click listener...
document.getElementById("qwerty").addEventListener("click",function(e) {
// e.target was the clicked element
if(e.target && e.target.nodeName == "BUTTON") {
  // Get the CSS classes
  var classes = e.target.className.split(" ");
  // Search for the CSS class!
  if(classes) {
      // For every CSS class the element has...
      for(var i = 0; i < classes.length; i++) {
          // If it has the CSS class we want...
          if(classes[i] == "key") {
              // Bingo!
              console.log("letter element clicked!");
              // Now do something here....
              game.handleInteraction(e.target);
          }
      }
  }

}
});
