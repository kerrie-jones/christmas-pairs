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

    //  Randomize, Create board, flip card and check for match code taken from https://www.youtube.com/watch?v=tjyDOHzKN0w Make Memory Game by Ania Kubow
// Randomise cards for each new board
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#score')
    const flipDisplay = document.querySelector('#flips')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var flips = []
    



    // Create game board
    function createBoard() {
        // loops over all the cards in the array and then appends them to the grid
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', '../assets/images/snowflake.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            // Adds images to .grid
            grid.appendChild(card)
        }
    }

    // Check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const firstCardId = cardsChosenId[0]
        const secondCardId = cardsChosenId[1] 
        if (cardsChosen[0] === cardsChosen[1]) {
            alert ('You found a match!')
            cards[firstCardId].setAttribute('src', '../assets/images/green_card.jpg')
            cards[secondCardId].setAttribute('src', '../assets/images/green_card.jpg')
            cardsWon.push(cardsChosen)
        } else {
            // if dont match flip back over and display snowflake 
            cards[firstCardId].setAttribute('src', '../assets/images/snowflake.jpg')
            cards[secondCardId].setAttribute('src', '../assets/images/snowflake.jpg')
            alert('Sorry! Try again, not a match!')
        }
        // if either happens clear cardschosen array and cardschosenId ready to start flipping again
        cardsChosen = []
        cardsChosenId = []

// If number of cards won = length of full array /2 all matches have been found
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found all the pairs'
        }
        // flipDisplay.textContent = 
        
    }


    // Flip Card
    function flipCard() {
        flips++;
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
flipDisplay.textContent = flips;

    }
    


createBoard()

})