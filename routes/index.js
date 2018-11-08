var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Desarrollo de Aplicaciones de Vanguardia', usuario: 'Rafael Santos', cuenta: '21221036'});
});

module.exports = router;
