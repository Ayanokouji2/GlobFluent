import express from 'express'
import userRouter from './Routes/user.route'

const app : express.Application = express()

app.use('/api/v1/user', userRouter)





export default app 