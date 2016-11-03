function setup() {
  createCanvas(600, 400);
  background(100);
}

function draw() {

}

function mouseDragged() {
  ellipse(mouseX, mouseY, 10, 10);
  fill(random(255), random(255), random(255));
  noStroke();
}

function keyPressed() {
  background(random(255), random(255), random(255));
}