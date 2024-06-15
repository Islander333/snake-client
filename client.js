const net = require("net");
const { IP, PORT } = require("./constants");

let connection;

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    console.log("Use keys: WASD to Move!");
    console.log("Use keys: 1, 2, 3 to chat!");
    console.log("ctrl + c to exit!");
    conn.write("Name: KL");
    
    //broadcast data from server
    conn.on("data", (data) => {
      console.log(data);
    });

    //log player count
    conn.on("playerCount", (count) => {
      console.log(`Player: ${count} connected!`);
    });
    
  });

  connection = conn;
  return conn;
};
//send messages from client to server for broadcasting
const sendMessage = function(message) {
  if (connection) {
    connection.write(message);
  }
};

module.exports = { connect, sendMessage };
