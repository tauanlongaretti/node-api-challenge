const express = require("express");

const projectModel = require("../helpers/projectModel");

const pRouter = express.Router();

// GET - Get all projects
pRouter.get("/", (req, res) => {
  projectModel
    .get(req.query)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ error: "Error retrieving the projects" });
    });
});

module.exports = pRouter;
