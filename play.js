const connect = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // read data from user input
  return stdin;
};
//This is the start of the game and where the player is able to move the snake.
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  //movement control
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  //message display control
  if (key === "z") {
    connection.write("Say: Do you like this game?");
  }
  if (key === "x") {
    connection.write("Say: Wrong button!");
  }
};

setupInput(connect());
