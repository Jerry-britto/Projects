require('dotenv').config()
const express = require('express')
const app= express()
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/router')
const PORT =process.env.PORT|| 8000;
require('./db/conn')
const cookieParser = require('cookie-parser')
const Products = require('./models/productSchema');
const DefaultData = require('./defaultData')

app.use(express.json())
app.use(cookieParser(""))
app.use(cors())
app.use(router)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

DefaultData()
