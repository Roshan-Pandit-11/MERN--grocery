const express = require('express')
const mongoose = require('mongoose') ;
const app = express()
require('dotenv').config() ;
const {userRouter} = require('./routes/user')
const {authentication} = require("./routes/auth")

app.use(express.json());

app.use('/user' , userRouter) ;
app.get('/home' , authentication ,(req , res) => {
  res.json({
    message : "Home Page"
  })
})

async function main() {
await mongoose.connect(process.env.MONGO_URL) ;
const PORT = 3001 ;
app.listen(PORT , () => {
console.log(`http://localhost:${PORT}`)
})
}

main() ;