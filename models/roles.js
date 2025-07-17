const {DataTypes} = require('sequelize');
const {sequelize} = require('.');

/**
 * This module exports a function that defines the Role model.
 * 
 * @param {object} sequelize - The Sequelize instance.
 * @param {object} DataTypes - The DataTypes object, which contains data types for attributes.
 * @returns {object} - The Role model.
 */

module.exports = (sequelize, DataTypes) => {
    console.log('Creating Role model');

    return sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'roles'
    });
};
