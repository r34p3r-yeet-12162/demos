// Say "Hello."
function setConnection() {
  console.log("1.Connection has been established");
}

function getData() {
  // Things take time.
  // we do nto know when (or if) they will complete
  // in this case we want to guarantee the order of execution

  // setTimeout is only being used to SIMULATE a delay!
  setTimeout(function () {
    console.log("2. Data fetching complete ....");
  }, 1);
}

function closeConnection() {
  console.log("3. Connection killed");
}

// setConnection, then getData, then closeConnection
setConnection();
getData();
closeConnection();
