var canvas = document.querySelector('canvas');
var retangles = [
    { id: 1, x: 500, y: 100, width: 50, height: 100 },
    { id: 2, x: 560, y: 100, width: 50, height: 100 },
    { id: 3, x: 620, y: 100, width: 50, height: 100 },
    { id: 4, x: 680, y: 100, width: 50, height: 100 },
    { id: 5, x: 500, y: 210, width: 50, height: 100 },
    { id: 6, x: 560, y: 210, width: 50, height: 100 },
    { id: 7, x: 620, y: 210, width: 50, height: 100 },
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangles
// c.fillRect(x, y, width, height);
c.fillStyle = 'rgba(255, 255, 0, 0.3)';
c.fillRect(100, 100, 50, 100);
c.fillStyle = 'rgba(0, 255, 255, 0.5)';
drawRetangles(retangles);
// c.fillRect(300, 100, 50, 100);

//Lines
c.beginPath(); //To start a new path
// c.moveTo(x, y);
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = '#7FFF00';
c.stroke();

//Circles
// c.arc(x, y, radius, startAngle, endAngle, counterClockwise);
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();


var x;
var y;
var width;
var height;

function drawRetangles(retangles) {
    retangles.map(function(ret) { return c.fillRect(ret.x, ret.y, ret.width, ret.height) })
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    console.log(`Coordinate id: 1, x: ${x}, Coordinate y: ${y}`);
    let vef = retangles.find(function(retangle) {
        if(x >= retangle.x && x <= (retangle.x+retangle.width) && y >= retangle.y && y <= (retangle.y+retangle.height)) {
            return retangle;
        }
    });
    console.log(vef);
    // var retangle = {};
    // for(var i=0; i<retangles.length; i++){
    //     retangle = retangles[i];
    //     if(x >= retangle.x && x <= (retangle.x+retangle.width) && y >= retangle.y && y <= (retangle.y+retangle.height)) {
    //         // return retangle;
    //         console.log(retangle);
    //         console.log('entrou');
    //     }
    // }

} 
  
canvas.addEventListener("mousedown", function(e) 
{ 
    getMousePosition(canvas, e); 
}); 
