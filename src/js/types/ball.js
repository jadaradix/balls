"use strict";

// constructor
// all arguments are optional
const Ball = function Ball (x, y, colour, width, height, vx, vy) {
  // x: default width of the arena is 640px so centre via (640 / 2 - (16 / 2))
  this.x = parseInt(x) || 312;
  // y: default height of the arena is 480px so centre via (480 / 2 - (16 / 2))
  this.y = parseInt(y) || 232;
  // colour
  // this is a random hex code if undefined
  // see https://www.paulirish.com/2009/random-hex-color-code-snippets/
  this.colour = colour || "#" + Math.floor(Math.random() * 16777215).toString(16);;
  // width/height/vx/vy: if foo is undefined or otherwise invalid, parseInt(foo) will return NaN which evaluates falsely
  // this is better than just foo || 48 because 0 is falsey, meaning only non-0 values for foo would work correctly
  this.width = parseInt(width) || 16;
  this.height = parseInt(height) || 16;
  this.vx = parseInt(vx) || (Math.random() * 5);
  this.vy = parseInt(vy) || (Math.random() * -5);
  // allow method chaining
  return this;
};

// override default toString method which is undescriptive
Ball.prototype.toString = function () {
  return `Ball (x: ${this.x}, y: ${this.y})`;
};

module.exports = Ball;