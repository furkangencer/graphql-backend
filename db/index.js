import Mongoose from 'mongoose';
import { mongo } from '../config/environment';

let isConnected;
let db;

const connectDB = async () => {
  if (isConnected) return db;

  try {
    console.log('Connecting to database');
    db = await Mongoose.connect(mongo.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    isConnected = db.connections[0].readyState;
    console.log('Connected to database');
    return db;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectDB;