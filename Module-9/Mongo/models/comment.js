const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  content: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("comment", commentSchema);
