// ************************* Canvas *******************
var canvas = document.querySelector("#zoneCanvas");
var ctx     = canvas.getContext("2d");
ctx.fillStyle = 'rgb(229, 226, 225)'
ctx.lineWidth = 0.2;
ctx.beginPath();
ctx.moveTo(2000, 0);
ctx.lineTo(0, 600);
ctx.closePath();
ctx.stroke();

// ************************* Canvas *******************
var canvas = document.querySelector("#zoneCanvas1");
var ctx     = canvas.getContext("2d");
ctx.fillStyle = 'rgb(229, 226, 225)'
ctx.lineWidth = 0.2;
ctx.beginPath();
ctx.moveTo(1100, 0);
ctx.lineTo(0, 450);
ctx.closePath();
ctx.stroke();