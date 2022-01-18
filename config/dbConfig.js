import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    if (!err) console.log('Successfully connected to MongoDB')
    else console.log('Failed to connect to MongoDB')
})