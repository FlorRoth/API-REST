const Sequelize = require ('sequelize');

const BookModel = require ('./models/books')
const sequelize = new Sequelize ('rest-api','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

const Book = BookModel (sequelize, Sequelize);

sequelize.sync({ force : false})
.then(() => {
    console.log('Tablas sincronizadas');
})


module.exports = {
    Book
}