import { DataTypes } from 'sequelize'
import { sequelize } from '../database/dbInit'
import getProductModel from './products'
import getUsersModel from './Users'
import getReviewModel from './Reviews'

const models = {
  Products: getProductModel(sequelize, DataTypes),
  Users: getUsersModel(sequelize, DataTypes),
  Reviews: getReviewModel(sequelize, DataTypes)
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models
