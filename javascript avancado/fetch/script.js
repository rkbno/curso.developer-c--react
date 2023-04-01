const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleClick)

function handleClick(event) {
    event.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
    
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body
    })
} 


const paragrafo = document.querySelector('.btc')

function precoBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json() )
    .then(btcJson => {
        paragrafo.innerHTML = "R$ " + btcJson.BRL.buy
        

    })
}

setInterval(precoBtc, 1000 * 30)

precoBtc()


const btnProxima = document.querySelector('.proximo')
const paragrafoPiada = document.querySelector('.piada')


function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        
        paragrafoPiada.innerText = piada.value
    })
}

btnProxima.addEventListener('click', puxarPiada)






