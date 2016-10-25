"use strict";

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
  canvas.style.display = "block";

  // when the canvas is clicked on, create a ball object
  canvas.addEventListener("click", (event) => {
    arena.addBall(
      new Ball(event.offsetX, event.offsetY)
    );
  });

  // step and draw
  // example from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  const eachFrame = () => {
    arena.step();
    arena.draw(canvasContext);
    arena.balls.forEach((ball) => {
      ball.step(arena);
      ball.draw(canvasContext);
    });
    requestAnimationFrame(eachFrame);
  };
  requestAnimationFrame(eachFrame);

  return arena;

};

module.exports = balls;