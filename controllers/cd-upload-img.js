import { v2 } from "cloudinary";
import crypto from 'crypto'
import fs from 'fs'

import errHandler from "../middlewares/err-handler.js";

const cdUploadImg = async(req, res) => {
    try{

        const {base64Img} = req.body

        v2.config({
        cloud_name: process.env.CD_CLOUD_NAME,
        api_key: process.env.CD_API_KEY,
        api_secret: process.env.CD_API_SECRET,
        secure: true,
        });
        
        const imageBuffer = Buffer.from(base64Img, 'base64')

        const uniqueId = crypto.randomUUID()

        const imgFilePath = `images/${uniqueId}.png`

        fs.writeFileSync(imgFilePath, imageBuffer)
        
        const options = {
            resource_type: 'auto', 
            use_filename: true, 
            unique_filename: false,
            overwrite: true,
          };
        
        const response = await v2.uploader.upload(imgFilePath, options)

        fs.unlinkSync(imgFilePath)

        res.status(200).json({success: true, data :  response})
    }
    catch(error){
        const err = new Error(error.message)
        errHandler(err)
    }   
}

export default cdUploadImg