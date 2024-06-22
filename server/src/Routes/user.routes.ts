import Router from 'express'
import { getAllUser, registerUser, loginUser } from '../Controller/user.controller'

const router = Router()

//admin
router.get('/get-all-users', getAllUser)

//users
router.post('/register', registerUser ) 

router.post('/login', loginUser )


export default router