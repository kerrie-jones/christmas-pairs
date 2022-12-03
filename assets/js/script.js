document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'car tree',
            img: '../assets/images/car_tree.jpg',
        },
        {
            name: 'christmas tree',
            img: '../assets/images/christmas_tree.jpg',
        },
        {
            name: 'holly',
            img: '../assets/images/holly.jpg'
        },
        {
            name: 'pinecone',
            img: '../assets/images/pinecone.jpg'
        },
        {
            name: 'polar bear',
            img: '../assets/images/polar_bear.jpg'
        },
        {
            name: 'ponsietta',
            img: '../assets/images/ponsietta.jpg'
        },
        {
            name: 'present',
            img: '../assets/images/present.jpg'
        },
        {
            name: 'robin',
            img: '../assets/images/robin.jpg'
        },
        {
            name: 'rocking horse',
            img: '../assets/images/rocking_horse.jpg'
        },
        {
            name: 'stocking',
            img: '../assets/images/stocking.jpg'
        },
        {
            name: 'car tree',
            img: '../assets/images/car_tree.jpg',
        },
        {
            name: 'christmas tree',
            img: '../assets/images/christmas_tree.jpg',
        },
        {
            name: 'holly',
            img: '../assets/images/holly.jpg'
        },
        {
            name: 'pinecone',
            img: '../assets/images/pinecone.jpg'
        },
        {
            name: 'polar bear',
            img: '../assets/images/polar_bear.jpg'
        },
        {
            name: 'ponsietta',
            img: '../assets/images/ponsietta.jpg'
        },
        {
            name: 'present',
            img: '../assets/images/present.jpg'
        },
        {
            name: 'robin',
            img: '../assets/images/robin.jpg'
        },
        {
            name: 'rocking horse',
            img: '../assets/images/rocking_horse.jpg'
        },
        {
            name: 'stocking',
            img: '../assets/images/stocking.jpg'
        },
    ]

    //  Create board, flip card and check for match code taken from https://www.youtube.com/watch?v=tjyDOHzKN0w Make Memory Game by Ania Kubow
// Randomise cards for each new board
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#score')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', '../assets/images/snowflake.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            // Add images to .grid
            grid.appendChild(card)
        }
    }

    // Check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1] 
        if (cardsChosen[0] === cardsChosen[1]) {
            alert ('You found a pair!')
            cards[optionOneId].setAttribute('src', '../assets/images/green_card.jpg')
            cards[optionTwoId].setAttribute('src', '../assets/images/green_card.jpg')
            cardsWon.push(cardsChosen)
        } else {
            // if dont match flip back over and display snowflake 
            cards[optionOneId].setAttribute('src', '../assets/images/snowflake.jpg')
            cards[optionTwoId].setAttribute('src', '../assets/images/snowflake.jpg')
            alert('Sorry! Try again!')
        }
        // if either happens clear cardschosen array and cardschosenId ready to start flipping again
        cardsChosen = []
        cardsChosenId = []
// If no of cards won = length of full array /2 all matches have been found
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found all the pairs'
        }
        
    }


    // Flip Card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    


createBoard()

})