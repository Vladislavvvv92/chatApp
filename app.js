const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const http = require('http');
let server = http.createServer(app);
const WebSocket = require("ws");
let wss = new WebSocket.Server({ server });
const bodyParser = require("body-parser");
const urlencodedParserjs = bodyParser.json();
const db = require('./server/mongo').db;
const users = require('./server/users').users;

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/server', express.static(__dirname + "/server"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
});

app.get('/getUsersLength', (req, res) => {
    res.send(JSON.stringify({
        res: users.usersList.length,
        usersList: users.usersList
    }))
});

app.post('/registration', urlencodedParserjs, (req, res) => {
    if (!users.isRegistered(req.body.value)) {
        users.registration(req.body);
        res.send('true');
    } else {
        res.send('false')
    }
});

app.post('/setNick', urlencodedParserjs, (req, res) => {
    const result = users.registeredUsers.find((item) => {
        return item.DID === req.body.DID
    });
    try {
        res.send(result.value)
    } catch (e) {
        throw new Error('123')
    }
});

app.put('/putMessage', urlencodedParserjs, (req, res) => {
     db.putMessage(req.body);
});

app.get('/getMessages', urlencodedParserjs, (req, res) => {
    db.getMessages(req, res);
});

app.put('/userOn', urlencodedParserjs, (req, res) => {
    console.log(req.body)
    if(!users.isAlredyConnected(req.body.DID)){
        users.add(req.body);
    } else {
        users.openWindow(req.body);
    }
});

app.put('/userOff', urlencodedParserjs, (req, res) => {
    console.log(req.body)
    users.remove(req.body.DID);
});

wss.on('connection',  ws => {
    ws.on('message', ms => {
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(ms);
            }
        })
    });
});

server.listen(process.env.PORT || port, () => {
   console.log(`Сервер запущен на порте: ${process.env.PORT}`);
});

