const getReviewModel = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('review', {
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  })
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.Products,{as: 'review', foreignKey: 'productId'});
  };
  return Reviews
}

export default getReviewModel
