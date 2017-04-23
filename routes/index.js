var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("im here")
  res.render('index', { title: 'Twitter Bot Detector'});
});


router.post('/check', function(req, res, next) {
  var userName = req.body.handle;
  res.render('index', { title: 'Twitter Bot Detector'});
});

module.exports = router;
