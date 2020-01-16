const http = require ('http');
const server = http.createServer ( (req, res)=>{
console.log(req);

});

server.listen(8080); // 8080 yleinen netti http portti
