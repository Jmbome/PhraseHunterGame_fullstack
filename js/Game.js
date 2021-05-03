/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed=0;
        this.phrases=[
            {'phrase':'A blessing in disguise'},	
            {'phrase':'A dime a dozen'},
            {'phrase':'Beat around the bush'},
            {'phrase':'Better late than never'},
            {'phrase':'Bite the bullet'},
        
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
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase += this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();



};

}