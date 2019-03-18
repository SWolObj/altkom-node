const http = require("http");
var server = http.createServer((req, res) =>{
    //debugger;
    var obj = {
        user: "user"
    };
    switch(req.url){
        case "/": res.end(JSON.stringify(obj)); break;
        case "/user": res.end("User"); break;
    }
});

server.listen(3000);