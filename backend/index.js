const express = require('express')
const mongoose = require('mongoose') ;
const app = express()
const cors = require('cors') ;
require('dotenv').config() ;
const {userRouter} = require('./routes/user')
const {productRouter} = require('./routes/product')

app.use(express.json());

let corsOptions = {
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions)) ;
app.use('/user' , userRouter) ;
app.use('/product' , productRouter) ;

async function main() {
await mongoose.connect(process.env.MONGO_URL) ;
const PORT = 3001 ;
app.listen(PORT , () => {
console.log(`http://localhost:${PORT}`)
})
}

main() ;