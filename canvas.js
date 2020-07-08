let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

//circle
class Circle {
    constructor(x, y, dx, dy, radius, a) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = `rgba(255, 230, 5, ${a})`;
    }

    draw(){
        context.beginPath();
        //arc(x, y, radius, start, end)
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }

    update() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

circleArray = []

for(let i = 0; i < 50; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    let radius = (Math.random() * 3) + 1;
    let a = Math.random();
    circleArray.push(new Circle(x, y, dx, dy, radius, a))
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    circleArray.forEach(function(circle) {
        circle.update();
      })
}
animate()
