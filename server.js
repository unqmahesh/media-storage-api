import app from './app.js'

const PORT = process.env.PORT

const startServer = () => {
    try{
        app.listen(PORT, ()=>{console.log(`port is running on port ${PORT}`)})
    }
    catch(error){
        console.log(error)
    }
}

startServer()