// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events ereate instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keeptrack of the other
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
  console.log(`data received user: ${name} with id:${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "Shuvo", 26);
