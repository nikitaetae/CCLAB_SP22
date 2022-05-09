let light = [];
let speed;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  for (let i=0; i<3000; i++) {
    light.push(new Galaxy());
  }
  
  
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0,15);
  translate(width/2, height/2);
  for (let i = 0; i < light.length; i++) { 
    light[i].update();
    light[i].show();
  }
  
  fill(255,255,190,0.7);
  for(i = 0; i < 150; i++){
    ellipse(400,250, i*7);
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Galaxy {
  
  constructor() {
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width);
  }
  
  
  
  show() {
    fill("white");
    noStroke();
    
    this.sx = map(this.x / this.z, 0, 2, 0, width);
    this.sy = map(this.y / this.z, 0, 2, 0, height);
    
    this.size = map(this.z,0,width,5,0); 
    ellipse(this.sx,this.sy,this.size,this.size);
  }

  update() {
    this.z = this.z - speed;

    if (this.z < 100) {
      this.z = width;
      this.x = random(-width,width);
      this.y = random(-height,height);

    }
  }

}


