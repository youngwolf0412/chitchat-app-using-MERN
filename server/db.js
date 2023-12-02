const mongoose = require("mongoose");

exports.connectDB = async ()=>{
    try {
        await mongoose.connect(`mongodb://localhost:27017/mydb`);
        console.log(`the db is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
