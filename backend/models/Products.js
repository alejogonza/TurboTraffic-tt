const getProductModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    skuId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    shortDescription: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    shortDescription: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    dislike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }
  })

  return Products
}

export default getProductModel
