module.exports = (sequelize, type) => {

    return sequelize.define('book',{
        ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        field_1: type.STRING,
        author: type.STRING,
        description: type.STRING,
        my_numeric_field: type.INTEGER
    })
}