

let game;
const button=document.getElementById(`btn__reset`);

//listens for click on the button element to start game
button.addEventListener('click',e =>{
    game=new Game();
    game.startGame();
})

