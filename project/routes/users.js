var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admin', function(req, res, next) {
  res.render('adminPanel', { title: 'Express' });
});

router.get('/register', function(req,res,next){
  res.render('registerPanel');
});

router.get('/login', function(req,res,next){
  res.render('loginPanel');
});

module.exports = router;
