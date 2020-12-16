const router = require("express").Router();

const User = require("./user-model");
const { restricted } = require("../middleware/middleware");

router.get("/", restricted, (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

module.exports = router;
