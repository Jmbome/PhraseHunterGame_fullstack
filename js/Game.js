/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed=0;
        this.phrases=[
            new Phrase('A blessing in disguise'),	
            new Phrase('A dime a dozen'),
            new Phrase('Beat around the bush'),
            new Phrase('Better late than never'),
            new Phrase('Bite the bullet'),
        
        ];

        this.activePhrase=null;
    }

    //Gets random phrases from phrases list 
    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randNum];
        return randPhrase;
    };



/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const hiddenLetters = document.querySelectorAll(".hide");

    if (hiddenLetters.length === 0) {
      return true;
    } else {
      return false;
    }
};

 /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    const hearts = document.querySelector(".tries img");
    hearts.setAttribute("src", "images/lostHeart.png");
    this.missed++;
    if (this.missed === 5) {
        this.gameOver();
      }
};


/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
        const gameOverMsg = document.getElementById("game-over-message");
        startScreen.style.display = "";

        if(gameWon) {
            gameOverMsg.textContent = `Congratulations! Great Guess ${0x1F600}!`;
            overlay.className = "win";
            button.textContent = "Play again";
            this.resetGame();
            
        } else {
            gameOverMsg.textContent = "Sorry, better luck next time!";
            overlay.className = "lose";
            button.textContent = "Try again";
            this.resetGame();
       };
};
 
}
