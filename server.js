const express = require ('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()

const connection = require('./config/config')

connection.connectDB()

app.get('/start', (req, res)=> {
    res.send("Ok ")
})

app.listen(process.env.PORT, () => {
    console.log(`server run at http://localhost:${process.env.PORT}`)
})