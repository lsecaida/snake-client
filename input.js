let connection; //Global scoped to hold the object value of connect

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // read data from user input
  return stdin;
};

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
  //message display
  if (key === "z") {
    connection.write("Say: Hola!");
  }
  if (key === "x") {
    connection.write("Say: I am looking for an apple tree");
  }
};

module.exports = setupInput;
