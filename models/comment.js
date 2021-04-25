const mongoose = require("mongoose");

const commnetSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
      select: false,
    },
    postId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commnetSchema);
