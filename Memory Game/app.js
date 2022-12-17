const cardArray = [
    {
        name: "Angel",
        img: "./images/angel.jpeg"
    },
    {
        name: "Mary",
        img: "./images/annunciationMary.jpg"
    },
    {
        name: "Jesus",
        img: "./images/babyJesus.jpeg"
    },
    {
        name: "Donkey",
        img: "./images/donkeyMary.jpeg"
    },
    {
        name: "Gifts",
        img: "./images/gifts.jpeg"
    },
    {
        name: "Holy Family",
        img: "./images/holyFamily.jpeg"
    },
    {
        name: "Seek Him",
        img: "./images/seekHim.jpg"
    },
    {
        name: "Shepherds",
        img: "./images/shepherdsWorship.jpeg"
    },
    {
        name: "Stable",
        img: "./images/stable.jpg"
    },
    {
        name: "Star",
        img: "./images/star.jpeg"
    },
    {
        name: "Temple",
        img: "./images/templeSimeon.jpeg"
    },  
    {
        name: "Wisemen",
        img: "./images/wisemenTravel.jpeg"
    },
    {
        name: "Angel",
        img: "./images/angel.jpeg"
    },
    {
        name: "Mary",
        img: "./images/annunciationMary.jpg"
    },
    {
        name: "Jesus",
        img: "./images/babyJesus.jpeg"
    },
    {
        name: "Donkey",
        img: "./images/donkeyMary.jpeg"
    },
    {
        name: "Gifts",
        img: "./images/gifts.jpeg"
    },
    {
        name: "Holy Family",
        img: "./images/holyFamily.jpeg"
    },
    {
        name: "Seek Him",
        img: "./images/seekHim.jpg"
    },
    {
        name: "Shepherds",
        img: "./images/shepherdsWorship.jpeg"
    },
    {
        name: "Stable",
        img: "./images/stable.jpg"
    },
    {
        name: "Star",
        img: "./images/star.jpeg"
    },
    {
        name: "Temple",
        img: "./images/templeSimeon.jpeg"
    },  
    {
        name: "Wisemen",
        img: "./images/wisemenTravel.jpeg"
    },
]
// console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())
// console.log(cardArray)

const gridDisplay = document.querySelector("#grid")
// console.log(gridDisplay)
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/masChrist.jpg')
    card.setAttribute('data-id', i)
    card.setAttribute('height', 200)
    card.setAttribute('width', 120)
    card.setAttribute('space-around', 'yes')
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
    // console.log(card, i)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match!')

    if (optionOneId == optionTwoId) {
        alert('You found the same image!')
        cards[optionOneId].setAttribute('src', 'images/masChrist.jpg')
        cards[optionTwoId].setAttribute('src', 'images/masChrist.jpg')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/masChrist.jpg')
        cards[optionTwoId].setAttribute('src', 'images/masChrist.jpg')
        alert('Not a match! Try again.')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You found all the matches."
    }
}

function flipCard() {
    // console.log(cardArray)
    // console.log('clicked')
    const cardId = this.getAttribute('data-id')
    // console.log('clicked', cardId)
    // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    // console.log(cardsChosen)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
    

    
}