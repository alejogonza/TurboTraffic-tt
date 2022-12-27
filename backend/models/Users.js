const getUsersModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    }
  })

  return Users
}

export default getUsersModel
