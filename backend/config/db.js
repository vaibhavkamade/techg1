const mongoose = require("mongoose");

// Define URIs for different databases
const DB_URI1 = process.env.MONGODB_URI_1;
const DB_URI2 = process.env.MONGODB_URI_2;

// Create connections
const connectDb1 = async () => {
    try {
        await mongoose.connect(DB_URI1);
        console.log("Connection successful to DB 1");
    } catch (error) {
        console.error("Database 1 connection failed");
        console.error(error);
        process.exit(0);
    }
};

const connectDb2 = async () => {
    try {
        await mongoose.createConnection(DB_URI2, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connection successful to DB 2");
    } catch (error) {
        console.error("Database 2 connection failed");
        console.error(error);
        process.exit(0);
    }
};

// Export connections
module.exports = { connectDb1, connectDb2 };
