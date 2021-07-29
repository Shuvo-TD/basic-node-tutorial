// CommonJS, every file is module (by default)
//modules -Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./alternative-flavor");

require("./7-mind-grenade");
//console.log(name);
//console.log(data);

sayHi("priyankha");
sayHi(names.shuvo);
sayHi(names.peter);
