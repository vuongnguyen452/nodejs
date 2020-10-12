const db = require("../db");
const { v4: uuidv4 } = require("uuid");

module.exports.index = function (req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
};

module.exports.search = function (req, res) {
  const results = db
    .get("users")
    .value()
    .filter(
      (item) =>
        item.name
          .toLocaleLowerCase()
          .indexOf(req.query.name.toLocaleLowerCase()) !== -1
    );
  res.render("users/index", {
    users: results
  });
};

module.exports.create = function (req, res) {
  db.get("users")
    .push({ id: uuidv4(), ...req.body })
    .write();
  res.redirect("/user");
};

module.exports.getDetail = function (req, res) {
  const id = req.params.id;
  const user = db
    .get("users")
    .value()
    .find((item) => item.id === id);
  res.render("users/view", {
    user: user
  });
};
