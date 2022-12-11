document.addEventListener('DOMContentLoaded', function () {

    const cardArray = [{
            name: 'car tree',
            img: 'assets/images/car_tree.jpg',
        },
        {
            name: 'christmas tree',
            img: 'assets/images/christmas_tree.jpg',
        },
        {
            name: 'holly',
            img: 'assets/images/holly.jpg'
        },
        {
            name: 'pinecone',
            img: 'assets/images/pinecone.jpg'
        },
        {
            name: 'polar bear',
            img: 'assets/images/polar_bear.jpg'
        },
        {
            name: 'ponsietta',
            img: 'assets/images/ponsietta.jpg'
        },
        {
            name: 'present',
            img: 'assets/images/present.jpg'
        },
        {
            name: 'robin',
            img: 'assets/images/robin.jpg'
        },
        {
            name: 'rocking horse',
            img: 'assets/images/rocking_horse.jpg'
        },
        {
            name: 'stocking',
            img: 'assets/images/stocking.jpg'
        },
        {
            name: 'car tree',
            img: 'assets/images/car_tree.jpg',
        },
        {
            name: 'christmas tree',
            img: 'assets/images/christmas_tree.jpg',
        },
        {
            name: 'holly',
            img: 'assets/images/holly.jpg'
        },
        {
            name: 'pinecone',
            img: 'assets/images/pinecone.jpg'
        },
        {
            name: 'polar bear',
            img: 'assets/images/polar_bear.jpg'
        },
        {
            name: 'ponsietta',
            img: 'assets/images/ponsietta.jpg'
        },
        {
            name: 'present',
            img: 'assets/images/present.jpg'
        },
        {
            name: 'robin',
            img: 'assets/images/robin.jpg'
        },
        {
            name: 'rocking horse',
            img: 'assets/images/rocking_horse.jpg'
        },
        {
            name: 'stocking',
            img: 'assets/images/stocking.jpg'
        },
    ];

    let grid = document.querySelector('.grid');
    let scoreDisplay = document.querySelector('.score');
    let flipDisplay = document.querySelector('.flips');
    let flipWinDisplay = document.querySelector('.win-flips')

    let replayButton = document.querySelector('.replay-btn');
    let instructionsModal = document.querySelector('#instructions-popup');
    let winModal = document.querySelector('#win-popup');
    let btn = document.querySelector('.instructions-btn');
    let closeButton = document.querySelector('.close');

    let cardsChosen = [];
    let cardsChosenId = [];
    let pairsWon = [];
    let flips = [];


    createBoard();
    // Randomise cards for each new board
    cardArray.sort(() => 0.5 - Math.random());

    // Refreshes the page when replay button clicked 
    replayButton.addEventListener('click', reloadPage);

    function reloadPage() {
        document.location.reload();
    }

    // Create game board taken from https://www.youtube.com/watch?v=tjyDOHzKN0w
    function createBoard() {
        // loops over all the cards in the array and then appends them to the grid
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/images/snowflake.jpg');
            // loops over each card and gives id from 0 to 19
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            // Adds images to .grid
            grid.appendChild(card);
        }
    }

    // flip card and check for match code initially taken and from https://www.youtube.com/watch?v=tjyDOHzKN0w

    // Flip Card
    function flipCard() {
        // incrementally increase number of flips each time function is run
        flips++;

        if (cardsChosen.length < 2) {

            let cardId = this.getAttribute('data-id');
            // pushes the id and name into the empty cardschosen array 
            cardsChosen.push(cardArray[cardId].name);
            // pushes id into the empty cardsId array
            cardsChosenId.push(cardId);
            // Adds the image to that square
            this.setAttribute('src', cardArray[cardId].img);
            // if cardschosen is 2 call function: check for match
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
            // if third card flipped img will remain as snowflake 
        } else {
            this.setAttribute('src', 'assets/images/snowflake.jpg');
        }
        // displays no of flips in flip counter and if won in the popup modal box
        flipDisplay.textContent = flips;
        flipWinDisplay.textContent = flips;

    }
    // Check for match (2 values now in cardsChosen array and cardsChosenId array from flipcard function)
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        /* if same card clicked twice flip back to snowflake img */
        let firstCardId = cardsChosenId[0];
        let secondCardId = cardsChosenId[1];
        if (firstCardId === secondCardId) {
            cards[firstCardId].setAttribute('src', 'assets/images/snowflake.jpg');
            cards[secondCardId].setAttribute('src', 'assets/images/snowflake.jpg');
            //  if pair matched green card shown instead of snowflake and pairsWon to incrmentally increase
        } else if (cardsChosen[0] === cardsChosen[1]) {
            pairsWon++;
            cards[firstCardId].setAttribute('src', 'assets/images/green_card.jpg');
            cards[secondCardId].setAttribute('src', 'assets/images/green_card.jpg');
            cards[firstCardId].removeEventListener("click", flipCard);
            cards[secondCardId].removeEventListener("click", flipCard);

            // if neither happens flip back over and display snowflake img
        } else {
            cards[firstCardId].setAttribute('src', 'assets/images/snowflake.jpg');
            cards[secondCardId].setAttribute('src', 'assets/images/snowflake.jpg');
        }
        // Displays no of pairs won in flip counter
        scoreDisplay.textContent = pairsWon;
        if (pairsWon == 10)
        // displays modal poup box 
            winModal.style.display = "block";

        // Clear cardschosen array and cardschosenId so back to empty for next flip
        cardsChosen = [];
        cardsChosenId = [];

    }

    // Popup Modal for game instructions button code inspired by https://www.w3schools.com/howto/howto_css_modals.asp 

    btn.onclick = function () {
        instructionsModal.style.display = "block";
    };

    closeButton.onclick = function () {
        instructionsModal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == instructionsModal) {
            instructionsModal.style.display = "none";
        }
    };



    // Countdown Timer code inspired by https://www.youtube.com/watch?v=V-Mcul5kS_Y and https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
    let christmas = new Date('Dec 25, 2022')
    // 1000 milliseconds in a second
    let second = 1000;
    let hour = 1000 * 60 * 60;
    let day = 1000 * 60 * 60 * 24;

    function countDown() {
        // needs todays time for each interval
        let todaysDate = new Date()
        let difference = christmas - todaysDate;

        let days = Math.floor(difference / day);
        let hours = Math.floor((difference % day) / hour);

        if (difference > 0) {
            document.getElementById('countdown').innerHTML = days + " days " + hours + " hours " + " to Christmas!";
        } else {
            clearInterval(countDownInterval);
            Document.getElementById.innerHTML = "Happy Christmas!"
        }
    }

    // runs countdown function every second
    let countDownInterval = setInterval(countDown, second);


});