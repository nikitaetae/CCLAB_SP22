function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor()

  r=255;
  b=255;
  g=255;
  
}

function draw() {
  //background with transparancy
  background(0,0,5,25); 
  

  var star = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  ellipse(mouseX ,mouseY, star.size, star.size);
  fill(random(r),random(b),random(g));
  noStroke();
  ellipse(star.locationX ,star.locationY, star.size, star.size);


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

