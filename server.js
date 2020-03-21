const express = require("express");

const aRouter = require("./data/routers/actionRouter.js");

const pRouter = require("./data/routers/projectRouter.js");

const server = express();

server.use(express.json());

server.use("/api/action", aRouter);

server.use("/api/project", pRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's pass the node api challenge!</h2>`);
});

module.exports = server;
