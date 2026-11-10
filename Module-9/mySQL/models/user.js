const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("../dbConnect").Sequelize;

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: false,
    freezeTableName: true,
  },
);
module.exports = User;
