var db = require('../config/connection')
var collection = require('../config/collections')
var { ObjectId } = require('mongodb')
const { response } = require('../app')

module.exports = {
  addProduct: (product, callback) => {
    db.get().collection('product').insertOne(product).then((data) => {
      console.log(data)
      callback(data.insertedId.toString())
    })
  },
  
  getAllProducts: () => {
    return new Promise(async (resolve, reject) => {
      let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
      resolve(products)
    })
  },
  
  deleteProduct: (prodId) => {
    return new Promise((resolve, reject) => {
      db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({ _id: new ObjectId(prodId) }).then((response) => {
        // console.log(response)
        resolve(response)
      })
    })
  },
  
  getProductDetails: (proId) => {
    return new Promise((resolve, reject) => {
      db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: new ObjectId(proId) })
        .then((product) => {
          resolve(product)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
 

updateProduct: (proId, proDetails) => {
  return new Promise((resolve, reject) => {
    db.get().collection(collection.PRODUCT_COLLECTION)
      .updateOne(
        { _id: new ObjectId(proId) }, // Use 'new' keyword here
        {
          $set: {
            Name: proDetails.Name,
            Description: proDetails.Description,
            Price: proDetails.Price,
            Category: proDetails.Category
          }
        }
      ).then((response) => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
  });
}

}
