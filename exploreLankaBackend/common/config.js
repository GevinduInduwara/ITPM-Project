const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

// Connecting to MongoDB
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    console.log('MongoDB URI:', uri);

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
