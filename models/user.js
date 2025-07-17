const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        password_hashed: DataTypes.STRING,
        role_id: {types: DataTypes.INTEGER },
        is_active: {types: DataTypes.BOOLEAN},
        created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false, // or true if you want Sequelize to auto-manage createdAt/updatedAt
    tableName: 'users' // specify table name if different
  

    });
    return User;
};