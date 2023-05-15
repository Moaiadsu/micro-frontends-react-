const mongoose = require('mongoose');

const connectDB = async () => {
    const isDocker = process.env.docker
    const mongoUri = isDocker ? process.env.MONGO_URI_docker : process.env.MONGO_URI_local
    console.log(`mongoUri: ${mongoUri}`)
    try {
        const conn = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MONGDB Connected ${conn.connection.host}`)
    } catch (err) {
        console.error(`err ${err.message}`);
        process.exit();

    }
}

module.exports = connectDB;