const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MONGDB Connected ${conn.connection.host}`)
    } catch (err){
        console.error(`err ${err.message}`);
        process.exit();

    }
}

module.exports = connectDB;