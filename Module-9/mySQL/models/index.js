"use strict";
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

// Foreign keys (mirror the refs in the Mongo schemas)
User.hasMany(Post, { foreignKey: "author" });
Post.belongsTo(User, { foreignKey: "author" });

User.hasMany(Comment, { foreignKey: "userID" });
Comment.belongsTo(User, { foreignKey: "userID" });
Post.hasMany(Comment, { foreignKey: "postID" });
Comment.belongsTo(Post, { foreignKey: "postID" });

User.hasMany(Like, { foreignKey: "userID" });
Like.belongsTo(User, { foreignKey: "userID" });
Post.hasMany(Like, { foreignKey: "postID" });
Like.belongsTo(Post, { foreignKey: "postID" });

// Create any missing tables on startup (parent tables first)
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}
init().catch((err) => console.log("MySQL sync error: " + err.message));

module.exports = { User, Post, Comment, Like };
