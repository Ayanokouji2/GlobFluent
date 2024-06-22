import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import userRouter from './Routes/user.routes'
import quizRouter from './Routes/quiz.routes'

const app : express.Application = express()


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/quiz', quizRouter)




export default app 