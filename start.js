const http = require("http");
var server = http.createServer((req, res) =>{
    //debugger;
    switch(req.url){
        case "/": res.end("ROOT"); break;
        case "/user": res.end("User"); break;
    }
});

server.listen(3000);