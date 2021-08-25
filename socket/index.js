const express = require('express');
const expressWs = require('express-ws')(express());
const app = expressWs.app;
const expressCors = require('express-cors');
const PORT = process.env.SOCKET_APP_PORT || 3000;
const HOST = process.env.SOCKET_APP_HOST || "0.0.0.0";

app.use(express.json());
app.use(expressCors());

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function (req, res, next) {
    return res.json({message: "Hello WS", env: req.testing});
});

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
    });
    console.log('socket', req.testing);
});

app.listen(PORT, HOST);

console.log(`http://${HOST}:${PORT}`);
