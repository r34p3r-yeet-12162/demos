/* let importedFunction = require("./controller/lib");

//console.log(importedFunction.Add(3,3));

console.log(importedFunction(3, 3));
 */

// 1. in an application, we can create ocur own user-defined modules

let importedUserDefinedModule = require("./user-defined-module");
//2. you also have modules that are inbuilt (ship with NodeJS when you install it)
// we call these packages and modules directly
let http = require("http"); // notice the absense of a dot

//3. We also have vendor (3rd party) modules.
// we have to use npm install (npm i ) to instal them e.g. npm i express
// we can also choose to install a package globally use the -g switch
// e.g. npm i express -g

// once we install a 3rd party package, it is added to the package.json
// (manifest).
// we call these 3rd party modules dependencies!!!
