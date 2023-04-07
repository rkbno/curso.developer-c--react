const grid = document.querySelector('.content');
const spanPlayer = document.querySelector(".player");
const bg = document.querySelector('.bg_video');

const characters = [
'ahri',
'akali',
'akshan',
'ashe',
'ekko',
'evelynn',
'fiora',
'fizz',
'irelia',
'kaissa',
'kassadin',
'katarina',
'kha_zix',
'leesin',
'masterYI',
'pantheon',
'pyke',
'rengar',
'riven',
'samira',
'vayne',
'vayne_skin',
'yasuo',
'yone',
'zed'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if ( disabledCards.length === 50){
        clearInterval(this.loop);

        alert(` Parabéns, ${  spanPlayer.innerHTML  }! Você conseguiu aproveite o video!! `);

        
        
        bg.style.zIndex = 1000;
    } 
};

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    
    } else {
        setTimeout(()=>{

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';

        }, 500);
    };
}

const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if ( firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    };
};


const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.background = `red url('../imagens/${character}.jpg')`;
    front.style.backgroundSize = 'cover';
    front.style.backgroundPosition = 'center';

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character );

    return card;  
};

const loadGame = () => {
    const dupplicateCards = [ ... characters, ... characters ];

    const shuffledArray = dupplicateCards.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) =>{
        const card = createCard(character);
        grid.appendChild(card);
    });
};


const startTimer = (duration, display) => {

    var timer = duration, minutes, seconds
    
    this.loop = setInterval(function () {
        
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + seconds;

        if(--timer < 0){
            timer = duration;
        }

    }, 1000);
    

    
  }
    

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');


    var display = document.querySelector('.timer');
    var duration = 60 * 0.1;
    
    startTimer(duration, display);
   

    
    
    loadGame();
}
  
  

   

    





    

    
    

    


