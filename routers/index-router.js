import express from 'express'

import cdUploadImg from '../controllers/cd-upload-img.js'

const indexRouter = express()

indexRouter.route('/health').get((req, res) => {res.send("Api is healthy")})
indexRouter.route('/cd/upload-img').post(cdUploadImg)

export default indexRouter