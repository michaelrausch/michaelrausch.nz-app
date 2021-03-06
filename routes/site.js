var express   = require('express');
var router    = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Michael Rausch",
    headerclass:"endless-river-gradient"
  });
});

/* GET resume. */
router.get('/resume', function(req, res, next) {
  res.render('resume',{
    title: "Resume",
    headerclass: "mojito-gradient"
  });
});

/* GET Contact form. */
router.get('/contact', function(req, res, next) {
  res.render('contact',{
    title: "Contact Me",
    headerclass: "green-beach-gradient",
    includemap: true
  });
});

module.exports = router;
