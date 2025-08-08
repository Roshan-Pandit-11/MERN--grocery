const express = require('express')
const Router = express.Router ;
const userRouter = Router() ;
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt') ;
require('dotenv').config() ;
const z = require("zod") ;
const {userModel, productModel} = require('../db') ;
const { authentication } = require('./auth');
const e = require('express');

userRouter.post('/signup' , async (req , res) => {
  const {username , email , password} = req.body ;                               //added email
  const user = z.object({
    username : z.string().min(4).max(15) ,
    email : z.email().string().max(100) ,                                        //added email
    password : z.string().min(6).max(15) 
  })
  const data = user.safeParse(req.body) ;

  if (data.success){
  const hashedpassword = bcrypt.hashSync(password , 5) ;
  await userModel.create({
    username : username ,
    email : email ,                                                               //added email
    password : hashedpassword
  })
  res.json({
    message : "Account Created Successfully"
  })
  }
  else{
    res.json({
      message : data.error.issues
    })
  }
})

userRouter.post('/login' , async(req , res) => {
  const {username , password} = req.body ;
  const userfound = await userModel.findOne({
    username : username                                                                        // ya to email ya username login me email nhi dal rha but username ko email se replace kar sakta hai
  }) ;
  const verifyUser = bcrypt.compareSync(password , userfound.password) ;
  if (verifyUser) {
    const token = jwt.sign(username , process.env.JWT_SECRET) ;
    res.json({
    token : token ,
    message : "Successfully Login"
  })
  }
  else{
    res.json({
    message : "Wrong Credentials"
  })
  }
})

userRouter.get('/me' , authentication , async(req , res) => {
  const username = req.username ;
  const userfound = await userModel.findOne({
    username : username
  })
  const myproducts = await productModel.find({
    userid : userfound._id
  })
  res.json({
    myproducts : myproducts
  })
})

module.exports = ({
  userRouter : userRouter
})
