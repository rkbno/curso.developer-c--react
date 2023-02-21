var nomes = ["Arnaldo", "Breno", "Camila", "Pedro"];
var notasA = [5, 8, 9, 4];
var notasB = [6, 7, 10, 7];

function media(n1, n2){
    return (n1 + n2) / 2
}

function passou(media) {

    if (media >= 7){
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
 





 for (var index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + 
                " - " + nota2 + " - " + m + " - "
                    + passou(m));
 }

