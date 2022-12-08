document.addEventListener('DOMContentLoaded', function () {

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

    let grid = document.querySelector('.grid')
    let scoreDisplay = document.querySelector('#score')
    let flipDisplay = document.querySelector('#flips')
    let replayButton = document.querySelector('.replay-btn')
    let instructionsModal = document.querySelector('#instructions-popup')
    let winModal = document.querySelector('#win-popup')
    let btn = document.querySelector('.instructions-btn')
    let closeButton = document.querySelector('.close')

    let cardsChosen = []
    let cardsChosenId = []
    let pairsWon = []
    let flips = []


    createBoard()
    // Randomise cards for each new board
    cardArray.sort(() => 0.5 - Math.random())

    // Refreshes the page when replay button clicked 
    replayButton.addEventListener('click', reloadPage)
    function reloadPage() {
        document.location.reload()
    }

    // Create game board  https://www.youtube.com/watch?v=tjyDOHzKN0w
    function createBoard() {
        // loops over all the cards in the array and then appends them to the grid
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', '../assets/images/snowflake.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            // Adds images to .grid
            grid.appendChild(card)
        }
    }

    // flip card and check for match code initially taken from https://www.youtube.com/watch?v=tjyDOHzKN0w

    // Flip Card
    function flipCard() {
        flips++;
        // Prevents more than two cards being clicked
        if (cardsChosen.length != 2) {
            
            let cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        } else {
            card.setAttribute('src', '../assets/images/snowflake.jpg')
        }
        // displays no of flips 
        flipDisplay.textContent = flips;
    }
    // Check for match
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        let firstCardId = cardsChosenId[0]
        let secondCardId = cardsChosenId[1]
        // if same card is clicked twice it will flip back to snowflake
        if (firstCardId == secondCardId) {
            cards[firstCardId].setAttribute('src', '../assets/images/snowflake.jpg')
            cards[secondCardId].setAttribute('src', '../assets/images/snowflake.jpg')
            //  if pair matched green card shown instead of snowfla
        } else if (cardsChosen[0] === cardsChosen[1]) {
            pairsWon++;
            cards[firstCardId].setAttribute('src', '../assets/images/green_card.jpg')
            cards[secondCardId].setAttribute('src', '../assets/images/green_card.jpg')
            cards[firstCardId].removeEventListener("click", flipCard);
            cards[secondCardId].removeEventListener("click", flipCard);

            // if neither happens flip back over and display snowflake 
        } else {
            cards[firstCardId].setAttribute('src', '../assets/images/snowflake.jpg')
            cards[secondCardId].setAttribute('src', '../assets/images/snowflake.jpg')
        }
        // Displays no of pairs won 
        scoreDisplay.textContent = pairsWon;
        if (pairsWon == 10)
        winModal.style.display = "block"
       
    

        // if either happens clear cardschosen array and cardschosenId ready to start flipping again
        cardsChosen = []
        cardsChosenId = []

    }

    // Popup Modal for game instructions button code inspired by https://www.w3schools.com/howto/howto_css_modals.asp 

    btn.onclick = function () {
        instructionsModal.style.display = "block";
    }

    closeButton.onclick = function () {
        instructionsModal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == instructionsModal) {
            instructionsModal.style.display = "none";
        }
    }

})