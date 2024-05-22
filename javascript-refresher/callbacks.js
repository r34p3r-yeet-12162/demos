// Higher-order function
// curriying == returning another function, or uses callbacks

function doThis(cb) {
  let timeDelay = 9000; // 1 second = 1000
  setTimeout(() => {
    // this is the main code to execute
    console.log("Do this");
    cb(); // the cb will run after the interval
  }, timeDelay);
}
function andThenDoThis() {
  console.log("Then do this");
}

/* doThis(function () {
  console.log(" all done");
}); */
doThis(andThenDoThis);

// doThis and'then'doThis
