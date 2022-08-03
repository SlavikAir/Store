const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');



class TypeController {
    async create(req, res) {
        const {name} = req.body; // ис тела запроса извлекаем название этого типа
        const type = await Type.create({name}) //затем с помощью create создаем этот ТИП
        return res.json(type)       
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)

    } 

}

module.exports = new TypeController()