var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/contact', { title: 'contact', page: 'contact' });
});

module.exports = router;