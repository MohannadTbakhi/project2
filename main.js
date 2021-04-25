const cards = document.querySelectorAll(".the_card")

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

    
    }else{
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.img)
        console.log(secondCard.dataset.img)

        /*if(firstCard.dataset.img === secondCard.dataset.img){
            firstCard.removeEventListener("click", flipCard)
            secondCard.removeEventListener("click", flipCard)
        }else{
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        }*/
        
    
}
}
cards.forEach(card => card.addEventListener("click", flipCard))


