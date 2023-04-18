var express = require("express");
var router = express.Router();
const { registerUser, authUser } = require("../controllers/userControllers");

router.post("/register", registerUser);
router.post("/login", authUser);

module.exports = router;
