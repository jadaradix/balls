"use strict";

// constructor
// all arguments are optional
const Arena = function Arena (colour, width, height) {
  // colour
  this.colour = colour || "white";
  // width/height: non-0 and falsey arguments should be ignored
  this.width = width || 640;
  this.height = height || 480;
  // balls: array of Ball objects
  this.balls = [];
  // allow method chaining
  return this;
};

Arena.prototype.reset = function reset () {
  this.balls = [];
};

Arena.prototype.addBall = function addBall (ball) {
  // quick and dirty way to avoid non-Balls ending up in this.balls array
  if (typeof ball !== "Ball") {
    throw new Error("'ball' argument provided to addBall() isn't a Ball type");
  }
  this.balls.push(ball);
  // allow method chaining
  return ball;
};

// override default toString method which is undescriptive
Ball.prototype.toString = function () {
  return `Arena (width: ${this.width}, height: ${this.height})`;
};

module.exports = Arena;