import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.pre('save', async function (next){
    
    if(this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 12)
        this.password = hashedPassword
    }
    next()


    // if(!this.isModified('password')) 
    //     return next()

    // const hashedPassword = await bcrypt.hash(this.password, 12)
    // this.password = hashedPassword
    // next()
})

userSchema.methods.comparePassword = async function ( password : string){
    return await bcrypt.compare(password, this.password)
}
const userModel = model<User>('User', userSchema)

export default userModel