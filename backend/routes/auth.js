const jwt = require('jsonwebtoken') ;
require('dotenv').config() ;

const authentication = (req , res , next) => {
  const token = req.headers.token ;
  const verifyuser = jwt.verify(token , process.env.JWT_SECRET) ;
  if (verifyuser) {
    req.username = verifyuser
    next()
  }
  else{
    res.json({
      message : "Unautherized"
    })
  }
}

module.exports = ({
  authentication : authentication
})