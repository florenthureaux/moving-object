
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// ctx.strokeStyle = 'grey';
// ctx.strokeRect(10, 10, 50, 50);

// ctx.fillStyle = 'grey';
// ctx.fillRect(60, 60, 50, 50);
// //ecriture

// ctx.fillStyle = 'grey';
// ctx.font = '30px Arial';
// ctx.strokeText('Hello World', 10, 200);

//dessin de la ligne
// ctx.strokeStyle = 'black';
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.lineTo(50, 300);
// ctx.stroke();

//neige avec boucle 
// for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     ctx.arc(Math.random() * 800, Math.random() * 600, 5, 0, 2 * Math.PI);
//     ctx.stroke();
// }

//rectangle (w:100, h:150) & center inside canvas & random color

// ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
// ctx.fillRect((canvas.width - 100) / 2, (canvas.height - 150) / 2, 100, 150);

// //dessiner cercle
// ctx.beginPath();
// ctx.arc(400, 100, 50, 0, 2 * Math.PI);
// ctx.stroke();

// //ellipse
// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.ellipse(200, 100, 50, 25, 0, 0, 2 * Math.PI);
// ctx.fill();

//dessiner une image
// const img = new Image();
// img.src = 'https://www.w3schools.com/tags/smiley.gif';
// img.onload = function () {
//     ctx.drawImage(img, 0,(250-50)/2, 50,50);
// }
// shape
// x:0, y:center
// w:50, h:50
class Smile {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
        this.img = new Image();
        this.img.src = 'https://www.w3schools.com/tags/smiley.gif';
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y,this.w,this.h);
    }
    moveRight() {
        if (this.x < 300){
            this.x += 2;
        }
    }
    moveLeft() {
        if (this.x>0){
            this.x -= 2;
        }
    }
    
    increaseSize() {
        this.w += 2;
        this.h += 2;
    }
    decreaseSize() {
        this.w -= 2;
        this.h -= 2;
    }
}
const smile = new Smile(0, 0, 50, 50);
smile.draw();
document.addEventListener('keydown', function (event) {
    ctx.clearRect(0, 0, 0, 0);
    if (event.key === 'ArrowRight') {
        smile.moveRight();
    }
    if (event.key === 'ArrowLeft') {
        smile.moveLeft();
    }
    if (event.key === 'ArrowUp') {
        smile.increaseSize();
    }
    if (event.key === 'ArrowDown') {
        smile.decreaseSize();
    }
    smile.draw();
}
)



