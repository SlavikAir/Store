
class ApiError extends Error {
    constructor(status,message) {  
        super();
        this.status= status;       // присваеваем то что получаем параметрами
        this.message = message;
    }       
                                                  // статические функции єто те что можно візівать без создания обьекта
    static badRequest(message) {           
        return new ApiError(404, message)
    }
    static internal(message) {
        return new ApiError(500, message)
    }
    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError