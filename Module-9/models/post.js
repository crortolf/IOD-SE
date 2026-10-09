const mongoose = require("mongoose");
const Schema = monghoose.Schema;

const postSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  media: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("post", postSchema);
