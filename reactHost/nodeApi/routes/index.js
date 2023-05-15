var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console log the url that was not found
  console.log('this is the url home page',req.url)
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
