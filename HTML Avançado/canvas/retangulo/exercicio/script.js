//Exercícios HTML5 – Canvas

function linhaDiagonal(){
// obtendo o elemento Canvas e o seu contexto de desenho
var canvas = document.getElementById("diagonal")
var context = canvas.getContext("2d");

// salva uma copia do estado atual do desenho
context.save();

// mova o desenho para a direita, embaixo
context.strokeStyle = "red"
context.strokeStyle = "yellow"
context.lineWidth = 5;
context.fillRect(10, 10, 200, 200)
context.strokeRect(12, 12, 250, 250)

context.clearRect(25, 25, 30, 30)
context.clearRect(170, 170, 30, 30)
// cria um caminho com coordenadas absolutas


// desenha a linha no canvas
context.stroke();
}

window.addEventListener("load", linhaDiagonal, true);