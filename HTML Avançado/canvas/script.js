let tela = document.getElementById('tela')

let ctx = tela.getContext("2d")
let n = mathRound(mathRound())
let u = mathRound(mathRound())
let m = ctx.moveTo(n,u)


ctx.moveTo(n,u)
ctx.lineTo(250,250);
ctx.lineTo(500,0)
ctx.lineTo(500,500)
ctx.lineTo(100,200)
ctx.lineTo(300,30)
ctx.lineWidth = 50;
ctx.strokeStyle = "red"

ctx.stroke()