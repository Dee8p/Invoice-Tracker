module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Client',
        key: 'id'
      }
    },
    issue_date: DataTypes.DATEONLY,
    due_date: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    subtotal: DataTypes.DECIMAL(10, 2),
    tax: DataTypes.DECIMAL(10, 2)
  }, {
    timestamps: false
  });

  Invoice.associate = ({ User, Client }) => {
    Invoice.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    Invoice.belongsTo(Client, { foreignKey: 'client_id', onDelete: 'CASCADE' });
  };

  return Invoice;
};
