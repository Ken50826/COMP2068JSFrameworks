var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/projects', (req, res, next) =>{
  res.render('projects', { title: 'projects' });
});
router.get('/contact', (req, res, next) =>{
  res.render('contact', { title: 'contact me' });
});
router.get('/about', (req, res, next) =>{
  res.render('about', { title: 'about' });
});
router.get('/index', (req, res, next) =>{
  res.render('home', { title: 'home' });
});



module.exports = router;
