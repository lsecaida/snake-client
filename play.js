const connect = require("./client");
const setupInput = require("./input");

// it connects to the server
const userKeyboardMoves = (connect) => {
  setupInput(connect);
};

console.log("Connecting ...");
userKeyboardMoves(connect());
