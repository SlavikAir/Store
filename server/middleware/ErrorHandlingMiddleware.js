const ApiError = require('../error/ApiError');

                                                    // принемает параметры - ошибка,запрос,ответ,дальше
module.exports = function (err, req, res,next) {    //  есле вызвать next - передадим упровление следующему в цепочке middlwere
    if ( err instanceof ApiError) {                 // есле класс ошибки ApiError тогда
        return res.status(err.status).json({message: err.message}) // тогда на клиент вернем ответ с статус кодом из ошибки
    }
    return res.status(500).json({message: "непредвиденная ошибка!"})
}