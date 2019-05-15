const fs = require("fs");
const http = require("http");


var requestHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    var text = "";

    if (request.url === "/") {
        text = fs.readFileSync("index.html", "utf8");
        response.write(text);

    }

    if (request.url === "/courses") {
        text = fs.readFileSync("courses.html", "utf8");
        response.write(text);
    }
       
    response.end();
    console.log("Serverd: " + request.url);
}

var server = http.createServer(requestHandler);
server.listen(3000);

console.log("Server has started!");
