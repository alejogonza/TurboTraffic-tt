const getProductModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    skuId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    shortDescription: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING(455),
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  })
  Products.associate = (models) => {
    Products.hasMany(models.Reviews);
  };
  return Products
}

export default getProductModel
