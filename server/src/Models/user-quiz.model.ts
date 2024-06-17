import { Schema, model, Document } from 'mongoose';
import { User } from './user.model';
import { Quiz } from './quiz.model';

interface UserQuiz extends Document {
    user: User;
    quiz: Quiz;
    scored: number;
}

const userQuizSchema : Schema<UserQuiz>= new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    quiz: { 
        type: Schema.Types.ObjectId, 
        ref: 'Quiz' 
    },
    scored: { 
        type: Number, 
        required: true 
    }
})

const userQuizModel = model<UserQuiz>( 'UserQuiz', userQuizSchema );
export default userQuizModel;