let img, input;

function preload() {
  img = loadImage('images/poet-digialitation.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.resize(windowWidth, windowHeight);
  frameRate(30);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);

}

function keyPressed() {
  if (keyCode === ENTER) {
    value = 255;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);
  image(img, 0, 0);

}

