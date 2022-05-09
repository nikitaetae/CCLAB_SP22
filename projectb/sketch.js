function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container')
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

let raindrops = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');

  for (let i=0; i < 100; i++) {
    let raindrop = new Raindrop(random(width), random(height), 0.5);
    raindrops.push(raindrop);
  }
}

function draw() {
  clear();

  for (let i=0; i < raindrops.length; i++) {
    raindrops[i].update();
    raindrops[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Raindrop {
  constructor(x, y, speedX) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
  }

  update() {
    this.y = this.y + 1;
    this.x = this.x + this.speedX;

    if (this.y > height) {
      this.y = 0;
    }
  }

  display() {
    fill('blue');
    noStroke();
    ellipse(this.x, this.y, 3, 3);
  }
}