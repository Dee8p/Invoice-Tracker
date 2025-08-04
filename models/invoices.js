module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',  // Match your User model/table name
        key: 'id',
      },
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients', // Match your Client model/table name
        key: 'id',
      },
    },
    issue_date: DataTypes.DATEONLY,
    due_date: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    subtotal: DataTypes.DECIMAL(10, 2),
    tax: DataTypes.DECIMAL(10, 2),
  }, {
    timestamps: false,
  });

  Invoice.associate = (models) => {
    Invoice.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
    Invoice.belongsTo(models.Client, {
      foreignKey: 'client_id',
      onDelete: 'CASCADE',
    });
    Invoice.hasMany(models.InvoiceItem, {
      foreignKey: 'invoice_id',
      onDelete: 'CASCADE',
    });
  };

  return Invoice;
};
