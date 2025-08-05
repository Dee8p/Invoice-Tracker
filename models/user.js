const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

/**
 * This module exports a function that defines the User model.
 * 
 * @param {object} sequelize - The Sequelize instance.
 * @param {object} DataTypes - The DataTypes object, which contains data types for attributes.
 * @returns {object} - The User model.
 */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password_hash: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        is_active: DataTypes.BOOLEAN,
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { timestamps: false, tableName: 'user', schema: 'public' });

    return User;
};
