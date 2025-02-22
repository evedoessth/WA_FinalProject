const express = require('express');
const app = express();
const path = require('path');

const fs = require('fs');
const http = require('http');


app.use(express.static("/public"));

const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
         "public", 
         req.url === "/" ? "/html/landingpage.html" : req.url
    );
    
    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});
server.listen(port, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    }
    else {
        console.log(`Server listening on port ${port}`);
    }
    
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/html/landingpage.html"));
});


app.get('/html/auth/sessionDetail/:id', (req, res) => {
    const productId = req.params.id;
    // Fetch product data from database
    db.getProduct(productId).then(product => {
      res.json(product); // Send product data as JSON response
    }).catch(error => {
      res.status(500).send(error.message); // Handle error
    });
  });

app.post('/html/auth/sessionDetail.html/session', (req, res) => {
    const newItem = req.body;
    session.push(newItem);
    res.status(201).json(newItem);
});



