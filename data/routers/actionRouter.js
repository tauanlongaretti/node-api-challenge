const express = require("express");

const actionModel = require("../helpers/actionModel");

const projectModel = require("../helpers/projectModel");

const aRouter = express.Router();

//Get - Get all actions
aRouter.get("/", (req, res) => {
  const { id } = req.params;

  actionModel
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(500).json({ Error: "There was a problem retrieving actions" });
    });
});

// POST - Post new action
aRouter.post("/", (req, res) => {
  projectModel.get(req.body.project_id)
  .then(project => {
    if (project) {
      actionModel
        .insert(req.body)
        .then(action => {
          res.status(200).json(action);
        })
        .catch(() => {
          res
            .status(500)
            .json({ Error: "There was a porblem creating this action" });
        });
    }
  });
});

// PUT - Update post
aRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  actionModel
    .update(id, changes)
    .then(action => {
      if (action) {
        res.status(200).json(action);
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

// DELETE - Delete action
aRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  actionModel
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

module.exports = aRouter;
