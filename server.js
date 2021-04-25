const express = require ('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()

app.get('/start', (req, res)=> {
    res.send("Ok ")
})

app.listen(process.env.PORT, () => {
    console.log(`server run at http://localhost:${process.env.PORT}`)
})