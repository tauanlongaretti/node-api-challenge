const express = require('express');

const aRouter = require('./data/routers/actionRouter');

const pRouter = require('./data/routers/projectRouter');

const server = express();

server.use("/api/action", aRouter);

server.use("/api/project", pRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's pass the node api challenge!</h2>`)
})

server.use(express.json());

module.exports = server;