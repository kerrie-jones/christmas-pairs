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
            img: '../assets/images/ponsiettta.jpg'
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
            img: '../assets/images/rocking horse.jpg'
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
            img: '../assets/images/ponsiettta.jpg'
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
            img: '../assets/images/rocking horse.jpg'
        },
        {
            name: 'stocking',
            img: '../assets/images/stocking.jpg'
        },
    ]

    //  Game grid area

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', '../assets/images/snowflake.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()



})