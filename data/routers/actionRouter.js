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
  projectModel.get(req.body.project_id).then(project => {
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

module.exports = aRouter;
