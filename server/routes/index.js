// маршруты по которым отрабатывают те или иные методы

const Router = require('express'); // экспортируем из експрес класс Router
const router = new Router();       // создаем обьект класса Router

const deviceRouter = require('./deviceRouter') // импортируем в переменную роутер из файла
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')


router.use("/user",userRouter); // передаем в общий обьект все маршруты поочереди
router.use("/type", typeRouter)
router.use("/brand",brandRouter)
router.use("/device",deviceRouter)


// обьединение всех роутеров в один


module.exports = router  // экспортируем его