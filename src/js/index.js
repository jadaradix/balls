"use strict";

const balls = require("./balls.js");

const options = {
  canvasId: "balls",
  arena: {
    colour: "white",
    width: 640,
    height: 480
  }
};

window.addEventListener(
  "load",
  () => {
    try {
      return balls(options);
    } catch (error) {
      return console.error(error.message);
    }
  }
);