const express = require('express')
const mongoose = require('mongoose') ;
const app = express()
require('dotenv').config() ;
const {userRouter} = require('./routes/user')
const {productRouter} = require('./routes/product')

app.use(express.json());

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