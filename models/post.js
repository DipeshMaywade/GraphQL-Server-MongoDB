const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authoreId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      select: false,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
