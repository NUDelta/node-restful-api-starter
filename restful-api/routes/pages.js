module.exports = function (app) {
  var home = function (req, res) {
    res.render('index.html', {
      title: "hello"
    });
  };

  app.get("/", home);
  app.get("/index", home);

  app.all("/*", function (req, res) {
    res.render("<html><h4>Not found</h4></html>");
  });
};

