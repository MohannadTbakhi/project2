const cards = document.querySelectorAll(".the_card")

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        
    }else{
        hasFlppedCard = false;
        secondCard = this;

        console.log({firstCard, secondCard})
    }
}

cards.forEach(card => card.addEventListener("click", flipCard))



