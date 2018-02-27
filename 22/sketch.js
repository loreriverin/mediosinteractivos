function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
}

function draw() {
  background(0, 150, 250);
  stroke(255);

  //scale(0.5);
  //translate(mouseX-(width/2), mouseY-(height/2), 0);
  translate(0, 100, 0);

  push();
  translate(0, 25, 0);
  rotateX(PI/2);
  fill(113, 240, 113);
  plane(width, 400);
  pop();

  push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 50);
  translate(0, 50, 0);
  fill(4, 132, 4);
  cone(50, 100);
  translate(0, 50, 0);
  fill(4, 132, 4);
  cone(50, 100);
  translate(0, 50, 0);
  fill(4, 132, 4);
  cone(50, 100);
  pop();
}

