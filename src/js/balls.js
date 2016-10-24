"use strict";

const gravity = 0.1;
const velocityReductionFactor = 0.8;

const Arena = require("./types/Arena");
const Ball = require("./types/Ball");

const balls = (options) => {

  // options.canvasId: <canvas> element ID
  if (!options.hasOwnProperty("canvasId")) {
     throw new Error("'options' argument provided to balls() must contain a canvasId key");
  }
  const canvas = document.getElementById(options.canvasId);
  if (!canvas) {
    throw new Error(`Element with ID '${options.canvasId}' was not found`);
  }
  const canvasContext = canvas.getContext("2d");

  // arena
  const arena = new Arena(options.arena.colour, options.arena.width, options.arena.height);

  // canvas setup
  canvas.width = arena.width;
  canvas.style.width = arena.width.toString() + "px";
  canvas.height = arena.height;
  canvas.style.height = arena.height.toString() + "px";
  canvas.style.backgroundColor = arena.colour;

  // when the canvas is clicked on, create a ball object
  canvas.addEventListener("click", (event) => {
    arena.addBall(
      new Ball(event.offsetX, event.offsetY)
    );
  });

  setInterval(() => {

    // draw arena to canvas
    canvasContext.clearRect(0, 0, arena.width, arena.height);
    arena.balls.forEach((ball) => {
      canvasContext.beginPath();
      canvasContext.arc(ball.x, ball.y, ball.width, 0, 2 * Math.PI, false);
      canvasContext.fillStyle = ball.colour;
      canvasContext.fill();
      ball.vy += gravity;
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.y > arena.height - (ball.height / 2)) {
        ball.y = arena.height - (ball.height / 2);
        ball.vy *= -velocityReductionFactor;
      }
      if (ball.x < 0 + (ball.width / 2)) {
        ball.x = 0 + (ball.width / 2);
        ball.vx = -ball.vx;
      }
      if (ball.x > arena.width - (ball.width / 2)) {
        ball.x = arena.width - (ball.width / 2);
        ball.vx = -ball.vx;
      }
    });

  }, 25);


};

module.exports = balls;