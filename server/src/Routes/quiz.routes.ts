import { Router } from 'express'

import { getAllQuizes, getQuizById } from '../Controller/quiz.controller'

const router = Router()

router
    .route('/all-quiz')
    .get(getAllQuizes)

router
    .route("/:id")
    .get(getQuizById)


export default router