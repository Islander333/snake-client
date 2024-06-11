const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
//take ctrl c input and exit
const handleUserInput = function (key) {
  if (key ==='\u0003') {
    process.exit();
  }
  if(key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if(key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if(key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if(key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if(key === '1') {
    connection.write("Say: Yo!");
  }
  if(key === '2') {
    connection.write("Say: Haha!");
  }
  if(key === '3') {
    connection.write("Say: Seeya nerd!");
  }
}

module.exports = { setupInput };