

const grid = document.querySelector('.content')

const characters = [
'ahri',
'akali',
'akshan',
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

    front.style.backgroundImage = `url('../imagens/ashe.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;  
}


const loadGame = () => {
    characters.forEach((character) =>{

        const card = newCard(character);
        grid.appendChild(card)
    })
} 

loadGame()

    





    

    
    

    


