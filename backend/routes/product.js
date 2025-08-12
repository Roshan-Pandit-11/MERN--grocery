const {Router} = require("express") ;
const productRouter = Router() ;
const {authentication} = require('./auth')
const {productModel, userModel} = require('../db')
const multer = require('multer') ;
const storage = multer.memoryStorage() ;
const uploads = multer({storage}) ;

productRouter.get('/' , async (req , res) => {
  const products = await productModel.find({

  })
  res.json({
    products : products
  })
})

productRouter.get('/:id' , async (req , res) => {
  const {id} = req.params ;
  const product = await productModel.findOne({
    _id : id
  })
  if (product){
    res.json({
    product : product
  })
  }
  else{
    res.json({
    message : "product not found"
  })
  }
})

productRouter.post("/create" , authentication , uploads.single('image') , async(req , res) => {
  const image = req.file.buffer.toString('base64') ;
  const {name , description , price , catogery , stock} = req.body ;
  const userfound = await userModel.findOne({
    username : req.username
  })
  await productModel.create({
    name : name ,
    image : image ,
    description : description ,
    price : price ,
    catogery : catogery ,
    stock : stock ,
    userid : userfound._id
  })
  res.json({
    message : "Post created successfully"
  })
})

productRouter.put('/update/:id' , authentication , uploads.single('image')  ,async (req , res) => {
  const {id} = req.params ;
  const {name , description , price , catogery , stock} = req.body ;
  const image = req.file.buffer.toString('base64') ;

  await productModel.findOneAndUpdate({
    _id : id
  } , {
    name : name ,
    image : image ,
    description : description ,
    price : price ,
    catogery : catogery ,
    stock : stock
  })
  res.json({
    message : "Updated Successfully"
  })
})

productRouter.delete('/delete/:id' , authentication , async (req , res) => {
  const {id} = req.params ;
  await productModel.findOneAndDelete({
    _id : id
  })
  res.json({
    message : "deleted Successfully"
  })
})


module.exports = ({
  productRouter : productRouter
})