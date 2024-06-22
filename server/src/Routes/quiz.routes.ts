import { Router } from 'express'

import { createQuiz, getAllQuizes, getQuizById } from '../Controller/quiz.controller'
import { verifyUser } from '../Middleware/auth.middleware'

const router = Router()

router
    .route('/all-quiz')
    .get(getAllQuizes)

router
    .route("/:id")
    .get(getQuizById)

router
    .use(verifyUser)
    .route("/create-quiz")
    .post(createQuiz)


export default router