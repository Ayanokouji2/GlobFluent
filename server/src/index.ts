import 'dotenv/config'
import app from './app'

import connectDB from './Database/connect'


const PORT = 5000 || parseInt(process.env.PORT as string) as number

connectDB()
    .then(() => {
        app.on('error', (err: any) => {
            console.error(err.message as string)
            process.exit(1)
        })

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error: Error) => { 
        console.error('Unable to connect to the database', error.message as string)
        throw error 
    })