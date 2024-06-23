import { Router } from 'express'

import { userQuizReport, createQuiz, getAllQuizes, getQuizById } from '../Controller/quiz.controller'
import { verifyUser } from '../Middleware/auth.middleware'

const router = Router()

router
    .route('/all')
    .get(getAllQuizes)


router
    .route("/create")
    .post(createQuiz)

router
    .route("/:id")
    .get(getQuizById)
    .post(verifyUser, userQuizReport)
    

export default router