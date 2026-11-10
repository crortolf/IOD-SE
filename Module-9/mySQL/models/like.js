const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("../dbConnect").Sequelize;

class Like extends Model {}
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postID: { type: DataTypes.INTEGER, allowNull: false },
    userID: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: false,
    freezeTableName: true,
  },
);
module.exports = Like;
