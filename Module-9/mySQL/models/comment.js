const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("../dbConnect").Sequelize;

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postID: { type: DataTypes.INTEGER, allowNull: false },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: false,
    freezeTableName: true,
  },
);
module.exports = Comment;
