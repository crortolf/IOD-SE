const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("../dbConnect").Sequelize;

class Post extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    author: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    media: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: false,
    freezeTableName: true,
  },
);
module.exports = Post;
