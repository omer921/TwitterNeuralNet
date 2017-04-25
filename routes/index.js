var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("im here")

  res.render('index', { title: 'Twitter Bot Detector'});
});


router.post('/check', function(req, res, next) {
  var userName = req.body.handle;

  var options = {
    args: [userName]
  };

  var pyshell = new PythonShell('Classification.py', options);


  pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
    try {
      var data = JSON.parse(message);
      var result = [];
      for(key in data) {
        var screen = key;
        var obj = {
          'screen': screen
        }
        obj['data'] = {};
        for(k in data[key]) {

          obj['data'][k] = data[key][k];
          obj['data'][k]['title'] = k
        }
        result.push(obj)

      }
      console.log(JSON.stringify(result));
      res.render('index', { title: 'Twitter Bot Detector', data: result});
    } catch (e) {
      console.log(message);
      console.log(e);
      res.render('index', { title: 'An error was caught and logged'})
    }

  });
});

module.exports = router;
