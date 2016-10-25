"use strict";
const chai = require("chai");
const expect = chai.expect;


const Arena = require("../src/js/types/arena.js");
const Ball = require("../src/js/types/ball.js");


describe("An empty arena", () => {

  const arena = new Arena();

  it("has a colour", (done) => {
    expect(arena).to.have.property("colour");
    return done();
  });

  it("has no balls", (done) => {
    expect(arena.balls).to.have.length(0);
    return done();
  });

});


describe("An arena with 3 calls to addBall", () => {

  const arena = new Arena();
  const ball = new Ball();
  arena.addBall(ball);
  arena.addBall(ball);
  arena.addBall(ball);

  it("has 3 balls", (done) => {
    expect(arena.balls).to.have.length(3);
    return done();
  });

});