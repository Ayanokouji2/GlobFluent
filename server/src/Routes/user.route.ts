import Router from 'express'
import { getAllUser } from '../Controller/user.controller'

const router = Router()

router.get('/get-all-users', getAllUser)


export default router