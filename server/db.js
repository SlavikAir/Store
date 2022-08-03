        //конфигурирование  подключения к Базе Данных
        
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // название базы данных
    process.env.DB_USER,    // имя юзера под которым мы подключаемся
    process.env.DB_PASSWORD, // пароль от этого юзера
    {
        dialect:'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)