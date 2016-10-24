"use strict";

// constructor
// all arguments are optional
const Arena = function Arena (colour, width, height, gravity, surfaceFriction, airResistance) {
  // colour
  this.colour = colour || "white";
  // whether to use parseInt or not is discussed in ball.js ('if foo is undefined or otherwise invalid')
  // width/height: non-zero
  this.width = width || 640;
  this.height = height || 480;
  // gravity/surfaceFriction/airResistance: zero allowed
  this.gravity = parseInt(gravity) || 0.1;
  this.surfaceFriction = parseInt(surfaceFriction) || 0.8;
  this.airResistance = parseInt(airResistance) || 0.001;
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
  // if (typeof ball !== "Ball") {
  //   throw new Error("'ball' argument provided to addBall() isn't a Ball type");
  // }
  this.balls.push(ball);
  // allow method chaining
  return ball;
};

// override default toString method which is undescriptive
Arena.prototype.toString = function () {
  return `Arena (width: ${this.width}, height: ${this.height})`;
};

module.exports = Arena;