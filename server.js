const express = require('express');

const actionRouter = require('./data/routers/actionRouter');

const projectRouter = require('./data/routers/projectRouter');

const server = express();

server.use("/api/action", actionRouter);

server.use("/api/project", projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's pass the node api challenge!</h2>`)
})

server.use(express.json());

module.exports = server;