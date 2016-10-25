"use strict";

// constructor
// all arguments are optional
const Ball = function Ball (x, y, colour, width, height, vx, vy) {
  // x: default width of the arena is 640px so centre via (640 / 2 - (32 / 2))
  this.x = x || 304;
  // y: default height of the arena is 480px so centre via (480 / 2 - (32 / 2))
  this.y = y || 224;
  // colour
  // this is a random hex code if undefined
  // see https://www.paulirish.com/2009/random-hex-color-code-snippets/
  this.colour = colour || "#" + Math.floor(Math.random() * 16777215).toString(16);;
  // width/height: if foo is undefined or otherwise invalid, parseInt(foo) will return NaN which evaluates falsely
  // this is better than just foo || 32 because 0 is falsey, meaning only non-0 values for foo would work correctly
  this.width = parseInt(width) || 32;
  this.height = parseInt(height) || 32;
  this.vx = vx || (Math.random() * 5);
  this.vy = vy || (Math.random() * -5);
  // allow method chaining
  return this;
};

// override default toString method which is undescriptive
Ball.prototype.toString = function () {
  return `Ball (x: ${this.x}, y: ${this.y})`;
};

// execute every frame
// basic physics from http://physicscodes.com/bouncing-ball-simulation-in-javascript-on-html5-canvas/
Ball.prototype.step = function (arena) {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += arena.gravity;
  // air resistance needs to be applied in the right direction
  if (this.vx > 0) {
    this.vx -= arena.airResistance;
  }
  if (this.vx < 0) {
    this.vx += arena.airResistance;
  }
  // don't let it fall off the bottom of the arena and make it bounce
  if (this.y > arena.height - (this.height / 2)) {
    this.y = arena.height - (this.height / 2);
    // if it's stopped moving horizontally, stop bouncing
    // this feels like a hack but it's late
    // 0.01 is a nice 'error margin' as the vx will never be 0
    if (Math.abs(this.vx) > 0.01 ) {
      this.vy *= -arena.surfaceFriction;
    }
  }
  // make it bounce on the left side
  if (this.x < 0 + (this.width / 2)) {
    this.x = 0 + (this.width / 2);
    this.vx = -this.vx;
  }
  // make it bounce on the right side
  if (this.x > arena.width - (this.width / 2)) {
    this.x = arena.width - (this.width / 2);
    this.vx = -this.vx;
  }
  // allow method chaining
  return this;
};

// draw every frame
Ball.prototype.draw = function (canvasContext) {
  canvasContext.beginPath();
  // this.width / 2 because arc takes a radius argument
  canvasContext.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI, false);
  canvasContext.fillStyle = this.colour;
  canvasContext.fill();
  // allow method chaining
  return this;
};

module.exports = Ball;