  let rad = 60; // I changed the width of the shape
  let xpos, ypos;

  let xspeed = 6; // I changed the speed of the shape
  let yspeed = 6;

  let xdirection = 3;
  let ydirection = 3;

  function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
    frameRate(30);
    ellipseMode(RADIUS);
    // I changed the starting position of the shape
    xpos = width / 2;
    ypos = height / 2;
  }

  function draw() {
    background(100,7);// I changed the color and added a "path" behind the circle

    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;}
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
    }

    ellipse(xpos, ypos, rad, rad);
  }