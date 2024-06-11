const net = require("net");

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

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: ABC");
    
   /*setInterval(() => {
      conn.write("Move: up");
    }, 50);
    */
    
  });

  

  return conn;
};

module.exports = connect;
