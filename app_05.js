const http = require ('http');

//addting favicon
const fs = require('fs');

const server = http.createServer ( (req, res)=>{
const url =req.url;
const method =req.method;
console.log(`HTTP request received : url=${url}), method=${method}`);

if(url ==='/'){
    res.write(`
    <html>
    <head><title>
    MemoApp
    </title></head>
    <body>
        <form action="add-note" method="POST">
            <input type="text" name "note">
            <button type ="submit">Add note </button>

        </form>
    </body>

    </html>
    
    `); //res.write('Hello');
    res.statusCode=200; //ok
    res.end();
    return;
}

else if( url === '/add-note'){
    console.log('/add-note') ;  
    const chunks =[];
    req.on('data' , (chunk)=>{ //kuuntele ja receive data peases
    chunks.push(chuhk);
    });

    req.on('end',() => {
        //concat yhdistaa data palat ketjun
        const body = Buffer.concat(chunks);
        console.log(body);
        //back to front
        res.statusCode =303;//Redirect
        res.setHeader('Location', '/');
        res.end();
    });
    return;
}

else if (url == '/favicon.ico'){
    fs.readFile('./favic.ico', (err,data)=>{
        res.write(data);
        res.end();
    });

    return;
}

console.log(`${url} not found`);
res.write(`  <html>
<head><title>
MemoApp-404
</title></head>
<body>
   <h1>404 - page not found </h1>
</body>

</html>`);
res.statusCode=404; //ok
res.end();

});

server.listen(8080); // 8080 yleinen netti http portti
