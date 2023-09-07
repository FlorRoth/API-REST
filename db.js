const Sequelize = require('sequelize');
const BookModel = require('./models/books');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', 
});


const Book = BookModel(sequelize, Sequelize);


sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
});

module.exports = {
  Book,
  sequelize, 
};