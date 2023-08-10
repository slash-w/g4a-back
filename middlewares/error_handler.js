const errorHandler = (error,req,res,next) => {
    console.log(error)
    return res.status(error.status || 500).json({
        statusCode: error.status,
        messages: error.message
    })
}

export default errorHandler