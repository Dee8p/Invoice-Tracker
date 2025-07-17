/**
 * This module exports a function that defines the Client model.
 * 
 * @param {object} sequelize - The Sequelize instance.
 * @param {object} DataTypes - The DataTypes object, which contains data types for attributes.
 * @returns {object} - The Client model.
 */
module.exports = (sequelize, DataTypes) => {
  console.log('Creating Client model');

  const Client = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    integer: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    email: DataTypes.STRING,
    cell_number: DataTypes.STRING,
    company_name: DataTypes.STRING,
    company_address: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
  }, { tableName: 'clients' });

  console.log('Client model created');

  return Client;
};
