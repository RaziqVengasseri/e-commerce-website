var express = require('express');
const {render} = require('../app');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
const { log } = require('handlebars');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  productHelpers.getAllProducts().then((products)=>{
    console.log(products);
    res.render('admin/view-products',{admin:true,products})
  })
  
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
