var express = require("express");
var { getNotes, CreateNote } = require("../controllers/noteController.js");
var { protect } = require("../middlewares/authMiddleware.js");

var router = express.Router();

router.get("/getnotes", protect, getNotes);
router.post("/create", CreateNote);


module.exports = router;
