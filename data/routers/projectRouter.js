const express = require("express");

const projectModel = require("../helpers/projectModel.js");

const pRouter = express.Router();

// GET - Get all projects
pRouter.get("/", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ Error: "Error retrieving the projects" });
    });
});

// POST - Post new project
pRouter.post("/", (req, res) => {
  const projectInfo = req.body

  projectModel
    .insert(req.body)
    .then(project => {
      if (projectInfo) {
      res.status(201).json(project);
      } else {
        res.status(400).json({ errorMessage: "Please provide name and description for the project." }) 
      }
    })
    .catch(() => {
      res.status(500).json({ Error: "Error creating project" });
    });
});

// PUT = Update project
pRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  projectModel
    .update(id, changes)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ Error: "The project could not be found" });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ Error: "There was a problem updating the project" });
    });
});

// DELETE = Delete project
pRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  projectModel
    .remove(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ Error: "The project has been removed" });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ Error: "There was a problem removing the project" });
    });
});

// GET - Get all actions of project
pRouter.get('/:id', (req, res) => {
    const {id} = req.params;

    projectModel.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(() => {
            res.status(500).json({ Error: "There was a problem retrieving actions for this project" })
        })
})

module.exports = pRouter;
