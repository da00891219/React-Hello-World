var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.write("Dx Sandbox Solution?");
    res.write(
      "With Repositories, we automatically create a new sandbox for every branch, and these sandboxes are automatically connected to git."
    );
    res.write(
      "Because we run every branch on a fast micro VM, you can branch any repo within 2 seconds, see the code running immediately, work on a branch, share it with your colleagues, quickly make/review changes and open a pull request."
    );
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
