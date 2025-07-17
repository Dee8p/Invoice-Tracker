module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
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
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    amount: DataTypes.DECIMAL(10, 2),
    description: DataTypes.TEXT,
    expense_date: DataTypes.DATEONLY,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    timestamps: false
  });

  Expense.associate = ({ User, Category }) => {
    console.log('Associating Expense with User and Category');
    Expense.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    Expense.belongsTo(Category, { foreignKey: 'category_id', onDelete: 'CASCADE' });
  };

  console.log('Expense model created');
  return Expense;
};
