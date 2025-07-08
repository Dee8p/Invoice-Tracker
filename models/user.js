const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING,
        role: {types: DataTypes.STRING, defaultValue: user}

    });
    return User;
};