const {DataTypes} = require('sequelize');
const {sequelize} = require('.');

module.exports = (sequelize, DataTypes) => {
    console.log('Creating Category model');

    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true },
        type: DataTypes.STRING
    }, {
        tableName: 'categories'
    });

    console.log('Category model created');
    return Category;
};
