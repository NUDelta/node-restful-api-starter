exports.todoService = function (req, res) {
  res.render('index', {
    env: process.env.ENV,
    buildJS: process.env.buildJS,
    buildCSS: process.env.buildCSS
  });
};
