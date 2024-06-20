import { Router } from 'express'

import { getAllQuizes, getQuizById } from '../Controller/quiz.controller'

const router = Router()

router
    .route('/all-quiz')
    .get(getAllQuizes)

router
    .route("/quiz/:id")
    .get(getQuizById)


export default router