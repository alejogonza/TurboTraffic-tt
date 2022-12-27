import { DataTypes } from 'sequelize'
import { sequelize } from '../database/dbInit'
import getProductModel from './products'
import getStaffModel from './Staff'
import getUsersModel from './Users'

const models = {
  Products: getProductModel(sequelize, DataTypes),
  Staff: getStaffModel(sequelize, DataTypes),
  Users: getUsersModel(sequelize, DataTypes)
}

export default models
