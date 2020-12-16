const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

module.exports = {
  restricted(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: "You shall not pass!" });
    } else {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          res.status(401).json({ message: "Invalid token" });
        } else {
          req.decodedToken = decoded;
          next();
        }
      });
    }
  },
};
