const mongoose = require('mongoose') ;
const schema = mongoose.Schema ;
const objectid = mongoose.Schema.ObjectId ;

const userschema = new schema ({
  username : String ,
  email : String ,                           
  password : String
})

const productschema = new schema ({
  id : Number,
  name : String ,
  image : String ,
  description : String ,
  price : Number ,
  catogery : String ,
  stock : Number ,
  userid : objectid
})

const userModel = mongoose.model("user" , userschema) ;
const productModel = mongoose.model("product" , productschema) ;

module.exports = ({
  userModel : userModel ,
  productModel : productModel
})
