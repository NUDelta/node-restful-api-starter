var TaskCollection = require("../collections/TaskCollection");
var taskCollection = new TaskCollection();

module.exports = function (app) {
  app.get("/api/posts", function (req, res) {
    res.send(taskCollection.toJSON());
  });

  app.get("/api/posts/:id", function (req, res) {
    var requestedId = req.params.id;
    var taskModel = taskCollection.get(requestedId);

    if (!taskModel) {
      res.send(404);
    } else {
      res.send(taskModel.toJSON());
    }
  });

  app.post("/api/posts", function (req, res) {
    var postObject = req.body;
    var taskModel = taskCollection.add(postObject);
    res.send(taskModel.toJSON());
  });

  app.put("/api/posts", function (req, res) {
  });

  app.delete("/api/posts", function (req, res) {
  });

};