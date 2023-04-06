

const grid = document.querySelector('.content')

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
]

const createElement = (tag, classN) => {
    const element = document.createElement(tag);
    element.className = classN;
    return element;
}

const newCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.background = `red url('../imagens/${character}.jpg')`
    front.backgroundPosition = 'center';
    front.style.backgroundSize = 'cover';

    card.appendChild(front);
    card.appendChild(back);

    return card;  
}


const loadGame = () => {

    const dupplicateCards = [ ... characters, ... characters ]

    const cardsRadom = dupplicateCards.sort(() => Math.random() - 0.5)

    cardsRadom.forEach((character) =>{

        

        const card = newCard(character);
        grid.appendChild(card)
    })
} 

 loadGame() 
    





    

    
    

    


