"use strict";
const chai = require("chai");
const expect = chai.expect;


const Ball = require("../src/js/types/ball.js");


describe("A ball", () => {

  const ball = new Ball();

  it("has a colour", (done) => {
    expect(ball).to.have.property("colour");
    return done();
  });

  it("has x and y properties which are numbers", (done) => {
    expect(ball.x).to.be.a("number");
    expect(ball.y).to.be.a("number");
    return done();
  });

});