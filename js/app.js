

let game;
const button=document.getElementById(`btn__reset`);

//listens for click on the button element to start game
button.addEventListener('click',e =>{
    game=new Game();
    game.startGame();
})


const keys= document.getElementById("qwerty");

keys.addEventListener("click", (key) => {
    const buttonClicked = key.target;
    if (buttonClicked.tagName === 'BUTTON') {
    game.handleInteraction(key.target)
    }
});