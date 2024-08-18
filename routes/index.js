var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:'I phone',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRri6sgt9ndwMBJvxv4SVsFNZFUnQdJ3vaGDQ&s'
    },
    {
      name:'Samsung',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6omwZVBiRn__EC28XQ3UGePxVPDNErd0lg&s'
    },
    {
      name:'Vivo',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fz6exyJfKrblOuO2IRUWsFb9_QaceMfe-Q&s'
    },
    {
      name:'Motorola',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRynRkRpWap7hK_UJ5FkP-tCMtBA_9sjbxA&s'
    }
  ]
  res.render('index', { products,admin:false});
});

module.exports = router;
