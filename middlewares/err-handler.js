
const errHandler = async (error, req, res, next) => {
    error.status = error.status || 500
    error.name = error.name || "internal_server_error"
    error.message = error.message || "Something went wrong"
    res.status(error.status).json({
        success : false,
        error : error.name,
        message : error.message})
}

export default errHandler