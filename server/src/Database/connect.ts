import mongoose from 'mongoose';
import { DB_NAME } from '../constants'

const URI = process.env.MONGO_URI as string

export default async function connectDB(){
    try {
        await mongoose.connect(`${URI}/${DB_NAME}`);
        console.log('Database connected successfully');
    } catch (error : any) {
        console.log('Error connecting to database: ', error.message as string);
    }
}
