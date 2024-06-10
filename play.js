const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,

  });

// interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("close", () => {
    console.log("You ded cuz you idled");
  });

  return conn;
};

console.log("Connecting ...");
connect();