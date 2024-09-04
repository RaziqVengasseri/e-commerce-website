var express = require('express');
const {render} = require('../app');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
const { log } = require('handlebars');

/* GET users listing. */
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
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{

  productHelpers.addProduct(req.body,(id)=>{
    let image = req.files.Image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }
      else{
        console.log(err)
      }
    })
    
  })
})

module.exports = router;
