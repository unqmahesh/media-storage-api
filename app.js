import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import indexRouter from './routers/index-router.js'


const app = express()

const clientOrigins = ['*']

app.use(cors({origin : clientOrigins}))
app.use(express.json({limit : '10mb'}))
app.use(express.urlencoded({extended:true}))

app.use('/media-storage/api/v1', indexRouter)

export default app