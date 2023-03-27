const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First path
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "red"
ctx.moveTo(20,20)
ctx.lineTo(20,160)
ctx.stroke()



ctx.beginPath();
ctx.strokeStyle = "orange"
ctx.moveTo(20, 20)
ctx.lineTo(80, 150)
ctx.stroke()


ctx.beginPath();
ctx.strokeStyle = "black"
ctx.moveTo(20, 20)
ctx.lineTo(150, 80)
ctx.stroke()

ctx.fillStyle = "black"

ctx.closePath()
ctx.fill()
ctx.stroke()