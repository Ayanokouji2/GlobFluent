import { Router } from 'express'

import { createQuiz, getAllQuizes, getQuizById } from '../Controller/quiz.controller'

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


export default router