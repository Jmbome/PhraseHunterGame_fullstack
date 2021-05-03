/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ulList = document.querySelector('#phrase ul');
        this.phrase.split('').forEach(selected => {
            let createli = document.createElement('li');
            ulList.appendChild(createli);
            createli.innerHTML = selected;

            if (selected === ' ') {
                createli.classList.add("hide");
                createli.classList.add("space");
            } else {
                createli.classList.add("hide");
                createli.classList.add("letter");
                createli.classList.add(selected);
            };

        });

    };


};

