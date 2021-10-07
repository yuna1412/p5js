function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(128, 128, 128);
}

function draw() {
  background(128, 128, 128);
  if(mouseIsPressed){
    r = 255;
    g = 255;
    b = 255;
    fill(r, g, b);
    r = 150;
    ellipse(mouseX, mouseY, r, r);
  } else {
    r = 255;
    g = 255;
    b = 255;
  }
}