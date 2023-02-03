document.addEventListener('DOMContentLoaded', () => {

let gameCardList = [
    {
        name: 'apple',
        img: 'images/apple.svg'
    },
    {
        name: 'beer',
        img: 'images/beer.svg'
    },
    {
        name: 'burger',
        img: 'images/burger.svg'
    },
    {
        name: 'cake',
        img: 'images/cake.svg'
    },
    {
        name: 'carrot',
        img: 'images/carrot.svg'
    },
    {
        name: 'cheese',
        img: 'images/cheese.svg'
    },
    {
        name: 'coffee',
        img: 'images/coffee.svg'
    },
    {
        name: 'cookie',
        img: 'images/cookie.svg'
    },
    {
        name: 'egg',
        img: 'images/egg.svg'
    },
    {
        name: 'fish',
        img: 'images/fish.svg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.svg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.svg'
    },
    {
        name: 'lemon',
        img: 'images/lemon.svg'
    },
    {
        name: 'pepper',
        img: 'images/pepper.svg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.svg'
    },
    {
        name: 'rice',
        img: 'images/rice.svg'
    },
    {
        name: 'utensils',
        img: 'images/utensils.svg'
    },
    {
        name: 'water',
        img: 'images/water.svg'
    },
    {
        name: 'apple',
        img: 'images/apple.svg'
    },
    {
        name: 'beer',
        img: 'images/beer.svg'
    },
    {
        name: 'burger',
        img: 'images/burger.svg'
    },
    {
        name: 'cake',
        img: 'images/cake.svg'
    },
    {
        name: 'carrot',
        img: 'images/carrot.svg'
    },
    {
        name: 'cheese',
        img: 'images/cheese.svg'
    },
    {
        name: 'coffee',
        img: 'images/coffee.svg'
    },
    {
        name: 'cookie',
        img: 'images/cookie.svg'
    },
    {
        name: 'egg',
        img: 'images/egg.svg'
    },
    {
        name: 'fish',
        img: 'images/fish.svg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.svg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.svg'
    },
    {
        name: 'lemon',
        img: 'images/lemon.svg'
    },
    {
        name: 'pepper',
        img: 'images/pepper.svg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.svg'
    },
    {
        name: 'rice',
        img: 'images/rice.svg'
    },
    {
        name: 'utensils',
        img: 'images/utensils.svg'
    },
    {
        name: 'water',
        img: 'images/water.svg'
    }
]

gameCardList.sort(() => 0.5 - Math.random())

let gameGrid = document.getElementById('grid');
let gameBoard = document.querySelector('main');
let cardsChosen = [];
let cardsChosenID = [];
let matchedCards = [];
let gameOver = document.getElementById('game_over');
let gameOverBtn = document.getElementById('restart_btn');

function createBoard() {
    for (let i = 0; i < gameCardList.length; i++) {
        let gameCard = document.createElement('img');
        gameCard.setAttribute('src', 'images/blank.svg');
        gameCard.setAttribute('data-id', i);
        gameCard.setAttribute('data-name', gameCardList[i].name);
        gameCard.addEventListener('click', revealCard)
        gameGrid.appendChild(gameCard)
    }
}

let minutesLabel = document.querySelector(".minutes");
let secondsLabel = document.querySelector(".seconds");
let finalMinutesLabel = document.querySelector(".final_minutes");
let finalSecondsLabel = document.querySelector(".final_seconds");
let totalSeconds = 0;
let timer = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function revealCard() {
    let cardID = this.dataset.id;
    if (checkMatches(this.dataset.name)) {
        return
    } else {
        cardsChosen.push(gameCardList[cardID].name)
        cardsChosenID.push(cardID);
        this.setAttribute('src', gameCardList[cardID].img)
    }
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatches(name) {
    return matchedCards.includes(name);
}

function checkMatch() {
    let cards = document.querySelectorAll('img');
    let choice1 = cardsChosenID[0];
    let choice2 = cardsChosenID[1];
    if ( cardsChosen[0] === cardsChosen[1] ) {
        cards[choice1].setAttribute('src', 'images/cleared.svg');
        cards[choice2].setAttribute('src', 'images/cleared.svg');
        matchedCards.push(cardsChosen[0]);
    } else {
        cards[choice1].setAttribute('src', 'images/blank.svg');
        cards[choice2].setAttribute('src', 'images/blank.svg');
        gameBoard.classList.add('shaker');
        setTimeout(() => {
            gameBoard.classList.remove('shaker');
        }, 500)
    }
    cardsChosen = [];
    cardsChosenID = [];
    if (matchedCards.length === gameCardList.length / 2) {
        clearInterval(timer);
        gameOver.style.display = 'flex';
        finalSecondsLabel.innerHTML = pad(totalSeconds % 60);
        finalMinutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

createBoard();

gameOverBtn.addEventListener('click', function() {
    window.location.reload();
})

})
