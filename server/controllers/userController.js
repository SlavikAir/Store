const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')


class UserController {
    async registration(req, res, next) {
        const {email,password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("НЕ коректный email или пароль"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,role,password: hashPassword})
        const basket = await Basket.create({userId : user.id})
        // const jwt = 
    }
    async login(req, res) {

    }
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("не задан id"))
        }
        res.json(id)
    }

}

module.exports = new UserController()