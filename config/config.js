const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("DataBase Connected");
}

module.exports = {connectDB}