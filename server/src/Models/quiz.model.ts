import { Schema, model, Document } from 'mongoose'
import { Question } from './question.model'

export interface Quiz extends Document{
    title : string
    questions : Question[] // leaving it for discussion
    marks : number
}


const quizSchema : Schema<Quiz> = new Schema({
    title:{
        type : String,
        required : true,
        trim : true
    },
    marks:{
        type : Number,
        required : true         
    },
    questions : {
        type : [Schema.Types.ObjectId],
        ref : "Question",
        required : true
    }

})

const quizModel = model<Quiz>( 'Quiz', quizSchema )
export default quizModel