var express = require("express");
var { getNotes, CreateNote } = require("../controllers/noteController.js");
var { protect } = require("../middlewares/authMiddleware.js");
var { searchNotes, createSearchNotes } = require("../controllers/searchController.js");
const axios = require("axios");

var router = express.Router();

router.get("/getnotes", protect, getNotes);
router.post("/create", CreateNote);


// router.get("/search-notes", searchNotes);
// router.post("/create-search-notes", createSearchNotes );



module.exports = router;
