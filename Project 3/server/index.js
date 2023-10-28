const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json()) //tells the server that the request is in the form of json
app.use(express.urlencoded({extended:true})) 
app.use(cors())
const userRoutes = require('./routers/User_routes')
const connectToDb = require('./database/db')
const PORT = process.env.PORT || 3000

connectToDb();

app.use('/api',userRoutes)

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}/api/jerry`)
})

