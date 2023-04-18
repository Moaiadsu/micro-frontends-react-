var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with reactApi");
  console.log("this is the reactApi");
});

module.exports = router;
