function setup() {
  // put setup code here
  createCanvas(600,600);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  r = 80;
  ellipse(mouseX, mouseY, r, r)
}