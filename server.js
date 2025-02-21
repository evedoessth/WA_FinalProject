const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'your-secret-key';
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

app.post('/html/auth/sessionDetail/', (req, res) => {
    const newItem = req.body;
    session.push(newItem);
    res.status(201).json(newItem);
});



const session = [
    {id : 0, sessionTitle: "TestTitle", sessionImage: "test.png", sessionDescription: "test test 123", sessionCampaign: "test campaign", sessionMeeetingPlace: "test place", sessionCalendar: "2000-01-01"}
];

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const users = [
    { id: 1, username: 'TestUser1', password: '$2b$10$kgix/7wKMGMmqJYixdfvfugaj5W/iHKcjArX2H76DVIZmQzXr7/hJ' }, // Hashed password: "password1"
    { id: 2, username: 'user2', password: '$2b$10$kgix/7wKMGMmqJYixdfvfugaj5W/iHKcjArX2H76DVIZmQzXr7/hJ' }, // Hashed password: "password2"
];

function authenticateUser(username, password) {
    const user = users.find((user) => user.username === username);
    if (!user) {
        return null;
    }
    if (bcrypt.compareSync(password, user.password)) {
        return user;
    }
    return null;
}

function authenticateToken (req, res, next) {
    const token = req.header ('Authorization');

    if(!token) {
        return res.status(401).json({error: 'Authentication token missing'});
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err) {
            return res.status(403).json({error: 'Token is invalid'});
        }
        req.user = user;
        next();
    })
}

app.use(express.json());

app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
    res.json(data);
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find((item) => item.id === id);
    if (!item) {
        res.status(404).json({ error: 'Item not found'});
    } else {
        res.json(item);
    }
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.find((item) => item.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Item not found'});
    } else {
        data[index] = { ...data[index], ...updatedItem};
        res.json(data[index]);
    }
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.find((item) => item.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Item not found'});
    } else {
        const deletedItem = data.splice(index, 1);
        res.json(deletedItem[0]);
    }
});

app.post('/auth/login', (req, res) => {
    const { username, password} = req.body;
    const user = authenticateUser(username, password);

    if (!user) {
        return res.status(401).json({ error: 'Authentication failed'});
    }

    const token = jwt.sign({userId: user.id, username: user.username}, secretKey, {
        expiresIn: '1h',
    })

    res.json({token});
});

app.get('/protected', authenticateToken, (req, res) => {
    res.json({message: 'This is a protected route', user: req.user});
});