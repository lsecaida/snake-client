const connect = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

setupInput(connect());

//This is the start of the game and where the player is able to move the snake.
