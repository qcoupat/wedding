// ************************* Canvas *******************
var canevas = document.querySelector("#zoneCanvas");
var ctx     = canevas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="rgb(255,0,165)";
ctx.lineWidth="5";
ctx.lineCap="round";	// definition des terminaisons de lignes (bout arrondi)
ctx.moveTo(125,125);	// debut du tracé
ctx.lineTo(200,200);
ctx.stroke();