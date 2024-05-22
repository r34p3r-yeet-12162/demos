// We will use the inbuilt http module
let http = require("http");
let port = 8000;
let host = "localhost"; // server names are translated to IP

// our app will be accessed at http://localhost:8000

// now we need a function that will handle the incoming requests
// it will listen out for incoming requests

// the requestion listeneer comes with two objects:
// req [request]: It is used to handle the incoming requests
// res [response]: It is used to create outging responses

// the order matters!!!
const requestListener = (req, res) => {
  // note that we are not dealing with the request for now

  res.writeHead(200); // using the response, we will seta status
  res.end("My first server!"); // then we will display this message
};

// we will not  use the requestLister no build our server
// we call the http.createServer and pass the listener as a argument
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
