function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor()
}

function draw() {
  //background with transparancy
  background(0,0,35,25); 
  

  var star = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  ellipse(mouseX ,mouseY, star.size, star.size);
  ellipse(star.locationX ,star.locationY, star.size, star.size);


}

