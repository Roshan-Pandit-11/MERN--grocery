const mongoose = require('mongoose') ;
const schema = mongoose.Schema ;
const objectid = mongoose.Schema.ObjectId ;

const userschema = new schema ({
  username : String ,
  password : String 
})

const userModel = mongoose.model("user" , userschema) ;

module.exports = ({
  userModel : userModel
})