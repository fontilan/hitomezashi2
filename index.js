const gap = 40;

const lineWeight = 1;

const shade01 = "#E6DFFF";
const shade02 = "#D9BFFF";
const shade03 = "#CC9EFF";
const shade04 = "#C588FF";
const shade05 = "#AC71FF";

function setup() {
  createCanvas(windowWidth * 0.999, windowHeight * 0.999);
}

function draw() {
  background("#161a1d");
  angleMode(DEGREES);
  strokeWeight(lineWeight);

  stroke(shade01);
  for (y = 0; y <= height; y += gap) {
    for (x = random([0, 1]) * gap; x <= width; x += gap) {
      point(x, y);
      x += gap;
    }
  }

  stroke(shade02);
  for (y = 0; y <= height; y += 2 * gap) {
    for (x = random([0, 1]) * gap; x <= width; x += 2 * gap) {
      line(x, y, x + gap, y);
      x += gap;
    }
  }

  stroke(shade03);
  for (x = 0; x <= width; x += 2 * gap) {
    for (y = random([0, 1]) * gap; y <= height; y += 2 * gap) {
      line(x, y, x, y + gap);
      y += gap;
    }
  }

  shearX(45);
  stroke(shade04);
  for (x = -10000; x <= width; x += 2 * gap) {
    for (y = random([0, 1]) * gap; y <= height; y += 2 * gap) {
      line(x, y, x, y + gap);
      y += gap;
    }
  }

  shearX(-45);
  shearX(-45);
  stroke(shade05);
  for (x = 0; x <= 2 * width; x += 2 * gap) {
    for (y = random([0, 1]) * gap; y <= height; y += 2 * gap) {
      line(x, y, x, y + gap);
      y += gap;
    }
  }
  noLoop();
}
