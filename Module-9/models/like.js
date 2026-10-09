const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("like", likeSchema);
