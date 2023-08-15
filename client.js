const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // console.log("Move: up - move up one square (unless facing down)");
    // console.log("Move: down - move down one square (unless facing up)");
    // console.log("Move: left - move left one square (unless facing right)");
    // console.log("Move: right - move left one square (unless facing left)");
    conn.write("Name: SEC");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data); // Log the incoming data from the server
  });

  return conn;
};

console.log("Connecting ...");
connect();
module.exports = connect;
