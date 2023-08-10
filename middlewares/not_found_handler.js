import createHttpError from "http-errors"


const notFoundHandler = (req, res, next) => {
    next(createHttpError(404, 'Ruta no encontrada'))
}

export default notFoundHandler