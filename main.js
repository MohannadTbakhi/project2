const cards = document.querySelectorAll(".the_card")

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if(this == firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    secondCard = this;

    checkForMAtch();
}


function checkForMAtch() {
    if (firstCard.dataset.img === secondCard.dataset.img) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
cards.forEach(card => {
    let randomPos = Math.floor(Math.random()*12)
    card.style.order = randomPos;
})
})();

cards.forEach(card => card.addEventListener("click", flipCard))


