import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
    username: string
    email: string
    password: string
}

const userSchema: Schema<User> = new Schema({
    username: {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        match : [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = model<User>('User', userSchema)

export default userModel