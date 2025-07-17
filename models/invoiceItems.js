module.exports = (sequelize, DataTypes) => {
  const InvoiceItem = sequelize.define('InvoiceItem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Invoice',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    }
  }, {
    timestamps: false,
    hooks: {
      beforeSave(invoiceItem) {
        invoiceItem.total = invoiceItem.quantity * invoiceItem.unit_price;
      }
    }
  });

  InvoiceItem.belongsTo(models.Invoice, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });

  return InvoiceItem;
};
