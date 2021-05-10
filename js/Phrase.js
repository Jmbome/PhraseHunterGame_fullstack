

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
                createli.classList.add("space");
            } else {
                createli.classList.add("hide");
                createli.classList.add("letter");
                createli.classList.add(selected);
            };

        });

    };


    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const display = document.querySelectorAll('.phrase, li');
        for (let i = 0; i < display.length; i++) {
            if (display[i].innerHTML === letter) {
                display[i].classList.add('show');
            }
        };

    };

};

