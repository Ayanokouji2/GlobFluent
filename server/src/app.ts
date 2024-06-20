import express from 'express'

import userRouter from './Routes/user.route'
import quizRouter from './Routes/quiz.routes'

const app : express.Application = express()


app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/quiz', quizRouter)




export default app 