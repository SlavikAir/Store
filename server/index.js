require('dotenv').config();            // конфиг dotenv чтобы можно было считывать переменные из .env
const express = require('express');   // импортируем экспресс
const sequelize = require('./db');    // импортируем подключение к базе данных
const models = require('./models/models'); // импорт моделей базы данных
const cors = require('cors');               // импорт cors для того чтобы отправлять запросы с браузера
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;        // Порт на котором работает наше приложение (process.env.PORT - получаем PORT из файла .env)
const router = require("./routes/index");    // мипортируем основной роутер который связывает все остальные
const errorHandler = require('./middleware/ErrorHandlingMiddleware'); // регестрируем Middelwere
const path = require('path')

const app = express()               // обьект запуск нашего приложения
app.use(cors())                     // передаем cors() того чтобы отправлять запросы с браузера
app.use(express.json())             // передаем в use чтобы наше переложение могло парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)             // передаем нашему приложению что при при таком url будет работать роутері

//   req  -  запрос на бэк
//   res  -  ответ с бэка

// ОБРОБОТКА ОШИБОК регестрируется последним 
app.use(errorHandler)

// функция запуска сервера и подключения к базе данных
const start = async () => {
    try {
        await sequelize.authenticate(); // с помочью этой функции осуществляется подключение к базе данных
        await sequelize.sync()          // сверяет состояние базы данных с схемой которую мы описали
        app.listen(PORT, ()=> console.log(`server start on port ${PORT}`))   // указываем какой порт прослушивать
    } catch (e) {
        console.log(e)
    }
}

start()
