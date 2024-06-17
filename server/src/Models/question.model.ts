import { Schema, model, Document } from 'mongoose'

export interface Question extends Document{
    ques : string
    correctAnswer : string
    options : [String : string]
}

const questionSchema : Schema<Question> = new Schema({
    ques : {
        type : String,
        required : true,
        trim : true
    },
    correctAnswer : {
        type : String,
        required : true,
        trim : true
    },
    options : {
        type : [String],
        required : true
    }
})

const questionModel = model<Question>('Question', questionSchema)

export default questionModel