import { Router } from 'express'

import { addUserQuiz, createQuiz, getAllQuizes, getQuizById } from '../Controller/quiz.controller'
import { verifyUser } from '../Middleware/auth.middleware'

const router = Router()

router
    .route('/all')
    .get(getAllQuizes)

router
    .route("/:id")
    .get(getQuizById)
    .post(verifyUser, addUserQuiz)
    

router
    .route("/create-quiz")
    .post(createQuiz)



export default router