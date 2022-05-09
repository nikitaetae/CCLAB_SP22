let stars = [];
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  for (let i=0; i<1000; i++) {
    stars.push(new Star());
  }
  
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0,15);
  translate(width/2, height/2);
  for (let i = 0; i < stars.length; i++) { 
    stars[i].update();
    stars[i].show();
  }
}

class Star {
  
  constructor() {
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width);
  }
  
  update() {
    this.z = this.z - speed;

    if (this.z < 1) {
      this.z = width;
      this.x = random(-width,width);
      this.y = random(-height,height);

    }
  }
  
  show() {
    fill("white");
   
    
    this.x1 = map(this.x / this.z, 0, 2, 0, width);
    this.y1 = map(this.y / this.z, 0, 2, 0, height);
    
    this.size = map(this.z,0,width,10,0); 
    ellipse(this.x1,this.y1,this.size,this.size);
  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

