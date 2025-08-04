module.exports = (sequelize, DataTypes) => {
  const InvoiceItem = sequelize.define('InvoiceItem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Invoices', // Make sure this matches your table/model name exactly (usually plural)
        key: 'id',
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
  }, {
    timestamps: false,
    hooks: {
      beforeSave: (invoiceItem) => {
        invoiceItem.total = invoiceItem.quantity * invoiceItem.unit_price;
      },
    },
  });

  InvoiceItem.associate = (models) => {
    InvoiceItem.belongsTo(models.Invoice, {
      foreignKey: 'invoice_id',
      onDelete: 'CASCADE',
    });
  };

  return InvoiceItem;
};
