const getStaffModel = (sequelize, DataTypes) => {
  const Staff = sequelize.define('staff', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  })

  return Staff
}

export default getStaffModel
