import { Router } from 'express'

import { addUserQuiz, createQuiz, getAllQuizes, getQuizById } from '../Controller/quiz.controller'
import { verifyUser } from '../Middleware/auth.middleware'

const router = Router()

router
    .route('/all-quiz')
    .get(getAllQuizes)

router
    .route("/:id")
    .get(getQuizById)

router
    .route("/create-quiz")
    .post(createQuiz)

router
    .use(verifyUser)
    .route("/:id/secure-quiz-marks")
    .post(addUserQuiz)

export default router