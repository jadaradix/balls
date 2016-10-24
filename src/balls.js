"use strict";

const balls = (options) => {

  console.log(options);

  // options.canvasId: <canvas> element ID
  if (!options.hasOwnProperty("canvasId")) {
     throw new Error("'options' argument provided to balls() must contain a canvasId key");
  }
  const canvas = document.getElementById(options.canvasId);
  if (!canvas) {
    throw new Error(`Element with ID '${options.canvasId}' was not found`);
  }

  // arena
  const arena = new Arena(options.arena.colour, options.arena.width, options.arena.height);

  // canvas setup
  canvas.width = arena.width;
  canvas.style.width = arena.width.toString() + "px";
  canvas.height = arena.height;
  canvas.style.height = arena.height.toString() + "px";

  // when the canvas is clicked on, create a ball object
  canvas.addEventListener("click", (element, event) => {
    console.log(element);
    console.log(event);
    arena.addBall(
      new Ball(100, 100)
    );
  });

  // draw arena to canvas
  arena.balls.forEach((ball) => {
    // ...
  });

};

module.export = balls;