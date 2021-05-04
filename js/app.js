

let game;
const botton=document.getElementById(`btn__reset`);

//listens for click on the button element to start game
botton.addEventListener('click',e =>{
    game=new Game();
    game.startGame();
})

game.activePhrase.checkLetter('a')