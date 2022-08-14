const SUITS = ["♥","♦","♠","♣"]
const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

export default class Deck {
    constructor(cards = freshDeck()) { //pass into the constructor
        this.cards = cards
    }

    //getter to get number of cards
    get numberOfCards() { 
        return this.cards.length
    }

    //randomly shuffles the arrays, like a leet code question
    shuffle() {
        this.cards.sort((a,b)=> Math.random()-0.5)
        // for (let i = this.numberOfCards - 1; i > 0; i--) {
        //     const newIndex = Math.floor(Math.random() * (i + 1)) //Random index before the current card
        //     const oldValue = this.cards[newIndex] //Swap current card with old card that we had 
        //     this.cards[newIndex] = this.cards[i] //L oop through all cards and swapping them with a card
        //     this.cards[i] = oldValue
        // }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    // get color() {
    //     return this.suit === "♣" || this.suit === "♠" ? 'black' : 'red'
    // }

    // getHTML() {
    //     const cardDiv = document.createElement('div')
    //     cardDiv.innerText = this.suitcardDiv.classList.add("card", this.color)
    //     cardDiv.dataset.value = `${this.value} ${this.suit}`
    //     return cardDiv
    // }
}


function freshDeck() {
    return SUITS.flatMap(suit =>{
        return VALUES.map(value=>{
            return new Card(suit,value)
        })
    })
}